import { OsdesaludFrontendPage } from './app.po';

describe('osdesalud-frontend App', function() {
  let page: OsdesaludFrontendPage;

  beforeEach(() => {
    page = new OsdesaludFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
