import { Component, OnInit, Input, OnChanges } from "@angular/core";

@Component({
  selector: "app-departure-slot",
  templateUrl: "./departure-slot.component.html",
  styleUrls: ["./departure-slot.component.scss"]
})
export class DepartureSlotComponent implements OnInit, OnChanges {
  @Input() departure;
  constructor() {}

  ngOnInit() {
    this.generateDates();
    this.generatePromos();
    this.generateCabins();
    this.generateBedding();
    this.generatePrice();
    console.log(this.departure);
  }

  ngOnChanges() {}

  generateDates() {
    let month = this.departure.month.id;
    let begin = this.dayGen(1, 28);
    let end = begin + 15;
    if (end > 28) {
      end = end - 28;
      this.departure.begin = new Date(2020, month, begin, 0, 0, 0, 0);
      this.departure.end = new Date(2020, (month + 1), end, 0, 0, 0, 0);
    } else {
      this.departure.begin = new Date(2020, month, begin, 0, 0, 0, 0);
      this.departure.end = new Date(2020, month, end, 0, 0, 0, 0);
    }

  }
  generatePromos() {
    this.selectRandomOptions("promotions");
  }
  generateCabins() {
    this.selectRandomOptions("cabins");
  }
  generateBedding() {
    this.selectRandomOptions("bedding");
  }
  generatePrice() {
    this.departure.price = Math.floor(
      Math.random() * (44000 - 10000 + 1) + 10000
    );
  }

  selectRandomOptions(type) {
    let filterOptions = this.departure.filters[type].options;
    if (filterOptions) {
      let min = 0;
      let max = filterOptions.length - 1;
      let start = Math.floor(Math.random() * (max - min + 1) + min);
      let end = Math.floor(Math.random() * (max - start + 1) + start);
      const randomOptions = Array.from(filterOptions).slice(start, end);
      this.departure[type] = randomOptions;
    }
  }

  dayGen(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  inRange(startDate, endDate) {
    let filterStartDate = 0;
    let filterEndDate = 0;

    // Illustration:
    //
    // filterStartDate                      filterEndDate
    // v                                        v
    // #----------------------------------------#
    //
    //         #----------------------#
    //         ^                      ^
    //         startDate              endDate

    return startDate >= filterStartDate && endDate <= filterEndDate;
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
      cabin: [],
      price: undefined,
      active: false,
      filters: this.filters
    } */
}
