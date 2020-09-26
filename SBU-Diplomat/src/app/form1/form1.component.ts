import { Component, OnInit } from '@angular/core';

import { Form1 } from '../form1';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  model = new Form1(1, '', '', '', '', '', '');

  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor() { }

  ngOnInit(): void {
  }

  newForm() {
    this.model = new Form1(1, '', '', '', '', '', '');
  }

}
