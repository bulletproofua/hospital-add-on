import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromHomeActions from "../../store/actions/home.action";

@Component({
  selector: 'app-filter',
  template: `
    <mat-form-field class="w100">
      <mat-label>Фільтр по колонці Title</mat-label>
      <input #filter matInput autocomplete="off" (keyup)="applyFilter($event.target.value)">
      <button 
        *ngIf="filter.value !== ''" 
        mat-icon-button 
        matSuffix
        (click)="filter.value = ''; applyFilter('')"
       >
        <mat-icon>close</mat-icon>
      </button>
    </mat-form-field>
  `,
  styles: [``]
})
export class FilterComponent {

  constructor(private store: Store<any>) { }

  applyFilter(text) {
    this.store.dispatch(fromHomeActions.setTextFilter({ text: text }));
  }

}
