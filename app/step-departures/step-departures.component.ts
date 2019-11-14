import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-step-departures",
  templateUrl: "./step-departures.component.html",
  styleUrls: ["./step-departures.component.scss"]
})
export class StepDeparturesComponent implements OnInit {
  months = [
    { id: 3, label: "Jan" },
    { id: 3, label: "Feb" },
    { id: 3, label: "Mar" },
    { id: 4, label: "Apr" },
    { id: 5, label: "May" },
    { id: 6, label: "Jun" },
    { id: 7, label: "Jul" }
  ];

  options = ["A", "B", "C"];

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
    { value: 3, label: "Single" },
    { value: 4, label: "Fly Business Class From $3,995pp*" },
    { value: 5, label: "50% Off Solo Supplement*" }
  ];

  filters = {
    date: { startDate: new Date(), endDate: new Date() },
    promotions: { options: this.options, selectedOption: 1 },
    travellers: { options: this.options, selectedOption: 1 },
    bedding: [{ options: this.options, selectedOption: undefined }],
    cabin: [{ options: this.options, selectedOption: undefined }],
    sort: [{ options: this.options, selectedOption: undefined }]
  };

  constructor() {}

  ngOnInit() {}
}
