import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hello sydney, welcome to fbc';
  companiesCount = 0;

  // constructor(private companiesStateService: CompanyStateService) {
  // }

  ngOnInit() {
    // console.log("app component on init");
    // this.companiesStateService.loadCompanies();
    // this.companiesStateService.companies$
    //   .do(x => console.log('ngoninint1', x))
    //   .subscribe(list => {if (list) this.companiesCount = list.length});
  }

}
