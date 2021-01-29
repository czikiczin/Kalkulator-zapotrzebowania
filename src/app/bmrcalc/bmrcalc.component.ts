import { Component, OnInit } from '@angular/core';

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
  BMRact;
  ifAgeOk = true;
  ifWeightOk = true;
  ifLenghtOk = true;
  constructor() { }

  ngOnInit(): void {
  }

  OnClick() {

    if ( this.age < 1 || this.weight < 0 || this.length < 10)
    {
      if ( this.age < 1 )
      {
        this.ifAgeOk = false;
        this.age = null;
      } else {
        this.ifAgeOk = true;
      }

      if ( this.weight < 1 )
      {
        this.ifWeightOk = false;
        this.weight = null;
      } else {
        this.ifWeightOk = true;
      }

      if ( this.length < 10 )
      {
       this.ifLenghtOk = false;
       this.length = null;
      } else {
        this.ifLenghtOk = true;
      }
      return;
    }

    this.ifAgeOk = true;
    this.ifLenghtOk = true;
    this.ifWeightOk = true;

    if (this.gender === '0')
    {
      this.BMR = 66 + (13.7 * this.weight) + (5 * this.length) - (6.76 * this.age);
      this.BMRact = this.BMR * this.activity;
      this.BMR = this.BMR.toFixed();
      this.BMRact = this.BMRact.toFixed();
    }else
    {
      this.BMR = ( 655 + (9.6 * this.weight) + (1.85 * this.length) - (4.7 * this.age)) * this.activity;
      this.BMR = this.BMR.toFixed();
    }


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
