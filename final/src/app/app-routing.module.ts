import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { LoginComponent } from './login/login.component';
import { ViewDetailsComponent } from './view-details/view-details.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"orderHistory", component:OrderHistoryComponent},
  {path:"orderDetails", component: ViewDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
