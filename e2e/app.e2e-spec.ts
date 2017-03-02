import { DraggablePage } from './app.po';

describe('draggable App', () => {
  let page: DraggablePage;

  beforeEach(() => {
    page = new DraggablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
