import { createSelector, createFeatureSelector, Action, combineReducers } from "@ngrx/store";

import * as fromData from "./data.reducer";

// Models
import { StoreData, Group, SubGroupElement } from '../models/store-data.model';


export const DATA_FEATURE_KEY = "data";

export interface DataState {
  data: fromData.State;
}

export interface State {
  [DATA_FEATURE_KEY]: DataState;
}

export function reducers(state: DataState, action: Action) {
  return combineReducers({
    data: fromData.reducer
  })(state, action);
}

export const getDataState = createFeatureSelector<DataState>(DATA_FEATURE_KEY);

export const getData = createSelector(
    getDataState,
    (state: DataState) => { 
        console.log("state 1", state)
        return state;
    }
);

export const getError = createSelector(
    getData,
    data => fromData.getError(data)
)

export const getDataFromFile = createSelector(
    getData,
    data => fromData.getData(data)
)

export const getFilter = createSelector(
    getData,
    data => fromData.getFilter(data)
)

export const getSelectedGroups = createSelector(
    getData,
    data => fromData.getSelectedGroups(data)
)

export const getGroups = createSelector(
    getDataFromFile,
    (data: StoreData): Group[] => data.group
)



export const getDataForTable = createSelector(
    getDataFromFile,
    (data): SubGroupElement[] => {
        console.log("data", data)

        return [];
    }
)


// .trim().toLowerCase()

