import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabin-selection',
  templateUrl: './cabin-selection.component.html',
  styleUrls: ['./cabin-selection.component.scss']
})
export class CabinSelectionComponent implements OnInit {
   cabins = [
    { value: 1, label: "B+" , active:false},
    { value: 2, label: "C" , active:false},
    { value: 3, label: "CC" , active:true},
    { value: 4, label: "D" , active:false},
    { value: 5, label: "DD" , active:false},
    { value: 6, label: "E" , active:false},
    { value: 7, label: "EE" , active:false},
    { value: 8, label: "T" }
  ];

  constructor() {}

  ngOnInit() {}

  activateCabin(i) {
      let toggle = this.cabins[i].active ? false : true ;
    this.cabins.forEach(cabin => (cabin.active = false));
    if (this.cabins[i]) {
      this.cabins[i].active = toggle;
    }
  }
}