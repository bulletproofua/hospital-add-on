import { Component } from '@angular/core';

import { Store } from "@ngrx/store"
import { getData } from "./store/data/actions/data.action";

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {

  constructor(private store: Store<any>) {
    this.store.dispatch(getData());
  }

}
