import { Component } from '@angular/core';

// Store
import { Store } from '@ngrx/store';
import * as fromHome from "../../store/reducers";
import * as fromHomeActions from "../../store/actions/home.action";

@Component({
  selector: 'app-group-filter',
  template: `
    <mat-chip-list multiple [selectable]="true">
      <mat-chip 
        *ngFor="let group of selectedGroups$ | async"
        selectable="true"
        [selected]="group.selected"
        (click)="toggleGroup(group)"
      > {{ group.title}} </mat-chip>
    </mat-chip-list>
  `,
  styles: [``]
})
export class GroupFilterComponent {

  selectedGroups$ = this.store.select(fromHome.getSelectionGroups); 

  constructor(private store: Store<any>) { }

  toggleGroup(event) {
    this.store.dispatch(fromHomeActions.toggleGroup({ group: event }));
  }

}
