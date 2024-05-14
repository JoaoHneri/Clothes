import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card-cart',
  templateUrl: './card-cart.component.html',
  styleUrls: ['./card-cart.component.css']
})
export class CardCartComponent implements OnInit {
  @Input() item!: Product;
  @Output() productPriceEmitter = new EventEmitter<number>(); // Novo evento de saída
  route: string = environment.apiUrl;

  constructor() {}

  ngOnInit(): void {
    this.emitProductPrice(); // Chamar a função para emitir o preço do produto
  }
  
  emitProductPrice() {
    this.productPriceEmitter.emit(this.item.productPrice); // Emitir o preço do produto
  }
}
