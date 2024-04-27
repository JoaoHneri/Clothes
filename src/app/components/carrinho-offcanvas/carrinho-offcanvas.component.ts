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
      for(let carts of this.cartProducts){
          this.cartTotal+= carts.productPrice;
      }
      this.userCartLoaded.emit(cart);
    });
  }

  
  
}
