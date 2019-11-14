import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-departure-month",
  templateUrl: "./departure-month.component.html",
  styleUrls: ["./departure-month.component.scss"]
})
export class DepartureMonthComponent implements OnInit {
  @Input() month:number;
  departures = [
    { start:new Date(2020, this.month, this.dayGen(1, 15), 0,0,0,0), end:new Date(2020, this.month, this.dayGen(15, 29), 0,0,0,0),},
    { start:new Date(2020, this.month, this.dayGen(1, 15), 0,0,0,0), end:new Date(2020, this.month, this.dayGen(15, 29), 0,0,0,0),},
    { start:new Date(2020, this.month, this.dayGen(1, 15), 0,0,0,0), end:new Date(2020, this.month, this.dayGen(15, 29), 0,0,0,0),},
    { start:new Date(2020, this.month, this.dayGen(1, 15), 0,0,0,0), end:new Date(2020, this.month, this.dayGen(15, 29), 0,0,0,0),},
    { start:new Date(2020, this.month, this.dayGen(1, 15), 0,0,0,0), end:new Date(2020, this.month, this.dayGen(15, 29), 0,0,0,0),},
    { start:new Date(2020, this.month, this.dayGen(1, 15), 0,0,0,0), end:new Date(2020, this.month, this.dayGen(15, 29), 0,0,0,0),},
    { start:new Date(2020, this.month, this.dayGen(1, 15), 0,0,0,0), end:new Date(2020, this.month, this.dayGen(15, 29), 0,0,0,0),},
    { start:new Date(2020, this.month, this.dayGen(1, 15), 0,0,0,0), end:new Date(2020, this.month, this.dayGen(15, 29), 0,0,0,0),},
    { start:new Date(2020, this.month, this.dayGen(1, 15), 0,0,0,0), end:new Date(2020, this.month, this.dayGen(15, 29), 0,0,0,0),},
  ];

  constructor() {}

  ngOnInit() {}

  dayGen(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}
}
