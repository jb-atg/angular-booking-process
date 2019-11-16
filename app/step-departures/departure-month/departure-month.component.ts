import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-departure-month",
  templateUrl: "./departure-month.component.html",
  styleUrls: ["./departure-month.component.scss"]
})
export class DepartureMonthComponent implements OnInit {
  @Input() month: any;
  @Input() filters: any;
  departures = [];

  constructor() {}

  ngOnInit() {
    this.generateDepartures();
  }

  generateDepartures() {
    let numberOfDepartures = this.month.numberOfDepartures;
    let i;
    for (i = 0; i < numberOfDepartures; i++) {
      let departure = {
        year: 2020,
        month: this.month,
        begin: undefined,
        end: undefined,
        isInRange: true,
        promotions: [],
        travellers: [],
        bedding: [],
        cabins: [],
        price: undefined,
        active: false,
        filters: this.filters,

      };
      this.departures.push(departure);
    }
  }
}

/*
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
}*/

/*   let departure = {
      start: new Date(2020, this.month, this.dayGen(1, 15), 0, 0, 0, 0),
      end: new Date(2020, this.month, this.dayGen(15, 29), 0, 0, 0, 0),
      isInRange: true,
      promotions: [],
      travellers: [],
      bedding: [],
      cabin: [],
      price: undefined,
      active: false,
      filters: this.filters
    } */
