import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CompanyService } from '../company.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {
  companyForm: FormGroup;
  isNewCompany: boolean;
  companyId: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private companyService: CompanyService,
    private fb: FormBuilder
  ) {

  }

  ngOnInit() {
    this.companyId = this.activatedRoute.snapshot.params['id'];
    this.isNewCompany = this.companyId === 'new';
    if (!this.isNewCompany) {
      this.getCompany();
    }

    this.buildForm();
  }

  getCompany() {
    this.companyService.getCompany(this.companyId)
      .subscribe(company => this.companyForm.patchValue(company));
  }

  buildForm() {
    this.companyForm = this.fb.group({
      name: ['', Validators.required],
      email: [''],
      phone: ['']
    });
  }

  saveCompany() {
    if (this.isNewCompany) {
      this.companyService.addCompany(this.companyForm.value)
        .subscribe(() => this.router.navigate([`/company/list`]));
    } else {
      // this.companyForm.value['id'] = this.companyId;
      const companyToUpdate = { ...this.companyForm.value, id: this.companyId };
      this.companyService.updateCompany(companyToUpdate)
        .subscribe(() => this.router.navigate([`/company/list`]));
    }
  }

}
