import { AppComponent } from './app.component';
import { StepDeparturesComponent } from './step-departures/step-departures.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
   declarations: [AppComponent, StepDeparturesComponent]
})
export class AppModule { }