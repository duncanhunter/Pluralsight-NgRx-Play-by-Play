import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { Observable } from 'rxjs/Observable';
import { CompanyStateService } from '../company-state.service';
import * as companyActions from './../../actions/company.actions';

import { AppState } from '../../../models/appState';
import { Store } from '@ngrx/store';

@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  companies$: Observable<Company[]>;

  constructor(
    private companyService: CompanyService,
    private store: Store<AppState>
    // private companyStateService: CompanyStateService
  ) {
    this.companies$ = this.store.select(state => state.companies);
  }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    // this.companyService.loadCompanies();
    this.store.dispatch(new companyActions.LoadCompaniesAction());
    // this.companies$ = this.companyService.getCompanies();
    // this.companies$ = this.companyStateService.companies$;
  }

  deleteCompany(companyId: number) {
    // this.companyService.deleteCompany(companyId)
    //   .subscribe(() => this.getCompanies());
    this.store.dispatch(new companyActions.DeleteCompanyAction(companyId));
  }

}
