import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginInfo } from '../shared/classes/LoginInfo';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AppService } from '../shared/services/login.service';
import { User } from '../shared/classes/User';
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
  //private apiURL = "https://sneakerx-api-final.azurewebsites.net";

  loginInfoForm = this.fb.group({
    emailAddress: [''],
    password: ['']
  })

  loginInfo: LoginInfo;
  

  constructor(private fb: FormBuilder, private AppService: AppService, private router : Router) {
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
        this.AppService.login(this.loginInfo)
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
        console.log("tiao");
        this.router.navigate(['/orderHistory'])};
    }
  }

}
