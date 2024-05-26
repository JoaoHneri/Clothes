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
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';
import { ProductProcessComponent } from './pages/product-process/product-process.component';
import { SendProdsComponent } from './pages/send-prods/send-prods.component';
import { AllProdsComponent } from './pages/all-prods/all-prods.component';
import { EditPodFormComponent } from './pages/edit-pod-form/edit-pod-form.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'products/:category', component: ProdutcsPagesComponent},
{path: 'account/:id', component: MyAccountComponent, canActivate:[AuthGuard]},
{path: 'product/:id', component: ProductInfoComponent},
{path: 'success-payment/:user_id/:_id', component: SuccesPaymentComponent, canActivate:[AuthGuard]},
// somente Admin
{path: 'prodForm', component: ProductFormComponent, canActivate:[AdminGuard]},
{path: 'dashboard', component: DashComponenteComponent, canActivate:[AdminGuard]},
{path: 'loginAdmin', component: LoginAdminComponent},
{path: 'prodProcess', component: ProductProcessComponent, canActivate:[AdminGuard]},
{path: 'sendProds/:_id', component: SendProdsComponent, canActivate:[AdminGuard]},
{path: 'allProdsAdmin', component: AllProdsComponent, canActivate:[AdminGuard]},
{path: 'editProd/:_id', component: EditPodFormComponent, canActivate:[AdminGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
