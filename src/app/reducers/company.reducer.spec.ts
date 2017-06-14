import { reducer } from './company.reducer';
import { Company } from '../company/company';
import * as companyActions from './../actions/company.actions';

describe(`companyReducer`, () => {

    describe(`deleteCompanyAction`, () => {

    it(`should delete a company`, () => {
        const currentState = [
            { id: 1, name: 'SSW' },
            { id: 2, name: 'Microsoft' }
        ];
        const expectedResult = [
            { id: 2, name: 'Microsoft' }
        ];

        const action = new companyActions.DeleteCompanyAction(1);
        const result = reducer(currentState, action);
        expect(result).toEqual(expectedResult);
    });

    });
});

