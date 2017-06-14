import { createSelector } from 'reselect';
import { ActionReducer } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
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

// export const getBooksState = (state: State) => state.books;


//  export const getBookEntities = createSelector(getBooksState, fromBooks.getEntities);
//  export const getBookIds = createSelector(getBooksState, fromBooks.getIds);
//  export const getSelectedBookId = createSelector(getBooksState, fromBooks.getSelectedId);
//  export const getSelectedBook = createSelector(getBooksState, fromBooks.getSelected);

