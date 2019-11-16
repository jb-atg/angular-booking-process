import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-step-departures",
  templateUrl: "./step-departures.component.html",
  styleUrls: ["./step-departures.component.scss"]
})
export class StepDeparturesComponent implements OnInit {
  months = [
    { id: 3, label: "Jan", numberOfDepartures: 5, isInRange: false },
    { id: 3, label: "Feb", numberOfDepartures: 2, isInRange: false },
    { id: 3, label: "Mar", numberOfDepartures: 8, isInRange: false },
    { id: 4, label: "Apr", numberOfDepartures: 1, isInRange: false },
    { id: 5, label: "May", numberOfDepartures: 10, isInRange: false },
    { id: 6, label: "Jun", numberOfDepartures: 2, isInRange: false },
    { id: 7, label: "Jul", numberOfDepartures: 1, isInRange: false }
  ];

  promotions = [
    { value: 1, label: "Fly Free*" },
    { value: 2, label: "Fly From $495pp*" },
    { value: 3, label: "Companion Fly Free*" },
    { value: 4, label: "Fly Business Class From $3,995pp*" },
    { value: 5, label: "50% Off Solo Supplement*" }
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

  logFilters() {
    console.log(this.filters);
  }

  constructor() {}

  ngOnInit() {}
}
