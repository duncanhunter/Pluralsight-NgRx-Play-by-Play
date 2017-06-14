import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';

import * as fromCompanies from './company.reducer';

export interface State {
  companies: fromCompanies.State;
}

const reducers = {
  companies: fromCompanies.reducer
};

const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
    return productionReducer(state, action);
}

export const getCompaniesState = (state: State) => state.companies;

export const getSelectedCompany = createSelector(getCompaniesState, fromCompanies.getSelectedCompany);
