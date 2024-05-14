import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardsHomeComponent } from './components/cards-home/cards-home.component';
import { AnuncioCollectionComponent } from './components/anuncio-collection/anuncio-collection.component';
import { ContatoComponent } from './components/contato/contato.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProdutcsPagesComponent } from './pages/produtcs-pages/produtcs-pages.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HttpClientModule } from '@angular/common/http';
import { CarrinhoOffcanvasComponent } from './components/carrinho-offcanvas/carrinho-offcanvas.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {MatDialogModule} from '@angular/material/dialog';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { ModalAuthComponent } from './components/modal-auth/modal-auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { OverviewComponent } from './components/overview/overview.component';
import { OrderCardComponent } from './components/order-card/order-card.component';
import { OrderSplitComponent } from './components/order-split/order-split.component';
import { CardCartComponent } from './components/card-cart/card-cart.component';
import { ProductInfoComponent } from './pages/product-info/product-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CardsHomeComponent,
    AnuncioCollectionComponent,
    ContatoComponent,
    FooterComponent,
    ProdutcsPagesComponent,
    ProductCardComponent,
    CarrinhoOffcanvasComponent,
    LoginPageComponent,
    LoginFormComponent,
    RegisterFormComponent,
    ModalAuthComponent,
    MyAccountComponent,
    OverviewComponent,
    OrderCardComponent,
    OrderSplitComponent,
    CardCartComponent,
    ProductInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule, SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
