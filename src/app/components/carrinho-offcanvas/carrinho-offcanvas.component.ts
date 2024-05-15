import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CartItemResponse } from 'src/app/interfaces/cartItemResponse';
import { AuthServicesService } from 'src/app/services/auth-services.service';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { ProdPaymentsService } from 'src/app/services/prod-payments.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho-offcanvas',
  templateUrl: './carrinho-offcanvas.component.html',
  styleUrls: ['./carrinho-offcanvas.component.css'],
})
export class CarrinhoOffcanvasComponent implements OnInit, OnChanges {
  @Input() isClicked = false;
  @Output() isClickedChange = new EventEmitter<boolean>();
  @Output() userCartLoaded = new EventEmitter<boolean>();
  cartTotal: number = 0;
  route: string = environment.apiUrl;
  cartProducts: any;
  totalProductPrice: number = 0;

  constructor(
    private cartS: CartServiceService,
    private authS: AuthServicesService,
    private Pay: ProdPaymentsService,
    private router: Router
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if ('cartProducts' in changes) {
      this.checkIfCartEmpty();
    }
    this.getUserCart()
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
      console.log(this.cartProducts)
      this.calcularTotalProductPrice();
      this.checkIfCartEmpty();
    });
  }
  
  calcularTotalProductPrice() {
    if (this.cartProducts) {
      this.totalProductPrice = this.cartProducts.reduce((total: any, product: any) => {
        return total + product.productPrice;
      }, 0);
    }
  }

  deleteItemCart(cart_Id: string) {
    this.cartS.deleteItemCart(cart_Id).subscribe(() => {
      // Atualiza os dados do carrinho após a exclusão
      this.cartProducts = this.cartProducts.filter((item: any) => item._id !== cart_Id);
      this.calcularTotalProductPrice();
      this.checkIfCartEmpty();
    });
  }

  checkIfCartEmpty() {
    if (!this.cartProducts || this.cartProducts.length === 0) {
      this.userCartLoaded.emit(false);
    } else {
      this.userCartLoaded.emit(true);
    }
  }


  addToPay() {
    const userId = String(this.authS.checkUserId());
    this.Pay.dicionarProdutosAoCarrinho(userId, this.cartProducts).subscribe(() => {
      this.toggleOffCanvas()
      this.cartTotal = 0;
      this.router.navigateByUrl(`/account/${userId}`);
    }, error => {
      console.error('Erro ao adicionar produtos ao carrinho:', error);
    });
  }
  



}
