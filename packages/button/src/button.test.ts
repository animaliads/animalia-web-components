import './button';

describe('Button:', () => {
  let button: HTMLElement;
  const buttonTagName = 'pods-button';

  const getShadowRoot = (tagName: string): ShadowRoot => {
    return document.body.getElementsByTagName(tagName)[0].shadowRoot;
  };

  beforeEach(() => {
    button = document.createElement(buttonTagName) as HTMLElement;
  });

  afterEach(() => {
    document.body.getElementsByTagName(buttonTagName)[0].remove();
  });

  test('should apply label', () => {
    button.setAttribute('label', 'test label');
    document.body.appendChild(button);

    const renderedText = getShadowRoot(buttonTagName).textContent;

    expect(renderedText).toContain('test label');
  });
});
