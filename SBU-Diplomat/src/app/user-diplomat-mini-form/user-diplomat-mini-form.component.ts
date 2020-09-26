import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-diplomat-mini-form',
  templateUrl: './user-diplomat-mini-form.component.html',
  styleUrls: ['./user-diplomat-mini-form.component.css']
})
export class UserDiplomatMiniFormComponent implements OnInit {

  conflictName = "Chores";
  personName = "Suzy";
  conflictStatus = "Pending";
  sentReceived = "Sent";

  constructor() { }

  ngOnInit(): void {
  }

  aFunction() { console.log("test");}

}
