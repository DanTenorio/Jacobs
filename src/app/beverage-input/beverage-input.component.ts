import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-beverage-input',
  templateUrl: './beverage-input.component.html',
  styleUrls: ['./beverage-input.component.css']
})
export class BeverageInputComponent implements OnInit {

  beverage = new FormControl('');
  constructor() { }

  ngOnInit(): void {
  }

}
