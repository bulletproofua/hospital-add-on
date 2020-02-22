import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { of, Observable } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as dataActions from "../actions/home.action";

import { DataService } from '../../../services/data.service';

import { StoreData } from 'src/app/models/store-data.model';
 
@Injectable()
export class HomeEffects {
 
  getData$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(dataActions.getData),
    switchMap(() => this.dataService.getDataFromFile()
      .pipe(
        map((storeData: StoreData) => {
            return dataActions.getDataSuccess({ groups: storeData.group })
        }),
        catchError((error: HttpErrorResponse) => {
            return of(dataActions.getDataFailure({ error: error }))
        })
      )
    ))
  );
 
  constructor(
    private actions$: Actions,
    private dataService: DataService
  ) {}
}