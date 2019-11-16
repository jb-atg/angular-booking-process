import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-departure-slot',
  templateUrl: './departure-slot.component.html',
  styleUrls: ['./departure-slot.component.scss']
})
export class DepartureSlotComponent implements OnInit, OnChanges {
@Input() departure;
  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {
          this.selectRandomOptions(this.departure.filters.promotions.options);
  }


  selectRandomOptions(filterOptions) {
    if(filterOptions) {
    let min = 0;
    let max = filterOptions.length - 1;
    let start = Math.floor(Math.random() * (max - min + 1) + min);
    let end = Math.floor(Math.random() * (max - start + 1) + start);
    const randomOptions = Array.from(filterOptions).slice(start, end);
    console.log(randomOptions);
    }


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