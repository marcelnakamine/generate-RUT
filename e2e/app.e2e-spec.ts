import { GenerateRUTPage } from './app.po';

describe('generate-rut App', () => {
  let page: GenerateRUTPage;

  beforeEach(() => {
    page = new GenerateRUTPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
