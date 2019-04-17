import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { LoginComponent } from './login/login.component';
import { ViewDetailsComponent } from './view-details/view-details.component';



@NgModule({
  declarations : [
    AppComponent,
    LoginComponent,
    OrderHistoryComponent,
    ViewDetailsComponent
  ],
  imports :[
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers:[AppComponent],
  bootstrap:[AppComponent]
})
export class AppModule { }
