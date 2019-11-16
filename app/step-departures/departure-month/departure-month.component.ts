import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-departure-month",
  templateUrl: "./departure-month.component.html",
  styleUrls: ["./departure-month.component.scss"]
})
export class DepartureMonthComponent implements OnInit{
  @Input() month: number;
  @Input() filters: any;
  departures = [];

  constructor() {}

  ngOnInit() {

    this.departures = [
          {
      start: new Date(2020, this.month, this.dayGen(1, 15), 0, 0, 0, 0),
      end: new Date(2020, this.month, this.dayGen(15, 29), 0, 0, 0, 0),
      isInRange: false,
      promotions: [],
      travellers: [],
      bedding: [],
      cabin: [],
      price: undefined,
      active: false,
      filters: this.filters
    },
    {
      start: new Date(2020, this.month, this.dayGen(1, 15), 0, 0, 0, 0),
      end: new Date(2020, this.month, this.dayGen(15, 29), 0, 0, 0, 0),
      isInRange: false,
      promotions: [],
      travellers: [],
      bedding: [],
      cabin: [],
       price: undefined,
      active: false,
      filters: this.filters
    },
    {
      start: new Date(2020, this.month, this.dayGen(1, 15), 0, 0, 0, 0),
      end: new Date(2020, this.month, this.dayGen(15, 29), 0, 0, 0, 0),
      isInRange: false,
      promotions: [],
      travellers: [],
      bedding: [],
      cabin: [],
       price: undefined,
      active: false,
      filters: this.filters
    },
    {
      start: new Date(2020, this.month, this.dayGen(1, 15), 0, 0, 0, 0),
      end: new Date(2020, this.month, this.dayGen(15, 29), 0, 0, 0, 0),
      isInRange: false,
      promotions: [],
      travellers: [],
      bedding: [],
      cabin: [],
       price: undefined,
      active: false,
      filters: this.filters
    },
    {
      start: new Date(2020, this.month, this.dayGen(1, 15), 0, 0, 0, 0),
      end: new Date(2020, this.month, this.dayGen(15, 29), 0, 0, 0, 0),
      isInRange: false,
      promotions: [],
      travellers: [],
      bedding: [],
      cabin: [],
       price: undefined,
      active: false,
      filters: this.filters
    },
    {
      start: new Date(2020, this.month, this.dayGen(1, 15), 0, 0, 0, 0),
      end: new Date(2020, this.month, this.dayGen(15, 29), 0, 0, 0, 0),
      isInRange: false,
      promotions: [],
      travellers: [],
      bedding: [],
      cabin: [],
       price: undefined,
      active: false,
      filters: this.filters
    },
    {
      start: new Date(2020, this.month, this.dayGen(1, 15), 0, 0, 0, 0),
      end: new Date(2020, this.month, this.dayGen(15, 29), 0, 0, 0, 0),
      isInRange: false,
      promotions: [],
      travellers: [],
      bedding: [],
      cabin: [],
       price: undefined,
      active: false,
      filters: this.filters
    },
    {
      start: new Date(2020, this.month, this.dayGen(1, 15), 0, 0, 0, 0),
      end: new Date(2020, this.month, this.dayGen(15, 29), 0, 0, 0, 0),
      isInRange: false,
      promotions: [],
      travellers: [],
      bedding: [],
      cabin: [],
       price: undefined,
      active: false,
      filters: this.filters
    },
    {
      start: new Date(2020, this.month, this.dayGen(1, 15), 0, 0, 0, 0),
      end: new Date(2020, this.month, this.dayGen(15, 29), 0, 0, 0, 0),
      isInRange: false,
      promotions: [],
      travellers: [],
      bedding: [],
      cabin: [],
      price: undefined,
      active: false,
      filters: this.filters
    }
    ]
this.selectRandomDepartures();
  }

  dayGen(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


//slice from month

    selectRandomDepartures() {
    let min = 1;
    let max = this.departures.length - 1;
    let start = Math.floor(Math.random() * (max - min + 1) + min);
    let end = Math.floor(Math.random() * (max - start + 1) + start);
    const randomOptions = Array.from(this.departures).slice(start, end);
    this.departures = randomOptions;
    }
}
