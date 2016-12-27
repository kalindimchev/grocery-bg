import { GroceryBgPage } from './app.po';

describe('grocery-bg App', function() {
  let page: GroceryBgPage;

  beforeEach(() => {
    page = new GroceryBgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
