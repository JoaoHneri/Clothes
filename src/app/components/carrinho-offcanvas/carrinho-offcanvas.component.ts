import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CartItemResponse } from 'src/app/interfaces/cartItemResponse';
import { AuthServicesService } from 'src/app/services/auth-services.service';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { environment } from 'src/environments/environment';

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
  route: string = environment.apiUrl;
  cartProducts: any;
  totalProductPrice: number = 0;

  constructor(
    private cartS: CartServiceService,
    private authS: AuthServicesService
  ) {}


  ngOnChanges(changes: SimpleChanges): void {

    this.getUserCart();
  }

  ngOnInit(): void {
    this.getUserCart();
  }

  toggleOffCanvas() {
    this.isClicked = !this.isClicked;
    this.isClickedChange.emit(this.isClicked);
  }



  closeOffCanvas() {
    this.isClicked = false;
    this.isClickedChange.emit(this.isClicked);
    this.cartTotal = 0; 
  }


  getUserCart() {
    const userId = String(this.authS.checkUserId());
    this.cartS.getCart(userId).subscribe((cart) => {
      this.cartProducts = cart;
      this.calcularTotalProductPrice(); // Chama o método para calcular o total dos preços dos produtos
    });
  }
  
  calcularTotalProductPrice() {
    if (this.cartProducts) {
      this.totalProductPrice = this.cartProducts.reduce((total: any, product: any) => {
        return total + product.productPrice;
       
      }, 0);
      console.log(this.totalProductPrice);
    }
  }



  deleteItemCart(cart_Id: string) {
    const user_Id = String(this.authS.checkUserId());
    this.cartS.deleteItemCart(user_Id, cart_Id).subscribe(()=>{
      this.toggleOffCanvas();
    });
  }

}
