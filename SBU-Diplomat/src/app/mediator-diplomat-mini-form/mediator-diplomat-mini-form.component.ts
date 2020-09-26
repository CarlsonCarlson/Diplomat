import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mediator-diplomat-mini-form',
  templateUrl: './mediator-diplomat-mini-form.component.html',
  styleUrls: ['./mediator-diplomat-mini-form.component.css']
})
export class MediatorDiplomatMiniFormComponent implements OnInit {

  conflictName = "Chores";
  person1Name = "Suzy";
  person2Name = "Peter";
  conflictStatus = "Pending";
  deadline = "20 hours";

  constructor() { }

  ngOnInit(): void {
  }

  aFunction() { console.log("test");}

}
