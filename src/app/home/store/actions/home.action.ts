import { createAction, props } from '@ngrx/store';

// Model
import { Group } from '../../../models/store-data.model';

export const getData = createAction(
    "[Home Api] Get Data "
);

export const getDataSuccess = createAction(
    "[Home Api] Get Data Success",
    props<{ groups: Group[] }>()
);

export const getDataFailure = createAction(
    "[Home Api] Get Data Failure",
    props<{ error: any }>()
);

export const toggleGroup = createAction(
    "[Home] Toggle Group",
    props<{ group: any }>()
);

export const setTextFilter = createAction(
    "[Home] Set Text Filter",
    props<{ text: string }>()
);

