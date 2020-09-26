import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {Router} from '@angular/router'
import {UserServiceService} from '../user-service.service';
@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css']
})
export class DisplayUsersComponent implements OnInit {
  users:User[]
  errorMsg:any;
  constructor(public UserService:UserServiceService, private router: Router) { }

  ngOnInit(): void 
	{
		this.errorMsg = "";
		this.UserService.getUsers().subscribe
		(
			(data) => this.users = data,
			(error) => this.errorMsg = error,//error/failure
			() => console.log('the sequence completed!')//complete
		)
  }
  displayUser(user: User): void
	{
		this.router.navigate(['/users/', user.username]);
	}
}
