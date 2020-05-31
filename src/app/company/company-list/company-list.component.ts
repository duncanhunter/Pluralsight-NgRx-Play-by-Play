import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Company } from '../../models';
import { AppState } from 'app/models/appState';
import * as companyActions from './../../actions/company.actions';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})
export class CompanyListComponent implements OnInit {

  companies$: Observable<Company[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.loadCompanies();
    this.companies$ = this.store.select(state => state.companies.companies);
  }

  loadCompanies() {
    this.store.dispatch(new companyActions.LoadCompaniesAction());
  }

  deleteCompany(companyId: number) {
    this.store.dispatch(new companyActions.DeleteCompanyAction(companyId));
  }

}
