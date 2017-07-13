import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {User} from './shared/model/User';

@Component({
  selector : 'my-app',
  templateUrl: './app/app.component.html',
})

export class AppComponent implements OnInit{
  users:User[];
  constructor(private http:Http){}
  ngOnInit(){
    //grab users
    this.http.get('https://reqres.in/api/users')
      .subscribe(data=>{
        console.log(data.json());
        this.users=data.json().data;
      });
  }
}