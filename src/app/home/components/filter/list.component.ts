import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromHomeActions from "../../store/actions/home.action";

@Component({
  selector: 'app-filter',
  template: `
    <mat-form-field class="w100">
      <mat-label>Filter</mat-label>
      <input #filter matInput autocomplete="off" (keyup)="applyFilter($event)">
      <button 
        *ngIf="filter.value !== ''" 
        mat-icon-button 
        matSuffix
        (click)="filter.value = ''"
       >
        <mat-icon>close</mat-icon>
      </button>
    </mat-form-field>
  `,
  styles: [``]
})
export class FilterComponent {

  constructor(private store: Store<any>) { }

  applyFilter(event) {
    this.store.dispatch(fromHomeActions.setTextFilter(event));
  }

}
