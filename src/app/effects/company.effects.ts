import { Injectable } from '@angular/core';
import { CompanyService } from '../company/company.service';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import * as companyActions from './../actions/company.actions';
import { LoadCompaniesSuccessAction } from '../actions/company.actions';
import 'rxjs/Rx';

@Injectable()
export class CompanyEffects {
    constructor(
        private actions$: Actions,
        private companyService: CompanyService
    ) { }

    @Effect() loadCompanies$ = this.actions$
        .ofType(companyActions.LOAD_COMPANIES)
        .switchMap(() => {
            return this.companyService.loadCompanies()
                .map(companies => new companyActions.LoadCompaniesSuccessAction(companies));
        });

};