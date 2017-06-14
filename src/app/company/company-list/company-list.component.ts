import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CompanyService } from '../company.service';
import { Observable } from 'rxjs/Observable';
import * as companyActions from './../../actions/company.actions';
import * as fromRoot from './../../reducers'
import { Store } from '@ngrx/store';
import { Company } from '../../models';
import { DeleteCompanyAction } from '../../actions/company.actions';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyListComponent implements OnInit {

  companies$: Observable<any>;

  constructor(
    private store: Store<fromRoot.State>
  ) {
     this.companies$ = this.store.select(state => state.companies);
  }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this.store.dispatch(new companyActions.LoadCompaniesAction());
  }

  deleteCompany(companyId: number) {
    this.store.dispatch(new companyActions.DeleteCompanyAction(companyId));
  }

}
