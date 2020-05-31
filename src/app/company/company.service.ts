import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { Company } from '../models';
import { catchError, map } from 'rxjs/operators'

@Injectable()
export class CompanyService {

  API_BASE = 'http://firebootcamp-crm-api.azurewebsites.net/api';

  constructor(private http: Http) { }

  getCompany(companyId: number): Observable<Company> {
    return this.http.get(`${this.API_BASE}/company/${companyId}`).pipe(
      map(data => data.json()),
      catchError(this.errorHandler));
  }

  loadCompanies() {
    return this.http.get(`${this.API_BASE}/company`).pipe(
      map(data => data.json()),
      catchError(this.errorHandler))
  }

  getCompanies(): Observable<Company[]> {
    return this.http.get(`${this.API_BASE}/company`).pipe(
      map(data => data.json()),
      catchError(this.errorHandler));
  }

  deleteCompany(companyId: number): Observable<any> {
    return this.http.delete(`${this.API_BASE}/company/${companyId}`).pipe(
      map((response: Response) => response.json()));
  }

  addCompany(company: Company) {
    const headers = new Headers({ 'content-type': 'application/json' });
    const options = new RequestOptions({ headers: headers });

    return this.http.post(`${this.API_BASE}/company`, JSON.stringify(company), options).pipe(
      map(response => response.json()),
      catchError(this.errorHandler));
    ;
  }

  updateCompany(company: Company) {
    const headers = new Headers({ 'content-type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.put(`${this.API_BASE}/company/${company.id}`, JSON.stringify(company), options).pipe(
      map(response => response.json()),
      catchError(this.errorHandler));
    ;
  }

  errorHandler(error) {
    console.error('CUSTOM ERROR');
    return Observable.throw(error);
  }

}
