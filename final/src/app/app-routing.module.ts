import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { LoginComponent } from './login/login.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CartComponent } from './cart/cart.component';
import { UpdateInfoComponent } from './update-info/update-info.component';
import { RegistComponent } from './regist/regist.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"orderHistory", component:OrderHistoryComponent},
  {path:"orderDetails", component: ViewDetailsComponent},
  {path:'home',component:HomePageComponent},
  {path:'cart',component:CartComponent},
  {path:'update',component:UpdateInfoComponent},
  {path:'register',component:RegistComponent},
  {path:'login',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
