import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginInfo } from '../shared/classes/LoginInfo';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LoginService } from '../shared/services/login.service';
import { UserInfoDetailsService } from '../shared/services/user-info-details.service'
import { User } from '../shared/classes/User';
import userModel from '../shared/classes/userModel';
import { Router } from '@angular/router';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = "Sneaker Website Login Page";
  user:User;

  loginInfoForm = this.fb.group({
    emailAddress: [''],
    password: ['']
  })

  loginInfo: LoginInfo;
  

  constructor(private fb: FormBuilder, private loginService: LoginService, private router : Router, public userInfoDetailsService: UserInfoDetailsService) {
    // console.log("Try to get API");
    // this.loginInfo = new LoginInfo(this.loginInfoForm.value.emailAddress, this.loginInfoForm.value.password);
    // this.conacts();
    // this.onLogin();
  }

  ngOnInit(){

  }

  // conacts(){
  //   console.log(this.loginInfo.emailAddress+"1");
  //   this.onLogin().subscribe(loginInfo =>{ loginInfo = loginInfo;
  //   })
  // }

  async onLogin() {
    if(this.loginInfoForm.value.emailAddress == '' || this.loginInfoForm.value.password == '')
    {
      alert("All fields are required, please try again!");
    }
    else{
    this.loginInfo = new LoginInfo(this.loginInfoForm.value.emailAddress, this.loginInfoForm.value.password);
    //console.log(this.loginInfo.emailAddress);
    
      const promise = new Promise((resolve, reject) => {
        this.loginService.login(this.loginInfo)
          .toPromise()
          .then(
            res => { // Success
              
              this.user = res;
              resolve();
              //console.log(this.user.userName);
              //console.log(this.user.userID) 
            },         
          );
      });
      await promise;
      //console.log(this.user.userName);
      //console.log(this.user.userID);
      if(this.user.pwd == "wrong"){
        alert("Wrong password, please try again!");
      }
      else if(this.user.pwd == "noExist")
      {
        alert('Please register first!');
      }
      else {
        //console.log("tiao");
        //console.log(this.user.balance);
        this.userInfoDetailsService.setUserInfoDetails(this.user);
        this.router.navigate(['/home'])};
    }
  }

  toRegister(){
    this.router.navigate(['/register']);
  }

}
