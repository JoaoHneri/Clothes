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
import { ProductFormComponent } from './pages/product-form/product-form.component';
import { DashComponenteComponent } from './pages/dash-componente/dash-componente.component';
import { SuccesPaymentComponent } from './pages/succes-payment/succes-payment.component';
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';
import { ProductProcessComponent } from './pages/product-process/product-process.component';
import { SendProdsComponent } from './pages/send-prods/send-prods.component';
import { DeliveryFormComponent } from './components/delivery-form/delivery-form.component';
import { CategoryCardsComponent } from './components/category-cards/category-cards.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartRadialComponent } from './components/chart-radial/chart-radial.component';
import { ChartDateComponent } from './components/chart-date/chart-date.component';
import { AllProdsComponent } from './pages/all-prods/all-prods.component';
import { CardToUpdateComponent } from './components/card-to-update/card-to-update.component';
import { SkeletonCardComponent } from './components/skeleton-card/skeleton-card.component';
import { EditPodFormComponent } from './pages/edit-pod-form/edit-pod-form.component';
import { ScrollToTopService } from './services/scroll-to-top.service';
import { ChartDonutsComponent } from './components/chart-donuts/chart-donuts.component';
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
    ProductFormComponent,
    DashComponenteComponent,
    SuccesPaymentComponent,
    LoginAdminComponent,
    ProductProcessComponent,
    SendProdsComponent,
    DeliveryFormComponent,
    CategoryCardsComponent,
    ChartRadialComponent,
    ChartDateComponent,
    AllProdsComponent,
    CardToUpdateComponent,
    SkeletonCardComponent,
    EditPodFormComponent,
    ChartDonutsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule, SweetAlert2Module.forRoot(),
    NgApexchartsModule,
  ],
  providers: [ScrollToTopService],
  bootstrap: [AppComponent],
})
export class AppModule { }
