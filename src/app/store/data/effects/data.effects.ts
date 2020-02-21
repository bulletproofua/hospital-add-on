import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { of, Observable } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as dataActions from "../actions/data.action";

import { DataService } from '../services/data.service';
 
@Injectable()
export class DataEffects {
 
  getData$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(dataActions.getData),
    switchMap(() => this.datraService.getDataFromFile()
      .pipe(
        map((storeData: any) => {
            console.log("storeData req", storeData)
            return dataActions.getDataSuccess({ data: storeData })
        }),
        catchError((error: HttpErrorResponse) => {
            console.log("err", error)
            return of(dataActions.getDataFailure(error))
        })
      )
    ))
  );
 
  constructor(
    private actions$: Actions,
    private datraService: DataService
  ) {}
}