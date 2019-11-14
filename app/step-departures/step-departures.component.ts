import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-departures',
  templateUrl: './step-departures.component.html',
  styleUrls: ['./step-departures.component.scss']
})
export class StepDeparturesComponent implements OnInit {

months = [
{id:3, label:'Jan'},
{id:3, label:'Feb'},
{id:3, label:'Mar'},
{id:4, label:'Apr'},
{id:5, label:'May'},
{id:6, label:'Jun'},
{id:7, label:'Jul'},
]

  constructor() { }

  ngOnInit() {
  }

}