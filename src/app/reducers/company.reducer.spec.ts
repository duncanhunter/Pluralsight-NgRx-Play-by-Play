import { companyReducer } from './company.reducer';
import * as companyActions from './../actions/company.actions';

describe(`companyReducer`, () => {

    describe(`deleteCompanyAction`, () => {

        it(`should delete a company`, () => {
            const currentState = {
                companies: [
                    { id: 1, name: 'SSW', email: 'email', phone: 123 },
                    { id: 2, name: 'Microsoft' , email: 'email', phone: 123 },
                ]
            };
            const expectedResult = {
                companies: [{ id: 2, name: 'Microsoft', email: 'email', phone: 123 }]
            };

            const action = new companyActions.DeleteCompanySuccessAction(1);
            const result = companyReducer(currentState, action);
            expect(result).toEqual(expectedResult);
        });

    });
});

