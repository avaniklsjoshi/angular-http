import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {routing} from './app.routing';
import {AppComponent} from './app.component';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {UserService} from './shared/services/user.service';
import {UsersComponent} from './users/users.component';
import {UserListComponent} from './users/user-list/user-list.component';
import {UserSingleComponent} from './users/user-single/user-single.component';
@NgModule({
  imports:[routing,BrowserModule, HttpModule, FormsModule],
  declarations:[AppComponent,UsersComponent,UserListComponent,UserSingleComponent],
  providers:[UserService],
  bootstrap:[AppComponent]
})

export class AppModule{}