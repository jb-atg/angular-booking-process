import {
  Component,
  OnInit,
  Input,
  OnChanges,
  EventEmitter,
  Output,
  ViewChild
} from "@angular/core";

@Component({
  selector: "app-departure-slot",
  templateUrl: "./departure-slot.component.html",
  styleUrls: ["./departure-slot.component.scss"]
})
export class DepartureSlotComponent implements OnInit, OnChanges {
  @Input() departure;
  @Input() index;
  @Input() allNotActive;
  @Output() isActive = new EventEmitter();
  constructor() {}

  ngOnInit() {
    this.generatePromos();
    this.generateCabins();
    this.generateBedding();
    this.generatePrice();
  }

  ngOnChanges() {}

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

  activate() {
    this.departure.active = true;
    this.isActive.emit(this.index);
  }

  deactivate() {
    setTimeout(() => {
      //<<<---    using ()=> syntax
      this.isActive.emit(-1);
    }, 100);
  }

  activatePromo(i) {
    this.departure.promotions.forEach(promo => (promo.active = false));
    this.departure.promotions[i].active = true;
  }

nextStep() {

}

}
