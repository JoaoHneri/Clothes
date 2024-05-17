import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProdutcsPagesComponent } from './pages/produtcs-pages/produtcs-pages.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { ProductInfoComponent } from './pages/product-info/product-info.component';
import { ProductFormComponent } from './pages/product-form/product-form.component';
import { DashComponenteComponent } from './pages/dash-componente/dash-componente.component';
import { SuccesPaymentComponent } from './pages/succes-payment/succes-payment.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'products/:category', component: ProdutcsPagesComponent},
{path: 'account/:id', component: MyAccountComponent},
{path: 'product/:id', component: ProductInfoComponent},
{path: 'success-payment/:user_id/:_id', component: SuccesPaymentComponent},
{path: 'prodForm', component: ProductFormComponent},
{path: 'dashboard', component: DashComponenteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
