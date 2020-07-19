import { Component } from '@angular/core';

// Store
import { Store } from '@ngrx/store';
import * as fromHome from "../../store/reducers";
import * as fromHomeActions from "../../store/actions/home.action";

@Component({
  selector: 'app-group-filter',
  template: `
    <mat-chip-list selectable>
      <mat-chip 
        *ngFor="let item of groups$ | async"
        selectable="true"
        [selected]="item.id === (selectedGroupId$ | async)"
        (click)="toggleGroup(item)"
      > {{ item.title}} </mat-chip>
    </mat-chip-list>
  `,
  styles: [`
    mat-chip {
      cursor: pointer;
    }
  `]
})
export class GroupFilterComponent {

  groups$ = this.store.select(fromHome.getGroups); 
  selectedGroupId$ = this.store.select(fromHome.getSelectedGroupId); 

  constructor(private store: Store<any>) { }

  toggleGroup(event) {
    this.store.dispatch(fromHomeActions.toggleGroup({ groupId: event.id }));
  }

}
