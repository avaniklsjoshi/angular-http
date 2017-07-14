import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {User} from '../model/User';

@Injectable()
export class UserService{
  private usersUrl:string='https://reqres.in/api/users';
  constructor(private http:Http){}

  /**
   * Get all users
   */
  getUsers():Observable<User[]>{
    return this.http.get(this.usersUrl)
    .map(res=>res.json().data)
    .map(users=>users.map(this.toUser))
    .catch(this.handleError);
  }
  /**
   * get single user
   */
  getUser(id: number):Observable<User>{
    return this.http.get(`${this.usersUrl}/${id}`)
    .map(res=>res.json().data)
    .map(this.toUser)
    .catch(this.handleError);  
  }
  /**
   * Convert user info from api to our standard/format
   */
   private toUser(user): User {
    return {
      id: user.id,
      name: `${user.first_name} ${user.last_name}`,
      username: user.first_name,
      avatar: user.avatar
    };
  } 
  /**
   * handle any errors from the api
   */
  private handleError(err){
      let errMessage:string;

      if(err instanceof Response){
        let body=err.json()||'';
        let error=body.error||JSON.stringify(body);
        errMessage=`${err.status} - ${err.statusText} || '' ${error}`;
      }
      else{
        errMessage=err.message ? err.message : err.toString();
      }
      return Observable.throw(errMessage);
  }
  
}