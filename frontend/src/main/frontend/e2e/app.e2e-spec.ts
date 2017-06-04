import { ShowcasePage } from './app.po';

describe('showcase App', () => {
  let page: ShowcasePage;

  beforeEach(() => {
    page = new ShowcasePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
