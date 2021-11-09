import './card';

describe('Card:', () => {
  let card: HTMLElement;
  const cardTagName = 'ani-card';

  const getShadowRoot = (tagName: string): ShadowRoot => {
    return document.querySelector(tagName)?.shadowRoot;
  };

  beforeEach(() => {
    card = document.createElement(cardTagName) as HTMLElement;
  });

  afterEach(() => {
    document.body.getElementsByTagName(cardTagName)[0]?.remove();
  });
  test('should apply content', () => {
    document.body.innerHTML = `
      <ani-card>Description card</ani-card>
    `;

    const renderedText = getShadowRoot(cardTagName)
      .querySelector<HTMLSlotElement>('slot')
      .assignedNodes()[0].textContent;

    expect(renderedText).toEqual('Description card');
  });
  test('should apply content', () => {
    document.body.innerHTML = `
      <ani-card></ani-card>
    `;
    document.querySelector('ani-card').innerHTML = 'Test description';
    const renderedText = getShadowRoot(cardTagName)
      .querySelector<HTMLSlotElement>('slot')
      .assignedNodes()[0].textContent;

    expect(renderedText).toEqual('Test description');
  });
});
