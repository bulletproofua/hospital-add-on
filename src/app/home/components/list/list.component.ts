import { Component, Inject, AfterViewInit } from '@angular/core';
import { Clipboard } from "@angular/cdk/clipboard"

import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

import { Store } from '@ngrx/store';
import * as fromHome from "../../store/reducers"

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  tableData$ = this.store.select(fromHome.getDataForTable);
  groups$ = this.store.select(fromHome.getGroups);
  selectedGroupId$ = this.store.select(fromHome.getSelectedGroupId); 

  displayedColumns: string[] = ['id', 'title'];

  constructor(
    private store: Store<any>,
    private clipboard: Clipboard,
    private _snackBar: MatSnackBar,
  ) { }

  isGroup(index, item): boolean{
    return item.isGroup;
  }

  isSubgroup(index, item): boolean{
    return item.isSubgroup;
  } 

  copyContent(text){
    this.clipboard.copy(text);
    this.openSnackBar(text);
  }

  openSnackBar(message: string,) {
    this._snackBar.openFromComponent(CopySnackBarComponent, {
      duration: 1500,
      data: {
        message: message
      }
    });
  }

}

@Component({
  selector: 'snack-bar',
  template: `
    <div class="snack-bar-wr">
      <span class="snack-text">{{ data.message }}</span>
      <span class="snack-bar-btn" (click)="onClick()">Закрити</span>
    </div>
  `,
  styles: [`
    .snack-bar-wr {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .snack-text {
      color: white;
    }
        
    .snack-bar-btn {
      margin-left: 7px;
      color: white;
      cursor: pointer;
    }
  `],
})
export class CopySnackBarComponent {

  constructor(
    private snackBar: MatSnackBar,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) { }

  onClick() {
    this.snackBar.dismiss();
  }
  
}
