import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { LoginService } from '../login/login.service';
import { User } from '../login/user.model';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { WeightModel } from './weight.model';
import { ChartsModule} from 'ng2-charts';
import { DatePipe } from '@angular/common';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-weight-chart',
  templateUrl: './weight-chart.component.html',
  styleUrls: ['./weight-chart.component.css']
})
export class WeightChartComponent implements OnInit {

  dateInp;
  weightInp;
  currentDate: string;
  ifWeightOk = true;
  ifDateOk = true;


  constructor(private http: HttpClient, private user: LoginService) {
    this.fetchData();
    this.currentDate = formatDate(new Date(), 'yyyy-MM-dd','en');
    console.log(this.currentDate);
  }


  ngOnInit(): void {
  }

  storeData() {
    const user = this.user.ID;
    const date = this.dateInp;
    const weight = this.weightInp;

    if ( this.weightInp < 1 || this.dateInp < this.currentDate )
    {
      if ( this.weightInp < 1 )
      {
        this.weightInp = null;
        this.ifWeightOk = false;
      } else {
        this.ifWeightOk = true;
      }
      if (this.dateInp < this.currentDate)
      {
        this.ifDateOk = false;
        this.dateInp = null;
      } else {
        this.ifDateOk = true;
      }
      return;
    }

    this.ifWeightOk = true;
    this.ifDateOk = true;


   this.http.post(`https://kalkulator-zapotrzebowania-default-rtdb.firebaseio.com/weightData/${user}.json`,
      {
        user,
        date,
        weight
      })
      .subscribe(
        response => {
          this.barChartData[0].data.length = 0;
          this.barChartLabels.length = 0;
          this.fetchData();
        }
      );
    this.dateInp = null;
    this.weightInp = null;
  }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  public barChartLabels = [];
  public barChartType = 'line';
  public barChartLegend = true;
  public barChartData = [{data: [], label: 'Waga'}];

  fetchData() {

    const user = this.user.ID;
    this.http.get(`https://kalkulator-zapotrzebowania-default-rtdb.firebaseio.com/weightData/${user}.json`)
      .pipe(map((responseData: { [key: string]: WeightModel }) => {
        const postArray: WeightModel[] = [];
        for (const key in responseData) {
          postArray.push({...responseData[key], id: key});
        }
        return postArray;
      }))
      .subscribe(response => {
        for (var i = 0; i < response.length; i++) {
          var temp = response[i];
          /*this.weightTable = temp.weight;*/
          this.barChartLabels.push(temp.date);
            this.barChartData[0].data.push(temp.weight);
        }
      });
  }

}
