import { createSelector } from "@ngrx/store";

import * as fromHome from "./home.reducer";

// Models
import { Group } from '../../../models/store-data.model';
import { HOME_FEATURE_KEY } from './home.reducer';

import { State } from 'src/app/store/reducers';

export interface FeatureState {
  [HOME_FEATURE_KEY]: fromHome.HomeState;
}

export const selectHomeFeature = (state: State) => state[HOME_FEATURE_KEY];

export const getHomeState = createSelector(
    selectHomeFeature,
    (state: FeatureState) => state
);

export const getError = createSelector(
    getHomeState,
    fromHome.getError
)

export const getData = createSelector(
    getHomeState,
    fromHome.getData
)

export const getGroups = createSelector(
    getHomeState,
    fromHome.getGroups
)

export const getFilter = createSelector(
    getHomeState,
    fromHome.getFilter
)

export const getSelectedGroupId = createSelector(
    getHomeState,
    fromHome.getSelectedGroupId,
)

export const getDataFilteredByGroups = createSelector(
    getData,
    getSelectedGroupId,
    (data, selectedGroupId: any) => data && selectedGroupId !== "all" ? data.filter((group: Group) => group.id === selectedGroupId) : data
)

export const getDataFilteredByTextField = createSelector(
    getDataFilteredByGroups,
    getFilter,
    (data, filterStr: string) => {
        if (filterStr && data) {
            return JSON.parse(JSON.stringify(data)).map(group => {
                group.subGroup = group.subGroup.map(subgroup => ({
                    ...subgroup,
                    elements: subgroup.elements.filter(v => v.title.trim().toLowerCase().indexOf(filterStr) !== -1)
                })).filter(sg => sg.elements.length)
                return group
            }).filter(g => g.subGroup.length)
        }
        return data;
    }
)

export const getDataForTable = createSelector(
    getDataFilteredByTextField,
    (data): Group[] => {
        if (data) {
            const tableArr = [];
            
            data.forEach(group => {
                tableArr.push({
                    id: group.id,
                    groupTitle: group.title,
                    isGroup: true
                })
                
                group.subGroup.forEach(subgroup => {
                    tableArr.push({
                        subgroupTitle: subgroup.title,
                        isSubgroup: true
                    })

                    subgroup.elements.forEach(el => {
                        tableArr.push(el)
                    })
                })
            })
        
            return tableArr;
        }

        return [];
    }
)

