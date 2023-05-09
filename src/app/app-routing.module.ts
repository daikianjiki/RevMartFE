import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';

const routes: Routes = [
  { path: 'home', component:  HomeComponent},
  { path: 'products', component: ProductsPageComponent},
  { path: 'checkout', component: CheckoutPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
