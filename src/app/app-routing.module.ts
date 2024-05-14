import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProdutcsPagesComponent } from './pages/produtcs-pages/produtcs-pages.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { ProductInfoComponent } from './pages/product-info/product-info.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'products/:category', component: ProdutcsPagesComponent},
{path: 'account/:id', component: MyAccountComponent
},
{path: 'product', component: ProductInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
