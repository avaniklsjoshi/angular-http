import {Component, OnInit} from '@angular/core';
import {UserService} from '../shared/services/user.service';

@Component({
  selector:'my-users',
  templateUrl:'./app/users/users.component.html'
})
export class UsersComponent implements OnInit{
  successMessage='';
  errorMessage='';

  constructor(private service:UserService){  }
 
  ngOnInit(){
    
    this.service.userCreated$.subscribe(user=>{
    this.successMessage=`${user.name} has been created`;
    this.clearMessages();
  });

    this.service.userDeleted$.subscribe(user=>{
    this.successMessage=`the user has been Deleted`;
    this.clearMessages();  
  });

  }
/**
 * Clear all messages after 5  secs
 */
  clearMessages(){
      setTimeout(()=>{
        this.successMessage='';
        this.errorMessage='';
      },5000);
    }
}