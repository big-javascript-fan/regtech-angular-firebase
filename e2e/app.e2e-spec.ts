import { FccBookTradingPage } from './app.po';

describe('fcc-book-trading App', function() {
  let page: FccBookTradingPage;

  beforeEach(() => {
    page = new FccBookTradingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
