import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CartItemResponse } from 'src/app/interfaces/cartItemResponse';
import { AuthServicesService } from 'src/app/services/auth-services.service';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-carrinho-offcanvas',
  templateUrl: './carrinho-offcanvas.component.html',
  styleUrls: ['./carrinho-offcanvas.component.css'],
})

export class CarrinhoOffcanvasComponent implements OnInit, OnChanges {
  @Input() isClicked = false;
  @Output() isClickedChange = new EventEmitter<boolean>();
  @Output() userCartLoaded = new EventEmitter<any>();
  cartTotal: number = 0;

  cartProducts: any;

  constructor(
    private cartS: CartServiceService,
    private authS: AuthServicesService
  ) {}

  ngOnInit(): void {
    this.getUserCart();
  }

  ngOnChanges(): void {
    this.getUserCart();
  }

  toggleOffCanvas() {
    this.isClicked = !this.isClicked;
    this.isClickedChange.emit(this.isClicked);
  }

  closeOffCanvas() {
    this.isClicked = false;
    this.isClickedChange.emit(this.isClicked);
  }

  getUserCart() {
    const userId = String(this.authS.checkUserId());
    this.cartS.getCart(userId).subscribe((cart) => {
      this.cartProducts = cart;
      this.calculateCartTotal();
      this.userCartLoaded.emit(cart);
    });
  }

  calculateCartTotal() {
    this.cartTotal = 0;
    if (this.cartProducts) { 
      for (const item of this.cartProducts) {
        console.log("Item Cartoproa" + JSON.stringify(item.totalPrice));
        this.cartTotal += item.totalPrice || 0; 
      }
    }
  }

  updateTotalPrice(eventData: { totalPrice: number, isIncrement: boolean }, i: number) {
    const totalPrice = eventData.totalPrice;
    const isIncrement = eventData.isIncrement;
  
    if (isIncrement) {
      this.cartTotal += totalPrice; // Adiciona o totalPrice ao cartTotal
    } else {
      this.cartTotal -= totalPrice; // Subtrai o totalPrice do cartTotal
    }
  
    // Atualiza apenas o cartTotal correspondente ao item do carrinho modificado
    console.log(`Valor total do carrinho para o item ${i}: ${this.cartTotal}`);
  }
  
  
  
  
}
