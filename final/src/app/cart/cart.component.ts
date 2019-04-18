import { Component, OnInit} from '@angular/core';
import { CartInfo } from '../shared/classes/cartInfo';
import { UserInfoDetailsService } from '../shared/services/user-info-details.service';
import { User } from '../shared/classes/User';
import {CartService } from '../shared/services/cart.service';
import {Router} from "@angular/router";
import userModel from '../shared/classes/userModel';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private cartInfos: Array<CartInfo> = [];
  private b: Array<number> = [];
  private user:User;
  private totalCost:number=0;
  constructor(
    private cartService: CartService,
    private userInfoDetailsService: UserInfoDetailsService,
    private router:Router,
    ) { }

  ngOnInit() {
    this.user = this.userInfoDetailsService.getUserInfoDetails();
    this.getCartInfo();
  }


  async getCartInfo() {
    console.log(this.user.userID);
    const promise = new Promise((resolve, reject) => {
      this.cartService.getCart(this.user.userID)
        .toPromise()
        .then(
          res => { // Success
            
            this.cartInfos=res;
            console.log("!!!!"+this.cartInfos);
            resolve();
          },         
        );
    });
    await promise;
    console.log(this.cartInfos);
  }

  move(value){
    const cartInfo = {
      userID:this.user.userID,
      itemID:value.itemID,
      itemName:value.itemName,
      itemSize:value.itemSize,
      itemInCartAmount:-1,
      price:value.price,
      picLink:value.picLink
    }
    this.cartService.addCart(cartInfo).subscribe();
    alert("remove successfully");
  }

  async checkOut() {
    console.log(this.user.userID);
    this.getCartInfo();
    for(var _i=0;_i<this.cartInfos.length;_i++){
      this.totalCost=this.totalCost+this.cartInfos[_i].price;
      console.log("in checkout:"+this.totalCost);
    }
    console.log("after count checkout:"+this.totalCost);
    console.log("old balance:"+this.user.balance);
    if(this.totalCost>this.user.balance){
      alert("sorry");
    }else{
      const promise = new Promise((resolve, reject) => {
      this.cartService.check(this.user.userID)
        .toPromise()
        .then(
          res => { // Success           
            this.user.balance = res;
            resolve();
          },      
        );
    });
    await promise;
    console.log("after checkout:"+this.user.balance);
    alert("Checkout successfully, but due to internet traffic jams, there will be a little delay for your order history updating, please check it later! During this time you can enjoy a puzzle game if you want!");
    this.onNavigate();
    setTimeout(() => {
      this.router.navigate(['/home']);
    },5000);
    }
  }

  onNavigate(){
    //this.router.navigateByUrl("https://www.google.com");
    window.open("https://imgpuzzle.azurewebsites.net","_blank");
  }

  toHome(){
    this.router.navigate(['/home']);
  }

  logOut(){
    this.user=userModel;
    this.router.navigate(['/login']);
  }

}
