import { Action, createReducer, on } from '@ngrx/store';
import * as dataAction from '../actions/data.action';

import { StoreData, GetDataError } from '../models/store-data.model';

export interface State {
  data: StoreData;
  error: GetDataError;
}

export const initialState: State = {
    data: undefined,
    error: undefined,
};

const datadReducer = createReducer(
    initialState,
    on(dataAction.getData, state => ({ ...state, data: undefined })),
    on(dataAction.getDataSuccess, (state, { data }) => ({ ...state, data: data })),
    on(dataAction.getDataFailure, (state, { error }) => ({ ...state, error: error })),
  );
  
  export function reducer(state: State | undefined, action: Action) {
    return datadReducer(state, action);
  }