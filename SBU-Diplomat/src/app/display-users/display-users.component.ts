import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {Router} from '@angular/router'
import {UserService} from '../user-service.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css']
})
export class DisplayUsersComponent implements OnInit {
   users: Observable<User[]>;
  
  constructor(  private UserService:UserService,private router: Router){

   }
  ngOnInit(): void 
	{	
    this.reloadData();
  }
  
  reloadData(){
    this.UserService.getUsers().subscribe((data)=>(this.users = data));
  }
  deleteUser(username: string){
    this.UserService.deleteUsers(username)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
  }

}
