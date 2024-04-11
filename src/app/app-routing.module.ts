import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProdutcsPagesComponent } from './pages/produtcs-pages/produtcs-pages.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'products/:category', component: ProdutcsPagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
