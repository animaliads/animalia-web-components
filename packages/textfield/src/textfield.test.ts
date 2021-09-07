import './textfield';

describe('Textfield:', () => {
  let textfield: HTMLElement;
  const textfieldTagName = 'ani-textfield';
  const textfieldElementSelector = 'input[type="text"]';

  const getShadowRoot = (tagName: string): ShadowRoot => {
    return document.querySelector(tagName).shadowRoot;
  };

  beforeEach(() => {
    textfield = document.createElement(textfieldTagName) as HTMLElement;
  });

  afterEach(() => {
    document.getElementsByTagName(textfieldTagName)[0]?.remove();
  });

  test('should apply label', () => {
    document.body.innerHTML = `
      <ani-textfield>Hello textfield</ani-textfield>
    `;

    const renderedText = getShadowRoot(textfieldTagName)
      .querySelector<HTMLSlotElement>('label > slot')
      .assignedNodes()[0].textContent;

    expect(renderedText).toBe('Hello textfield');
  });

});
