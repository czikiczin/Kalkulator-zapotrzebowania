import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BMRcalcComponent } from './bmrcalc/bmrcalc.component';
import { BMIcalcComponent } from './bmicalc/bmicalc.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { DietsComponent } from './diets/diets.component';
import { ExercisesComponent } from './exercises/exercises.component';

const Routes: Routes = [
  {path: '', component: BMRcalcComponent},
  {path: 'bmi', component: BMIcalcComponent},
  {path: 'diets', component: DietsComponent},
  {path: 'exercises', component: ExercisesComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BMRcalcComponent,
    BMIcalcComponent,
    DietsComponent,
    ExercisesComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        RouterModule.forRoot(Routes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
