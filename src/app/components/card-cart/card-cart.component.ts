import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthServicesService } from 'src/app/services/auth-services.service';
import { ProdutosService } from 'src/app/services/produtos.service';
import { environment } from 'src/environments/environment';
import { TotalPrice } from 'src/app/interfaces/TotalPrice';

@Component({
  selector: 'app-card-cart',
  templateUrl: './card-cart.component.html',
  styleUrls: ['./card-cart.component.css']
})
export class CardCartComponent implements OnInit {
  quantity: number = 1;
  price: number = 1;
  src!: string;
  route = environment.apiUrl;
  productName!: string;
  totalPrice: number = 0; // Initialize totalPrice
  
  @Input() prodId!: string;
  @Output() totalPriceChange: EventEmitter<TotalPrice> = new EventEmitter<TotalPrice>();

  constructor(private prodS: ProdutosService) { }

  ngOnInit(): void {
    this.prodS.getProdutoPorId(this.prodId).subscribe((item)=>{
      this.price = item.productPrice;
      this.src = item.src;
      this.productName = item.productName;
      this.calculateTotalPrice(true); // Calculate totalPrice initially
    })
  }

  increaseQuantity() {
    this.quantity++;
    this.calculateTotalPrice(true); // Passa true para indicar um incremento
  }
  
  decreaseQuantity() {
    if (this.quantity >= 1) {
      this.quantity--;
      this.calculateTotalPrice(false); // Passa false para indicar um decremento
    }
  }
  
  calculateTotalPrice(isIncrement: boolean) {
    this.totalPrice = this.quantity * this.price;
    this.totalPriceChange.emit({ totalPrice: this.totalPrice, isIncrement: isIncrement });
    console.log("Total Price component "+ this.totalPrice)
  }
}
