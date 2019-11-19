import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-step-departures",
  templateUrl: "./step-departures.component.html",
  styleUrls: ["./step-departures.component.scss"]
})
export class StepDeparturesComponent implements OnInit {
  @Output() isActive = new EventEmitter();
  departureSelected:boolean = false;
  months = [
    {
      index: 0,
      label: "Jan",
      numberOfDepartures: 2,
      departures: [],
      isInRange: false,
      active: false
    },
    {
      index: 1,
      label: "Feb",
      numberOfDepartures: 1,
      departures: [],
      isInRange: false,
      active: false
    },
    {
      index: 2,
      label: "Mar",
      numberOfDepartures: 8,
      departures: [],
      isInRange: false,
      active: false
    },
    {
      index: 3,
      label: "Apr",
      numberOfDepartures: 1,
      departures: [],
      isInRange: false,
      active: false
    },
    {
      index: 4,
      label: "May",
      numberOfDepartures: 10,
      departures: [],
      isInRange: false,
      active: false
    },
    {
      index: 5,
      label: "Jun",
      numberOfDepartures: 2,
      departures: [],
      isInRange: false,
      active: false
    },
    {
      index: 6,
      label: "Jul",
      numberOfDepartures: 1,
      departures: [],
      isInRange: false,
      active: false
    }
  ];

  promotions = [
    { value: 1, label: "Fly Free*", active: false },
    { value: 2, label: "Fly From $495pp*", active: false },
    { value: 3, label: "Companion Fly Free*", active: false },
    { value: 4, label: "Fly Business Class From $3,995pp*", active: false },
    { value: 5, label: "50% Off Solo Supplement*", active: false }
  ];

  bedding = [
    { value: 1, label: "Twin" },
    { value: 2, label: "Double" },
    { value: 3, label: "Single" }
  ];

  cabins = [
    { value: 1, label: "B+" },
    { value: 2, label: "C" },
    { value: 3, label: "CC" },
    { value: 4, label: "D" },
    { value: 5, label: "DD" },
    { value: 6, label: "E" },
    { value: 7, label: "EE" },
    { value: 8, label: "T" }
  ];

  sort = [{ value: 1, label: "Date" }, { value: 2, label: "Price" }];

  filters = {
    dateRange: undefined,
    promotions: { options: this.promotions, selectedOptions: undefined },
    travellers: { selectedOption: 2 },
    bedding: { options: this.bedding, selectedOption: 2, selectedOptions: " " },
    cabins: { options: this.cabins, selectedOptions: undefined },
    sort: { options: this.sort, selectedOption: undefined }
  };

  logFilters() {
    console.log(this.filters);
  }

  constructor() {}

  ngOnInit() {
    this.generateDepartures();
  }

  generateDepartures() {
    this.months.forEach(month => {
      let numberOfDepartures = month.numberOfDepartures;
      let i;
      for (i = 0; i < numberOfDepartures; i++) {
        let departure = {
          year: 2020,
          month: month.index,
          begin: undefined,
          end: undefined,
          isInRange: true,
          promotions: [],
          travellers: [],
          bedding: [],
          cabins: [],
          price: undefined,
          active: false,
          limited: false,
          filters: this.filters
        };
        this.generateDates(departure);
        month.departures.push(departure);

        if (month.departures.length == numberOfDepartures) {
          month.departures = month.departures.sort(
            this.sortDeparturesByDate("begin")
          );
        }
      }
    });
  }

  generateDates(departure) {
    let month = departure.month;
    let begin = this.randomDayGenerator(1, 28);
    let end = begin + 15;
    if (end > 28) {
      end = end - 28;
      departure.begin = new Date(2020, month, begin, 0, 0, 0, 0);
      departure.end = new Date(2020, month + 1, end, 0, 0, 0, 0);
      departure.endsNextMonth = true;
    } else {
      departure.begin = new Date(2020, month, begin, 0, 0, 0, 0);
      departure.end = new Date(2020, month, end, 0, 0, 0, 0);
    }
  }

  randomDayGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  sortDeparturesByDate(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function(a, b) {
      var result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  }

  setActive(active) {
    let monthIndex = active.monthIndex;
    let departureIndex = active.departureIndex;

    this.months.forEach(month => {
      month.active = false;
      month.departures.forEach(departure => {
        departure.active = false;
      });
    });

    if (this.months[monthIndex].departures[departureIndex]) {
      this.months[monthIndex].departures[departureIndex].active = true;
      this.departureSelected = true;
    } else {
       this.departureSelected = false;
    }

    this.isActive.emit(this.departureSelected);
  }
}
