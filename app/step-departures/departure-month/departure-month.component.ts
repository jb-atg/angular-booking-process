import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  ViewChild,
  AfterViewInit,
  Renderer2,
  HostListener
} from "@angular/core";

import { DragScrollComponent } from "ngx-drag-scroll";

@Component({
  selector: "app-departure-month",
  templateUrl: "./departure-month.component.html",
  styleUrls: ["./departure-month.component.scss"]
})
export class DepartureMonthComponent
  implements OnInit, OnChanges, AfterViewInit {
  @Input() month: any;
  @Input() filters: any;
  @Output() isActive = new EventEmitter();
  @ViewChild("dragScroll", { static: false }) dragScroll: DragScrollComponent;
  @HostListener("window:mousemove", ["$event"])
  onScroll(e) {
    const delta = Math.sign(e.deltaY);
    this.mouseWheel = true;
  }
  mouseWheel: boolean = false;

  hasReachedLeft: boolean = false;
  hasReachedRight: boolean = false;
  isOverflown;
  departures = [];
  allNotActive = true;

  constructor(public renderer: Renderer2) {}

  ngOnInit() {
    this.generateDepartures();
  }

  ngOnChanges() {}

  ngAfterViewInit() {}

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
        limited: false,
        filters: this.filters
      };
      this.generateDates(departure);
      this.departures.push(departure);

      if (this.departures.length == numberOfDepartures) {
        this.departures = this.departures.sort(this.dynamicSort("begin"));
      }
    }
  }

  generateDates(departure) {
    let month = departure.month.id;
    let begin = this.dayGen(1, 28);
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

  dayGen(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function(a, b) {
      /* next line works with strings and numbers,
       * and you may want to customize it to your needs
       */
      var result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  }

  setActive(i) {
    this.departures.forEach(departure => (departure.active = false));
    if (this.departures[i]) {
      this.departures[i].active = true;
      this.isActive.emit(this.month.id);
    } else {
      this.isActive.emit(-1);
    }
    this.getAllNotActive();
  }

  getAllNotActive() {
    let allNotActive = this.departures.every(
      departure => departure.active == false
    );
    this.allNotActive = allNotActive;
  }

  moveLeft() {
    this.dragScroll.moveLeft();
  }

  moveRight() {
    this.dragScroll.moveRight();
  }

  reachLeft(event) {
    this.hasReachedLeft = event;
  }

  reachRight(event) {
    this.hasReachedRight = event;
  }
}
