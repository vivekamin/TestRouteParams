import { TestRouteParamsPage } from './app.po';

describe('test-route-params App', () => {
  let page: TestRouteParamsPage;

  beforeEach(() => {
    page = new TestRouteParamsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
