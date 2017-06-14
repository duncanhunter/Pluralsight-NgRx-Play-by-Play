import { Action } from '@ngrx/store';
import { Company } from '../models';

export const LOAD_COMPANIES = '[Companies] Load Companies';
export const LOAD_COMPANIES_SUCCESS = '[Companies] Load Companies Success';
export const DELETE_COMPANY = '[Companies] Delete Company';
export const DELETE_COMPANY_SUCCESS = '[Companies] Delete Company Success';
export const SELECT_COMPANY = '[Comapnies] Select Company';

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

export class DeleteCompanySuccessAction implements Action {
    readonly type = DELETE_COMPANY_SUCCESS;

    constructor(public payload: number) { }
}

export class SelectCompanyAction implements Action {
    readonly type = SELECT_COMPANY;

    constructor(public payload: number) { }
}

export type Actions
    = LoadCompaniesAction
    | LoadCompaniesSuccessAction
    | DeleteCompanyAction
    | DeleteCompanySuccessAction
    | SelectCompanyAction

