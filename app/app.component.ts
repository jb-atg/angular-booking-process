import {Component, HostBinding} from '@angular/core';

/**
 * @title Basic Inputs
 */
@Component({
  selector: 'app-component',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html',
})
export class AppComponent {
@HostBinding('class.collapsed') collapsed:boolean = true;
@HostBinding('class.minimised') minimised:boolean = false;


}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */