import { Action, createReducer, on } from '@ngrx/store';
import * as dataAction from '../actions/data.action';

import { StoreData, GetDataError } from '../models/store-data.model';

export interface State {
    data: StoreData;
    error: GetDataError;
    filter: string;
    selectedGroups: string[];
}

export const initialState: State = {
    data: undefined,
    error: undefined,
    filter: '',
    selectedGroups: []
};

const datadReducer = createReducer(
    initialState,
    on(dataAction.getData, state => initialState),
    on(dataAction.getDataSuccess, (state, { data }) => {
        console.log("--- state", state);
        console.log("data", data)
        return {
            ...state
        }
    }),
    //({ ...state, data: data, error: undefined })),
    on(dataAction.getDataFailure, (state, { error }) => ({ ...state, data: undefined, error: error })),
);
  
export function reducer(state: State, action: Action) {
    return datadReducer(state, action);
}

export const getData = (state) => state.data;
export const getError = (state) => state.error;
export const getFilter = (state) => state.filter;
export const getSelectedGroups = (state) => state.selectedGroups;