import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import * as dataStore from "../../../store/data/reducers"

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  tableData$ = this.store.select(dataStore.getDataForTable);

  displayedColumns: string[] = ['id', 'title', 'value'];

  dataSource = []

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
  }

}
