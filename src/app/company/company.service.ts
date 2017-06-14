import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Company } from '../models';

@Injectable()
export class CompanyService {

  API_BASE = 'http://firebootcamp-crm-api.azurewebsites.net/api';

  constructor(private http: Http) { }

  getCompany(companyId: number): Observable<Company> {
    return this.http.get(`${this.API_BASE}/company/${companyId}`)
      .map(data => data.json())
      .catch(this.errorHandler);
  }

  loadCompanies() {
    return this.http.get(`${this.API_BASE}/company`)
      .map(data => data.json())
      .catch(this.errorHandler)
  }

  getCompanies(): Observable<Company[]> {
    return this.http.get(`${this.API_BASE}/company`)
      .map(data => data.json())
      .catch(this.errorHandler);
  }

  deleteCompany(companyId: number): Observable<any> {
    return this.http.delete(`${this.API_BASE}/company/${companyId}`)
      .map((response: Response) => response.json());
  }

  addCompany(company: Company) {
    const headers = new Headers({ 'content-type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(`${this.API_BASE}/company`, JSON.stringify(company), options)
      .map(response => response.json())
      .catch(this.errorHandler);
    ;
  }

  updateCompany(company: Company) {
    const headers = new Headers({ 'content-type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.put(`${this.API_BASE}/company/${company.id}`, JSON.stringify(company), options)
      .map(response => response.json())
      .catch(this.errorHandler);
    ;
  }

  errorHandler(error) {
    console.error('CUSTOM ERROR');
    return Observable.throw(error);
  }

}
