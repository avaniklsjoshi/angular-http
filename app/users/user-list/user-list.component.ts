import {Component, OnInit} from '@angular/core';
import {User} from '../../shared/model/User';
import {UserService} from '../../shared/services/user.service';

@Component({
  styles:[`
    .user-card{cursor:pointer;}
  `],
  templateUrl: './app/users/user-list/user-list.component.html'
})

export class UserListComponent implements OnInit{
  users:User[];
  constructor(private service:UserService){}
  ngOnInit(){
   this.service.getUsers()
     .subscribe(users=>this.users=users);
  }
}