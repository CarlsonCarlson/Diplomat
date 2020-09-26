import { Component, OnInit } from '@angular/core';

import { Form2 } from '../form2';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  model = new Form2(1, '', '', '', '');

  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor() { }

  ngOnInit(): void {
  }

  newForm() {
    this.model = new Form2(1, '', '', '', '');
  }

}
