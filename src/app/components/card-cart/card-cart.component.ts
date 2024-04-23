import { Component, Input, OnInit } from '@angular/core';
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
  totalPrice: number = this.price * this.quantity;

  @Input() prodId!: string;

  constructor(private prodS: ProdutosService) { }

  ngOnInit(): void {
    this.prodS.getProdutoPorId(this.prodId).subscribe((item)=>{
      this.price = item.productPrice;
      this.src = item.src;
      this.productName = item.productName;
    })
  }


  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

}
