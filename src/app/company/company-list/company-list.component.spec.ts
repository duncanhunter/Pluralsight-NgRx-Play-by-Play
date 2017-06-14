import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyListComponent } from './company-list.component';
import { CompanyTableComponent } from '../company-table/company-table.component';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { CompanyService } from '../company.service';
import { HttpModule } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { By } from '@angular/platform-browser';
import { Company } from '../../models';

xdescribe('CompanyListComponent', () => {
    let component: CompanyListComponent;
    let fixture: ComponentFixture<CompanyListComponent>;
    let companyService: CompanyService;
    let de: DebugElement;

    const fakeCompany = { name: 'Duncan', email: 'email', phone: 123 } as Company;

    beforeEach(async(() => {

        const companyServiceStub = {
            getCompanies: () => Observable.of([fakeCompany, fakeCompany])
        };

        TestBed.configureTestingModule({
            declarations: [CompanyListComponent, CompanyTableComponent],
            providers: [CompanyService],
            // providers: [{ provide: CompanyService, useValue: companyServiceStub }],
            imports: [RouterTestingModule, HttpModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CompanyListComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;
        companyService = fixture.debugElement.injector.get(CompanyService);
    });

    it('should create', () => {
        const spy = spyOn(companyService, 'getCompanies').and.returnValue(Observable.of(fakeCompany));
        expect(component).toBeTruthy();
    });

    it(`should  have a inital item in the template`, (done) => {
        const spy = spyOn(companyService, 'getCompanies').and.returnValue(Observable.of([fakeCompany]));

        fixture.detectChanges();
        component.companies$.subscribe(c => {
            // companyService.getCompanies().subscribe(c => {
            fixture.detectChanges();
            console.log('c', c);
            // console.log('fake', fakeCompany);
            expect(c[0]).toBe(fakeCompany);
            done();
        });
    });

    it(`should  have a inital item in the template`, async(() => {
        spyOn(companyService, 'getCompanies').and.returnValue(Observable.of([fakeCompany, fakeCompany]));

        fixture.detectChanges();
        // expect(companyService.getCompanies).toHaveBeenCalledTimes(1);
        const companyRows = de.queryAll(By.css('.company-row'));
        fixture.whenStable().then(() => {
            expect(companyRows.length).toEqual(2);
        });
    }));
});
