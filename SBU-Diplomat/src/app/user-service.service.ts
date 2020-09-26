import { Injectable } from '@angular/core';
import { User } from './user';
import { catchError } from "rxjs/operators";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { fromEventPattern, Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }
  apiURL = "http://localhost:8080/users";

  public createUser(user){
    return this.http.post("http://localhost:8080/users", user, {
      responseType: "text" as "json",
    });
  }

  getUsers(): Observable<any>{
    return this.http.get<User[]>(this.apiURL).pipe(catchError(this.handleError));
  }

  addUsers(user)
  {return this.http.post(this.apiURL, user, {
    responseType: "text" as "json",
  });}

  public deleteUsers(username){
    console.log(username);
    return this.http.delete(this.apiURL + "/" + username);
  }

  getUser(username:string):Observable<any>{
    return this.http.get(`${this.apiURL}/${username}`);
  }
  public handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = "Server side error";
    if (errorResponse.error instanceof ErrorEvent) {
      console.error("Client Side Error: ", errorResponse.error.message);
    } else {
      console.error("Server Side error", errorResponse);
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
