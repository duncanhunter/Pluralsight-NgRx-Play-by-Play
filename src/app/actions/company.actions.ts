import { Action } from '@ngrx/store';
import { Company } from '../company/company';

export const LOAD_COMPANIES = '[Companies] Load Companies';
export const LOAD_COMPANIES_SUCCESS = '[Companies] Load Companies Success';
export const DELETE_COMPANY = '[Companies] Delete';

// {type: '', payload:''}
export class LoadCompaniesAction implements Action {
    readonly type = LOAD_COMPANIES;

    constructor() { }
}

export class LoadCompaniesSuccessAction implements Action {
    readonly type = LOAD_COMPANIES_SUCCESS;

    constructor(public payload: Company[]) { }
}

export class DeleteCompanyAction implements Action {
    readonly type = DELETE_COMPANY;

    constructor(public payload: number) { }
}

export type Actions
    = LoadCompaniesAction
    | LoadCompaniesSuccessAction
    | DeleteCompanyAction;

