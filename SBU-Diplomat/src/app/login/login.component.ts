import { Component, OnInit } from '@angular/core';
import {UserService} from '../user-service.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { User } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formdata: FormGroup;
  constructor(public userService: UserService,private router:Router, private  formBuilder: FormBuilder) { }
  get f() { return this.formdata.controls; }
  ngOnInit(): void {
    this.formdata = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  login(){
    this.userService.getUser(this.f.username.value)
    .subscribe((data: {}) =>
		{
      this.router.navigate(['/']);
      this.userService.loggedIn = true;
      this.userService.username = this.f.username.value;
      console.log(this.userService.username)
		})
  }
}
