import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Store
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DataEffects } from './effects/data.effects';
import { reducers } from '../reducers';

// Services
import { DataService } from './services/data.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('data', reducers),
    EffectsModule.forFeature([DataEffects]),
  ],
  providers: [DataService]
})

export class DataModule { }
