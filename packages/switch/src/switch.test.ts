import './switch';

describe('Switch:', () => {
  let element: HTMLElement;
  const switchTagName = 'ani-switch';
  const switchElementSelector = '[role="switch"]';

  const getShadowRoot = (tagName: string): ShadowRoot => {
    return document.querySelector(tagName).shadowRoot;
  };

  beforeEach(() => {
    element = document.createElement(switchTagName) as HTMLElement;
  });

  afterEach(() => {
    document.getElementsByTagName(switchTagName)[0]?.remove();
  });

  test('should apply label', () => {
    document.body.innerHTML = `
      <ani-switch>Hello switch</ani-switch>
    `;

    const renderedText = getShadowRoot(switchTagName)
      .querySelector<HTMLSlotElement>('slot')
      .assignedNodes()[0].textContent;

    expect(renderedText).toBe('Hello switch');
  });

  test('should set aria-disabled to true if disabled is true', () => {
    document.body.innerHTML = `
      <ani-switch disabled="true"></ani-switch>
    `;

    const switchElement = getShadowRoot(switchTagName).querySelector(
      switchElementSelector
    );

    expect(switchElement.getAttribute('aria-disabled')).toBe('true');
  });

  test('should set aria-disabled to false if disabled is false', () => {
    document.body.innerHTML = `
      <ani-switch disabled="false"></ani-switch>
    `;

    const switchElement = getShadowRoot(switchTagName).querySelector(
      switchElementSelector
    );

    expect(switchElement.getAttribute('aria-disabled')).toBe('false');
  });

  test('should set aria-disabled to true if disabled is defined', () => {
    document.body.innerHTML = `
      <ani-switch disabled></ani-switch>
    `;

    const switchElement = getShadowRoot(switchTagName).querySelector(
      switchElementSelector
    );

    expect(switchElement.getAttribute('aria-disabled')).toBe('true');
  });

  test('should set aria-disabled to false if disabled is undefined', () => {
    document.body.innerHTML = `
      <ani-switch></ani-switch>
    `;

    const switchElement = getShadowRoot(switchTagName).querySelector(
      switchElementSelector
    );

    expect(switchElement.getAttribute('aria-disabled')).toBe('false');
  });

  test('should set attribute disabled to true', () => {
    document.body.appendChild(element);
    element.setAttribute('disabled', 'true');

    const switchDisabled = getShadowRoot(switchTagName)
      .querySelector<HTMLElement>(switchElementSelector)
      .getAttribute('aria-disabled');

    expect(switchDisabled).toBe('true');
  });

  test('should set aria-checked to true if checked is true', () => {
    document.body.innerHTML = `
      <ani-switch checked="true"></ani-switch>
    `;

    const switchElement = getShadowRoot(switchTagName).querySelector(
      switchElementSelector
    );

    expect(switchElement.getAttribute('aria-checked')).toBe('true');
  });

  test('should set aria-checked to mixed if checked is mixed', () => {
    document.body.innerHTML = `
      <ani-switch checked="mixed"></ani-switch>
    `;

    const switchElement = getShadowRoot(switchTagName).querySelector(
      switchElementSelector
    );

    expect(switchElement.getAttribute('aria-checked')).toBe('mixed');
  });

  test('should set aria-checked to true if checked is defined', () => {
    document.body.innerHTML = `
      <ani-switch checked></ani-switch>
    `;

    const switchElement = getShadowRoot(switchTagName).querySelector(
      switchElementSelector
    );

    expect(switchElement.getAttribute('aria-checked')).toBe('true');
  });

  test('should set aria-checked to false if checked is undefined', () => {
    document.body.innerHTML = `
      <ani-switch></ani-switch>
    `;

    const switchElement = getShadowRoot(switchTagName).querySelector(
      switchElementSelector
    );

    expect(switchElement.getAttribute('aria-checked')).toBe('false');
  });

  test('should set attribute checked to true', () => {
    document.body.appendChild(element);
    element.setAttribute('checked', 'true');

    const switchChecked = getShadowRoot(switchTagName)
      .querySelector<HTMLElement>(switchElementSelector)
      .getAttribute('aria-checked');

    expect(switchChecked).toBe('true');
  });

  test('shouldn`t set attribute checked to true when clicking switch if disabled is true', () => {
    document.body.appendChild(element);
    element.setAttribute('disabled', 'true');

    element.click();

    const switchChecked = getShadowRoot(switchTagName)
      .querySelector<HTMLElement>(switchElementSelector)
      .getAttribute('aria-checked');

    expect(switchChecked).toBe('false');
  });

  test('shouldn`t set attribute checked to true when space is pressed if disabled is true', () => {
    document.body.appendChild(element);
    element.setAttribute('disabled', 'true');

    const event = new KeyboardEvent('keydown', { keyCode: 32 });
    element.dispatchEvent(event);

    const switchChecked = getShadowRoot(switchTagName)
      .querySelector<HTMLElement>(switchElementSelector)
      .getAttribute('aria-checked');

    expect(switchChecked).toBe('false');
  });

  test('should set attribute checked to true when space is pressed', () => {
    document.body.appendChild(element);
    element.setAttribute('disabled', 'false');

    const event = new KeyboardEvent('keydown', { keyCode: 32 });
    getShadowRoot(switchTagName).dispatchEvent(event);

    const switchChecked = getShadowRoot(switchTagName)
      .querySelector<HTMLElement>(switchElementSelector)
      .getAttribute('aria-checked');

    expect(switchChecked).toBe('true');
  });

  test('shouldn`t set attribute checked to true if key pressed isn`t space', () => {
    document.body.appendChild(element);
    element.setAttribute('disabled', 'false');

    const event = new KeyboardEvent('keydown', { keyCode: 13 });
    getShadowRoot(switchTagName).dispatchEvent(event);

    const switchChecked = getShadowRoot(switchTagName)
      .querySelector<HTMLElement>(switchElementSelector)
      .getAttribute('aria-checked');

    expect(switchChecked).toBe('false');
  });

  test('should set attribute checked to true when clicking switch if disabled is false', () => {
    document.body.appendChild(element);
    element.setAttribute('disabled', 'false');

    getShadowRoot(switchTagName)
      .querySelector<HTMLElement>(switchElementSelector)
      .click();

    const switchChecked = getShadowRoot(switchTagName)
      .querySelector<HTMLElement>(switchElementSelector)
      .getAttribute('aria-checked');

    expect(switchChecked).toBe('true');
  });

  test('should set attribute checked to false when clicking switch if disabled is false', () => {
    document.body.appendChild(element);
    element.setAttribute('disabled', 'false');
    element.setAttribute('checked', 'true');

    getShadowRoot(switchTagName)
      .querySelector<HTMLElement>(switchElementSelector)
      .click();

    const switchChecked = getShadowRoot(switchTagName)
      .querySelector<HTMLElement>(switchElementSelector)
      .getAttribute('aria-checked');

    expect(switchChecked).toBe('false');
  });
});
