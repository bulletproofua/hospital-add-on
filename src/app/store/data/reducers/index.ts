import { createSelector, createFeatureSelector, Action, combineReducers } from "@ngrx/store";

import * as fromData from "./data.reducer";
// Models


export const DATA_FEATURE_KEY = "Data";

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

export const getData = createFeatureSelector<DataState>(DATA_FEATURE_KEY);
