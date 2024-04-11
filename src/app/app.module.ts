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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
