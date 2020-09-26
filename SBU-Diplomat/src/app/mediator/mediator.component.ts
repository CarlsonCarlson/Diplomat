import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mediator',
  templateUrl: './mediator.component.html',
  styleUrls: ['./mediator.component.css']
})
export class MediatorComponent implements OnInit {

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
