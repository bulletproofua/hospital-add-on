import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { of, Observable } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { Action } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as dataActions from "../actions/home.action";

import { DataService } from '../../../services/data.service';

import { Group, StoreData } from 'src/app/models/store-data.model';
 
@Injectable()
export class HomeEffects {
 
  getData$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(dataActions.getData),
    switchMap(() => this.dataService.getDataFromFile()
      .pipe(
        map((storeData: StoreData) => {
            console.log("storeData req", storeData)
            return dataActions.getDataSuccess({ groups: storeData.group })
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
    private dataService: DataService
  ) {}
}