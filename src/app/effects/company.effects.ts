import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { CompanyService } from '../company/company.service';
import * as companyActions from './../actions/company.actions';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class CompanyEffects {
    constructor(
        private actions$: Actions,
        private companyService: CompanyService
    ) { }

    // tslint:disable-next-line:member-ordering
    @Effect() loadCompanies$ = this.actions$.pipe(
        ofType(companyActions.LOAD_COMPANIES),
        switchMap(() => {
            return this.companyService.loadCompanies().pipe(
                map(companies => new companyActions.LoadCompaniesSuccessAction(companies)));
        }));

    // tslint:disable-next-line:member-ordering
    @Effect() deleteCompany$ = this.actions$.pipe(
        ofType(companyActions.DELETE_COMPANY),
        switchMap((action: companyActions.DeleteCompanyAction) => {
            return this.companyService.deleteCompany(action.payload).pipe(
                map(company => new companyActions.DeleteCompanySuccessAction(company.id)));
        }));

}
