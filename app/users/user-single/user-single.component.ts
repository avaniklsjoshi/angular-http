import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../shared/model/User';
import {UserService} from '../../shared/services/user.service';

@Component({
  templateUrl: './app/users/user-single/user-single.component.html'
})

export class UserSingleComponent implements OnInit{
  user:User;
  constructor(
    private route:ActivatedRoute,
    private service: UserService,
    private router:Router
    ){}
  ngOnInit(){
    //grab id from url
    let id=this.route.snapshot.params['id'];

    //use the userservice to getUser()
    this.service.getUser(id)
      .subscribe(user=>this.user=user);
  }

  /**
   * delete user
   */
  deleteUser(){
    this.service.deleteUser(this.user.id)
      .subscribe(data=>{
        console.log('User was deleted!');
        //route back to user page
        this.router.navigate(['/users']);
      });
  }
}