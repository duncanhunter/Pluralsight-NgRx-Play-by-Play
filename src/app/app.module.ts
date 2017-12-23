import './core/rxjs-extensions';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { CompanyService } from './company/company.service';
import { CompanyTableComponent } from './company/company-table/company-table.component';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { CompanyEffects } from './effects/company.effects';
import { companyReducer } from './reducers/company.reducer';

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
    StoreModule.forRoot({companies: companyReducer}),
    EffectsModule.forRoot([CompanyEffects]),
    StoreDevtoolsModule.instrument({maxAge: 25})
  ],
  providers: [
    CompanyService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
