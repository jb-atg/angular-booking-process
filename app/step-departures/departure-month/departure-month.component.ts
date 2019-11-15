import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-departure-month",
  templateUrl: "./departure-month.component.html",
  styleUrls: ["./departure-month.component.scss"]
})
export class DepartureMonthComponent implements OnInit {
  @Input() month: number;
  @Input() filters: any;
  departures = [
    {
      start: new Date(2020, this.month, this.dayGen(1, 15), 0, 0, 0, 0),
      end: new Date(2020, this.month, this.dayGen(15, 29), 0, 0, 0, 0)
    },
    {
      start: new Date(2020, this.month, this.dayGen(1, 15), 0, 0, 0, 0),
      end: new Date(2020, this.month, this.dayGen(15, 29), 0, 0, 0, 0)
    },
    {
      start: new Date(2020, this.month, this.dayGen(1, 15), 0, 0, 0, 0),
      end: new Date(2020, this.month, this.dayGen(15, 29), 0, 0, 0, 0)
    },
    {
      start: new Date(2020, this.month, this.dayGen(1, 15), 0, 0, 0, 0),
      end: new Date(2020, this.month, this.dayGen(15, 29), 0, 0, 0, 0)
    },
    {
      start: new Date(2020, this.month, this.dayGen(1, 15), 0, 0, 0, 0),
      end: new Date(2020, this.month, this.dayGen(15, 29), 0, 0, 0, 0)
    },
    {
      start: new Date(2020, this.month, this.dayGen(1, 15), 0, 0, 0, 0),
      end: new Date(2020, this.month, this.dayGen(15, 29), 0, 0, 0, 0)
    },
    {
      start: new Date(2020, this.month, this.dayGen(1, 15), 0, 0, 0, 0),
      end: new Date(2020, this.month, this.dayGen(15, 29), 0, 0, 0, 0)
    },
    {
      start: new Date(2020, this.month, this.dayGen(1, 15), 0, 0, 0, 0),
      end: new Date(2020, this.month, this.dayGen(15, 29), 0, 0, 0, 0)
    },
    {
      start: new Date(2020, this.month, this.dayGen(1, 15), 0, 0, 0, 0),
      end: new Date(2020, this.month, this.dayGen(15, 29), 0, 0, 0, 0)
    }
  ];

  constructor() {}

  ngOnInit() {}

  dayGen(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  numGen(min, max) {
    // min and max included
    let start = Math.floor(Math.random() * (max - min + 1) + min);
    let end = Math.floor(Math.random() * (max - start + 1) + start);
    return start + ',' + end;
  }

  selectRandomOptions(filterOptions) {
    let min = 0;
    let max = (filterOptions.length - 1);
    let start = Math.floor(Math.random() * (max - min + 1) + min);
    let end = Math.floor(Math.random() * (max - start + 1) + start);
    const randomOptions = Array.from(filterOptions).slice(start, end);
    console.log(randomOptions);
  }

  inRange(startDate, endDate) {
    let filterStartDate = this.filters.date.startDate;
    let filterEndDate = this.filters.date.endDate;

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
}
