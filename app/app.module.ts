import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { StepDeparturesComponent } from './step-departures/step-departures.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AppComponent, StepDeparturesComponent]
})
export class BookingProcessModule { }