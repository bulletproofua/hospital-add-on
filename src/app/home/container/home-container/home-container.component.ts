import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromHome from "../../store/reducers";
import * as fromHomeActions from "../../store/actions/home.action";

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent {

  
  data$ = this.store.select(fromHome.getData);
  error$ = this.store.select(fromHome.getError);
  
  constructor(private store: Store<any>) {
    this.store.dispatch(fromHomeActions.getData());
  }

}