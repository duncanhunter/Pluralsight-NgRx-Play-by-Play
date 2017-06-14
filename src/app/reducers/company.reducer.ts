import { Company } from './../models';
import * as fromCompanies from './../actions/company.actions';

export interface State {
    companies: Company[];
};

const initialState: State = {
    companies: []
};

export function companyReducer(state = initialState, action: fromCompanies.Actions): State {
    switch (action.type) {
        case fromCompanies.LOAD_COMPANIES_SUCCESS: {
            return state = {
                companies: action.payload
            };
        }
        case fromCompanies.DELETE_COMPANY_SUCCESS: {
            return state = {
                companies: state.companies.filter(company => company.id !== action.payload)
            };
        }
        default: {
            return state;
        }
    }
}
