import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap, catchError } from 'rxjs/operators';

import * as dataActions from "../actions/data.action";

import { DataService } from '../services/data.service';
import { of, Observable } from 'rxjs';
import { Action } from '@ngrx/store';
 
@Injectable()
export class DataEffects {
 
  getData$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(dataActions.getData),
    switchMap(() => this.datraService.getDataFromFile()
      .pipe(
        map((storeData: any) => dataActions.getDataSuccess({ data: storeData })),
        catchError((error) => of(dataActions.getDataFailure(error)))
      )
    ))
  );
 
  constructor(
    private actions$: Actions,
    private datraService: DataService
  ) {}
}