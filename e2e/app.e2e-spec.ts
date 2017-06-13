import { NgrxPage } from './app.po';

describe('ngrx App', () => {
  let page: NgrxPage;

  beforeEach(() => {
    page = new NgrxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
