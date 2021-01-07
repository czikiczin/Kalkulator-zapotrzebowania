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
import { ChestComponent } from './exercises/chest/chest.component';
import { LegsComponent } from './exercises/legs/legs.component';
import { BackComponent } from './exercises/back/back.component';
import { ArmComponent } from './exercises/arm/arm.component';
import { ShouldersComponent } from './exercises/shoulders/shoulders.component';

const Routes: Routes = [
  {path: '', component: BMRcalcComponent},
  {path: 'bmi', component: BMIcalcComponent},
  {path: 'diets', component: DietsComponent},
  {path: 'exercises', component: ExercisesComponent},
  {path: 'exercises/arms', component: ArmComponent},
  {path: 'exercises/back', component: BackComponent},
  {path: 'exercises/chest', component: ChestComponent},
  {path: 'exercises/legs', component: LegsComponent},
  {path: 'exercises/shoulders', component: ShouldersComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BMRcalcComponent,
    BMIcalcComponent,
    DietsComponent,
    ExercisesComponent,
    ChestComponent,
    LegsComponent,
    BackComponent,
    ArmComponent,
    ShouldersComponent
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
