import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {User} from './shared/model/User';

import {UserService} from './shared/services/user.service';

@Component({
  selector : 'my-app',
  templateUrl: './app/app.component.html',
})

export class AppComponent implements OnInit{
  users:User[];
  constructor(private service:UserService){}
  ngOnInit(){
    //grab users
    this.service.getUsers()
        .subscribe(
          users=>this.users=users
        );
  }
}