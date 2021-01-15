import './link';

describe('Link:', () => {
  let link: HTMLElement;
  const linkTagName = 'pods-link';

  const getShadowRoot = (tagName: string): ShadowRoot => {
    return document.body.getElementsByTagName(tagName)[0].shadowRoot;
  };

  beforeEach(() => {
    link = document.createElement(linkTagName) as HTMLElement;
  });

  afterEach(() => {
    document.body.getElementsByTagName(linkTagName)[0].remove();
  });

  test('should be anchor element', () => {
    link.setAttribute('label', 'test label');
    document.body.appendChild(link);

    const anchorElement = getShadowRoot(linkTagName).querySelector('a');

    expect(anchorElement).toBeTruthy();
  });
});
