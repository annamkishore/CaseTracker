import { CaseTrackerPage } from './app.po';

describe('case-tracker App', () => {
  let page: CaseTrackerPage;

  beforeEach(() => {
    page = new CaseTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
