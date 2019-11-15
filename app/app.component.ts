import {Component, HostBinding,ViewChild} from '@angular/core';

/**
 * @title Basic Inputs
 */
@Component({
  selector: 'app-component',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html',
})
export class AppComponent {
@HostBinding('class.collapsed') collapsed:boolean = false;
@HostBinding('class.minimised') minimised:boolean = false;
@ViewChild('stepper', {static: false}) stepper:any;

nextStep() {
this.stepper.next();
}

previousStep() {
this.stepper.previous();
}

}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */