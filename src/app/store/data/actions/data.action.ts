import { createAction, props } from '@ngrx/store';

// Model
import { StoreData, GetDataError } from '../models/store-data.model';

export const getData = createAction(
    "[Data] Get Data"
);

export const getDataSuccess = createAction(
    "[Data] Get Data Success",
    props<{ data: StoreData }>()
);

export const getDataFailure = createAction(
    "[Data] Get Data Failure",
    props<{ error: GetDataError }>()
);
