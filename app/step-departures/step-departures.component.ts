import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-step-departures",
  templateUrl: "./step-departures.component.html",
  styleUrls: ["./step-departures.component.scss"]
})
export class StepDeparturesComponent implements OnInit {
  @Output() isActive = new EventEmitter();
  months = [
    {
      id: 0,
      label: "Jan",
      numberOfDepartures: 2,
      isInRange: false,
      active: false
    },
    {
      id: 1,
      label: "Feb",
      numberOfDepartures: 2,
      isInRange: false,
      active: false
    },
    {
      id: 2,
      label: "Mar",
      numberOfDepartures: 8,
      isInRange: false,
      active: false
    },
    {
      id: 3,
      label: "Apr",
      numberOfDepartures: 1,
      isInRange: false,
      active: false
    },
    {
      id: 4,
      label: "May",
      numberOfDepartures: 10,
      isInRange: false,
      active: false
    },
    {
      id: 5,
      label: "Jun",
      numberOfDepartures: 2,
      isInRange: false,
      active: false
    },
    {
      id: 6,
      label: "Jul",
      numberOfDepartures: 1,
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
    bedding: { options: this.bedding, selectedOption: undefined },
    cabins: { options: this.cabins, selectedOptions: undefined },
    sort: { options: this.sort, selectedOption: undefined }
  };

  allNotActive = true;

  logFilters() {
    console.log(this.filters);
  }

  constructor() {}

  ngOnInit() {}

  setActive(i) {
    this.months.forEach(month => (month.active = false));
    if (this.months[i]) {
      this.isActive.emit(true);
      this.months[i].active = true;
    }

    this.getAllNotActive();
  }

  getAllNotActive() {
    let allNotActive = this.months.every(month => month.active == false);
    !allNotActive ? null :    this.isActive.emit(false);
    this.allNotActive = allNotActive;
  }
}
