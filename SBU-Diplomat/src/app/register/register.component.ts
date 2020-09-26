import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {UserService} from '../user-service.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formdata;
  constructor(public userService: UserService,private router:Router) { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
			firstName: new FormControl("", Validators.required),
			lastName: new FormControl("", Validators.required),
			email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      gender: new FormControl("", Validators.required)
		});		
  }
  register(user): void
	{
		var u = new User(user.username, user.pasword, user.firstName, user.middleName, user.lastName,user.gender,user.email,user.mediator);
		this.userService.register(u).subscribe((data: {}) =>
		{
			this.router.navigate(['/']);
		})
	}
}
