import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CompanyService } from './company/company.service';
import './core/rxjs-extensions';
import { CompanyTableComponent } from './company/company-table/company-table.component';
import { CompanyStateService } from './company/company-state.service';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
// import 'rxjs/Rx';

import { StoreModule } from '@ngrx/store';
import { companyReducer } from '../reducers/company.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { CompanyEffects } from './effects/company.effects';

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyTableComponent,
    CompanyEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    StoreModule.provideStore({companies: companyReducer}),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(CompanyEffects)

  ],
  providers: [
    CompanyService,
    CompanyStateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
