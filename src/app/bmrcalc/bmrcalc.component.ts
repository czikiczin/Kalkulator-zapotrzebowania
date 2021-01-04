import { Component, OnInit } from '@angular/core';
import {timeout} from 'rxjs/operators';

@Component({
  selector: 'app-bmrcalc',
  templateUrl: './bmrcalc.component.html',
  styleUrls: ['./bmrcalc.component.css']
})
export class BMRcalcComponent implements OnInit {

  view = false;
  gender;
  age;
  weight;
  length;
  activity;
  BMR;
  constructor() { }

  ngOnInit(): void {
  }

  OnClick() {
    console.log("wiek", this.age, "płeć" , this.gender, "waga", this.weight, "wzrost" , this.length, this.activity);

    /*this.activity = this.activity.toNumber(this.activity);*/
    if (this.gender === '0')
    {
      this.BMR = ( 66 + (13.7 * this.weight) + (5 * this.length) - (6.76 * this.age)) * this.activity;
      this.BMR = this.BMR.toFixed();
    }else
    {
      this.BMR = ( 655 + (9.6 * this.weight) + (1.85 * this.length) - (4.7 * this.age)) * this.activity;
      this.BMR = this.BMR.toFixed();
    }
    console.log("BMR wynosi", this.BMR, " kcal" );


    this.view = !this.view;
  }

  onClear() {
    this.view = !this.view;
    this.age = null;
    this.gender = null;
    this.weight = null;
    this.length = null;
    this.activity = null;

  }


}
