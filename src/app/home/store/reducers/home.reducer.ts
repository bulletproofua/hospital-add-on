import { Action, createReducer, on } from '@ngrx/store';
import * as homeAction from '../actions/home.action';

import { Group, GetDataError } from '../../../models/store-data.model';

export const HOME_FEATURE_KEY = "home";

export interface HomeState {
    data: Group[],
    groups: any[];
    error: GetDataError;
    filter: string;
    selectedGroups: any[];
    tableDisplayedColumns: string[]
}

export const initialState: HomeState = {
    data: [],
    groups: [],
    error: null,
    filter: '',
    selectedGroups: [],
    tableDisplayedColumns: ['id', 'title']
};

const dataReducer = createReducer(
    initialState,
    on(homeAction.getData, state => initialState),
    on(homeAction.getDataSuccess, (state, { groups, type }) => ({
        ...state,
        data: groups,
        groups: groups.map(g => ({ id: g.id, title: g.title })),
        error: null,
        selectedGroups: groups.map(group => ({ id: group.id, title: group.title, selected: true }))
    })),
    on(homeAction.getDataFailure, (state, { error }) => ({ ...state, data: undefined, error: error })),
    on(homeAction.toggleGroup, (state, { group }) => {
        const SG = JSON.parse(JSON.stringify(state.selectedGroups));
        let el = SG[SG.findIndex(g => g.id === group.id)]       
        el.selected = !el.selected;
        return { ...state, selectedGroups: SG }
    }),
    on(homeAction.setTextFilter, (state, { text }) => ({ ...state, filter: text })),
);
  
export function reducer(state: HomeState, action: Action) {
    return dataReducer(state, action);
}

export const getData = (state) => state.data;
export const getGroups = (state) => state.groups;
export const getError = (state) => state.error;
export const getFilter = (state) => state.filter;
export const getSelectedGroups = (state) => state.selectedGroups;
export const getTableDisplayedColumns = (state) => state.tableDisplayedColumns;
