import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../shared/model/User';
import {UserService} from '../../shared/services/user.service';

@Component({
  templateUrl:'./app/users/user-create/user-create.component.html'
})
export class UserCreateComponent implements OnInit{
  user:User={name:'',username:'',avatar:''};
  successMessage:string='';
  errorMessage:string='';

  constructor(private service:UserService, private router:Router){}
  
  ngOnInit(){
    
  }

  /**
  * Create a user
  */
  createUser(){
      this.successMessage='';
      this.errorMessage='';

      this.service.createUser(this.user)
        .subscribe(user=>{
          this.successMessage='User was created';
          this.router.navigate(['/users']);  //navigate to users page
          console.log('user was created');
        });
    }
}