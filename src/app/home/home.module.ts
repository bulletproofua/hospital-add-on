import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ListComponent } from './components/list/list.component';
import { HomeContainerComponent } from './container/home-container/home-container.component';

// Store
import { reducers } from '../store/reducers';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [ListComponent, HomeContainerComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    StoreModule.forFeature('home', reducers),
    EffectsModule.forFeature([]),
  ]
})
export class HomeModule { }
