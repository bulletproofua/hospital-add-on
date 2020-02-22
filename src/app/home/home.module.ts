import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
// Components
import { ListComponent } from './components/list/list.component';
import { HomeContainerComponent } from './container/home-container/home-container.component';
import { FilterComponent } from './components/filter/list.component';
import { GroupFilterComponent } from './components/group-filter/group-filter.component';

// Store
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HomeEffects } from './store/effects/home.effects';

import * as fromHome from "./store/reducers/home.reducer"

// Modules
import { MaterialModule } from '../modules/material.module';
import { FormsModule } from '@angular/forms';


const COMPONENTS = [
  HomeContainerComponent,
  ListComponent,
  FilterComponent,
  GroupFilterComponent
]


@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    FormsModule,               
    HomeRoutingModule,
    MaterialModule,
    StoreModule.forFeature(fromHome.HOME_FEATURE_KEY, fromHome.reducer),
    EffectsModule.forFeature([HomeEffects]),
  ]
})
export class HomeModule { }
