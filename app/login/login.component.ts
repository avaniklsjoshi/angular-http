import {Component, OnInit} from '@angular/core';
import {AuthService} from '../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl:'./app/login/login.component.html'
})

export class LoginComponent implements OnInit{
  credentials = {username:'',password:''};
  successMessage:string='';
  errorMessage:string='';

  constructor(private service:AuthService, private router:Router){}

  ngOnInit(){}

  /**
   * is the user logged in?
   */
  get isLoggedIn(){
    return this.service.isLoggedIn();
  }

  /**
   * Login a user
   */
   login() {
    this.errorMessage = '';

    this.service.login(this.credentials.username, this.credentials.password)
      .subscribe(
        data => {
          this.router.navigate(['']);
          console.log(data); 
        },
        err => {
          this.errorMessage = err;
          console.error(err);
        }
      );
  }
}