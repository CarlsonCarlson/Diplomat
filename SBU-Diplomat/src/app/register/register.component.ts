import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {UserService} from '../user-service.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formdata: FormGroup;
  constructor(public userService: UserService,private router:Router, private  formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formdata = this.formBuilder.group({
      username:['', Validators.required],
      password:['', Validators.required],
      email:['', Validators.required],
      firstName:['',Validators.required],
      middleName:['',Validators.required],
      lastName:['',Validators.required],
      gender:['',Validators.required]
    })	;
  }
  register(): void
	{
    this.userService.register(this.formdata.value)
    .subscribe((data: {}) =>
		{
			this.router.navigate(['/']);
		})

	}
}
