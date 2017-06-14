import { Company } from './../models';
import * as fromCompanies from './../actions/company.actions';
import { SELECT_COMPANY } from '../actions/company.actions';
import { createSelector } from 'reselect';

export interface State {
    companies: Company[];
    selectedCompanyId: number;
};

const initialState: State = {
    companies: [],
    selectedCompanyId: undefined
};

export function reducer(state = initialState, action: fromCompanies.Actions): State {
    switch (action.type) {
        case fromCompanies.LOAD_COMPANIES_SUCCESS: {
            return state = {
                ...state,
                companies: action.payload
            };
        }
        case fromCompanies.DELETE_COMPANY_SUCCESS: {
            return state = {
                ...state,
                companies: state.companies.filter(company => company.id !== action.payload)
            };
        }
        case fromCompanies.SELECT_COMPANY: {
            return state = {
                companies: [...state.companies],
                selectedCompanyId: action.payload
            };
        }
        default: {
            return state;
        }
    }
}

export const getCompanies = (state: State) => state.companies;

export const getSelectedCompanyId = (state: State) => state.selectedCompanyId;

export const getSelectedCompany = createSelector(getCompanies, getSelectedCompanyId, (companies, selectedCompanyId) => {
  return companies.find(company => company.id === +selectedCompanyId);
});
