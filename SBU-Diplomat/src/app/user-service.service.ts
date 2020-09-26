import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import {User} from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { 
    this.loggedIn = false;
    this.username = '';
  }
  public loggedIn = false;
  public username = '';
  apiURL = "http://localhost:8080/users";

  public createUser(user: Object){
    return this.http.post(`${this.apiURL}`, user);
  }

  getUsers(): Observable<any>{
    return this.http.get<User[]>(this.apiURL);
  }

  addUsers(user: Object)
  {
    return this.http.post(`${this.apiURL}`, user);
  };

  public deleteUsers(username: string){
    return this.http.delete(`${this.apiURL}/${username}`, {responseType: 'text'});
  }

  getUser(username:string):Observable<any>{
    return this.http.get(`${this.apiURL}/${username}`);
  }

  register(user: User): Observable<User[]>{
    return this.http.post<User[]>("http://localhost:8080/users", user);
  }
}
