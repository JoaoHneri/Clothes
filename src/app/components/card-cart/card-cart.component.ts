import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-cart',
  templateUrl: './card-cart.component.html',
  styleUrls: ['./card-cart.component.css']
})
export class CardCartComponent implements OnInit {
  quantity: number = 1;
  price: number = 10; // Altere para o preço real do produto
  constructor() { }

  ngOnInit(): void {
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
