import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-departure-slot',
  templateUrl: './departure-slot.component.html',
  styleUrls: ['./departure-slot.component.scss']
})
export class DepartureSlotComponent implements OnInit {
@Input() departure:number;
  constructor() { }

  ngOnInit() {
  }

}