import userModel from '../shared/classes/userModel';
import { Component, OnInit } from '@angular/core';
import { UserInfoDetailsService } from '../shared/services/user-info-details.service'
import { GetAllOrdersService } from '../shared/services/get-all-orders.service'
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginInfo } from '../shared/classes/LoginInfo';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../shared/classes/User';
import { Router } from '@angular/router';
import { Alert, promise } from 'selenium-webdriver';
import { OrderInfo } from '../shared/classes/OrderInfo';
import { OrderDetailService } from '../shared/services/order-detail.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  constructor(
    private fb : FormBuilder,
    public userInfoDetailsService : UserInfoDetailsService, 
    public getAllOrdersService : GetAllOrdersService
  ) {
  }

  viewdetailsForm = this.fb.group({
    orderID: [''],
    orderDate: [''],
    totalCost: ['']
  })

  private user : User= this.userInfoDetailsService.getUserInfoDetails();
  orders : Array<OrderInfo> = [];
  vieworders : Array<OrderInfo> = [];
  //private order : OrderInfo;
  userID : number  = userModel.userID;



  ngOnInit() {
    console.log(this.user.balance);
    console.log(this.userID);
    this.getOrders();
    //console.log(this.orders[1].itemName);
  }

  async getOrders(){
    const promise_1 = new Promise((resolve, reject) => {
      this.getAllOrdersService.getAllOrders(this.userID)
        .toPromise()
        .then(
          res => { // Success           
            this.orders = res;
            resolve();
          },         
        );
    });
    await promise_1;
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!1 this need navigate to homepage !!!!!!!!!!!!!!!!!!!!!!
    if(this.orders.length == 0) {
      alert("Oh, you haven't buy anything here, go and get some cool sneakers!");
    }
    else if(this.orders.length == 1){
      if(this.orders[0].orderID == this.orders[1].orderID) this.vieworders.push(this.orders[0]);
      else {
        this.vieworders.push(this.orders[0]);
        this.vieworders.push(this.orders[1]);
      }
    }
    else{
      for(var i = 0; i < this.orders.length-2; i++){
        if(this.orders[i].orderID != this.orders[i+1].orderID){
          this.vieworders.push(this.orders[i]);
        }
      }
      this.vieworders.push(this.orders[this.orders.length-1]);
    }
  }

}

