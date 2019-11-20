import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation
} from "@angular/core";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent implements OnInit {
  items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
  currentIndex: number = 0;
  constructor() {}

  ngOnInit() {}

  scrolledIndexChange(index) {
    console.log(index);
  }

  // scrollToIndex()
}
