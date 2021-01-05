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
  BMItext: string;
  constructor() { }

  ngOnInit(): void {
  }

  OnClick() {

    /*this.activity = this.activity.toNumber(this.activity);*/
    this.length = this.length / 100;
      this.BMI = this.weight / (this.length * this.length);
      this.BMI = this.BMI.toFixed(2);

      if( this.BMI < 16 )
      {
        this.BMItext = 'wygłodzenie';
      }
    if( this.BMI >= 16 && this.BMI < 16.99 )
    {
      this.BMItext = 'wychudzenie';
    }
    if( this.BMI >= 17 && this.BMI < 18.49 )
    {
      this.BMItext = 'niedowage';
    }
    if( this.BMI >= 18.5 && this.BMI < 24.99 )
    {
      this.BMItext = 'wartość prawidłową';
    }
    if( this.BMI >= 25 && this.BMI < 29.99 )
    {
      this.BMItext = 'nadwage';
    }
    if( this.BMI >= 30 && this.BMI < 34.99 )
    {
      this.BMItext = 'I stopien otyłości';
    }
    if( this.BMI >= 35 && this.BMI < 39.99 )
    {
      this.BMItext = 'II stopień otyłości';
    }
    if( this.BMI >= 40 )
    {
      this.BMItext = 'otyłość skrajną';
    }


    this.view = !this.view;
  }

  onClear() {
    this.view = !this.view;
    this.gender = null;
    this.weight = null;
    this.length = null;

  }
}
