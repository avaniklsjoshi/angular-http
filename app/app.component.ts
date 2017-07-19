import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {User} from './shared/model/User';
import {Router} from '@angular/router';
import {AuthService} from './shared/services/auth.service';
import {UserService} from './shared/services/user.service';

@Component({
  selector : 'my-app',
  templateUrl: './app/app.component.html',
})

export class AppComponent implements OnInit{
  users:User[];
  constructor(
    private userservice:UserService,
    private authService:AuthService,
    private router:Router){

    }
  ngOnInit(){
    //grab users
    this.userservice.getUsers()
        .subscribe(
          users=>this.users=users
        );
  }
  
  /**
   * is the user logged in?
   */
  get isLoggedIn(){
    return this.authService.isLoggedIn();
  }

  /**
   * Log the user out
   */
  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}