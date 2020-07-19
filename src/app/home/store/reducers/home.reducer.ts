import { Action, createReducer, on } from '@ngrx/store';
import * as homeAction from '../actions/home.action';

import { Group } from '../../../models/store-data.model';

export const HOME_FEATURE_KEY = "home";

export interface HomeState {
    data: Group[],
    groups: any[];
    error: any;
    filter: string;
    selectedGroupId: string;
}

export const initialState: HomeState = {
    data: [],
    groups: [],
    error: null,
    filter: '',
    selectedGroupId: null,
};

const dataReducer = createReducer(
    initialState,
    on(homeAction.getData, () => initialState),

    on(homeAction.getDataSuccess, (state, { groups }) => ({
        ...state,
        data: groups,
        groups: [...groups, { id: "all", title: "УСІ", }],
        error: null,
        selectedGroupId: groups[0].id
    })),

    on(homeAction.getDataFailure, (state, { error }) => ({ 
        ...state, 
        data: undefined, error: error 
    })),

    on(homeAction.toggleGroup, (state, { groupId }) => ({
        ...state,
        selectedGroupId: groupId,
    })),

    on(homeAction.setTextFilter, (state, { text }) => ({ ...state, filter: text })),
);
  
export function reducer(state: HomeState, action: Action) {
    return dataReducer(state, action);
}

export const getData = (state) => state.data;
export const getGroups = (state) => state.groups;
export const getError = (state) => state.error;
export const getFilter = (state) => state.filter;
export const getSelectedGroupId = (state) => state.selectedGroupId;
