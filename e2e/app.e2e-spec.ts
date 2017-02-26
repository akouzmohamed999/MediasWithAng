import { LyndaProjectPage } from './app.po';

describe('lynda-project App', () => {
  let page: LyndaProjectPage;

  beforeEach(() => {
    page = new LyndaProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
