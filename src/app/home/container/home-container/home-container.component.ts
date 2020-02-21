import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as dataStore from "../../../store/data/reducers"

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
  }

  applyFilter(event) {

  }

}