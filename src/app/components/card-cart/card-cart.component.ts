import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthServicesService } from 'src/app/services/auth-services.service';
import { ProdutosService } from 'src/app/services/produtos.service';
import { environment } from 'src/environments/environment';

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
  @Output() totalPriceChange: EventEmitter<number> = new EventEmitter<number>();

  constructor(private prodS: ProdutosService) { }

  ngOnInit(): void {
    this.prodS.getProdutoPorId(this.prodId).subscribe((item)=>{
      this.price = item.productPrice;
      this.src = item.src;
      this.productName = item.productName;
      this.calculateTotalPrice(); // Calculate totalPrice initially
    })
  }

  calculateTotalPrice() {
    this.totalPrice = this.quantity * this.price; // Calcula o novo preço total com base na nova quantidade
    this.totalPriceChange.emit(this.totalPrice); // Emite o novo preço total para o componente pai
  }
  

  increaseQuantity() {
    this.quantity++;
    this.calculateTotalPrice(); 
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--; // Diminui a quantidade apenas se for maior que 1
      this.calculateTotalPrice(); // Recalcula o preço total após a diminuição da quantidade
    }
  }
  
}
