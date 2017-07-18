import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {routing} from './app.routing';
import {AppComponent} from './app.component';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
 

import {UserService} from './shared/services/user.service';
import {UsersComponent} from './users/users.component';
import {UserListComponent} from './users/user-list/user-list.component';
import {UserSingleComponent} from './users/user-single/user-single.component';
import {UserEditComponent} from './users/user-edit/user-edit.component';
import {UserCreateComponent} from './users/user-create/user-create.component';

@NgModule({
  imports:[
    routing,
    BrowserModule,
    HttpModule, 
    FormsModule],
  declarations:[
    AppComponent,
    UsersComponent,
    UserListComponent,
    UserSingleComponent,
    UserEditComponent,
    UserCreateComponent],
  providers:[UserService],
  bootstrap:[AppComponent]
})

export class AppModule{}