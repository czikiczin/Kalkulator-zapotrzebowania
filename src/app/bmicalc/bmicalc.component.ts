import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmicalc',
  templateUrl: './bmicalc.component.html',
  styleUrls: ['./bmicalc.component.css']
})
export class BMIcalcComponent implements OnInit {
  view = false;
  gender;
  weight;
  length;
  BMI;
  constructor() { }

  ngOnInit(): void {
  }

  OnClick() {

    /*this.activity = this.activity.toNumber(this.activity);*/
    this.length = this.length / 100;
      this.BMI = this.weight / (this.length * this.length);
      this.BMI = this.BMI.toFixed(2);


    this.view = !this.view;
  }

  onClear() {
    this.view = !this.view;
    this.gender = null;
    this.weight = null;
    this.length = null;

  }
}
