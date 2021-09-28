import './checkbox';

describe('Checkbox:', () => {
  let checkbox: HTMLElement;
  const checkboxTagName = 'ani-checkbox';
  const checkboxElementSelector = '.checkbox';

  const getShadowRoot = (tagName: string): ShadowRoot => {
    return document.querySelector(tagName).shadowRoot;
  };

  beforeEach(() => {
    checkbox = document.createElement(checkboxTagName) as HTMLElement;
  });

  afterEach(() => {
    document.getElementsByTagName(checkboxTagName)[0]?.remove();
  });

  test('should apply label', () => {
    document.body.innerHTML = `
      <ani-checkbox>Hello checkbox</ani-checkbox>
    `;

    const renderedText = getShadowRoot(checkboxTagName)
      .querySelector<HTMLSlotElement>('slot')
      .assignedNodes()[0].textContent;

    expect(renderedText).toBe('Hello checkbox');
  });

  test('should set aria-disabled to true if disabled is true', () => {
    document.body.innerHTML = `
      <ani-checkbox disabled="true"></ani-checkbox>
    `;

    const checkboxElement = getShadowRoot(checkboxTagName).querySelector(
      checkboxElementSelector
    );

    expect(checkboxElement.getAttribute('aria-disabled')).toBe('true');
  });

  test('should set aria-disabled to false if disabled is false', () => {
    document.body.innerHTML = `
      <ani-checkbox disabled="false"></ani-checkbox>
    `;

    const checkboxElement = getShadowRoot(checkboxTagName).querySelector(
      checkboxElementSelector
    );

    expect(checkboxElement.getAttribute('aria-disabled')).toBe('false');
  });

  test('should set aria-disabled to true if disabled is defined', () => {
    document.body.innerHTML = `
      <ani-checkbox disabled></ani-checkbox>
    `;

    const checkboxElement = getShadowRoot(checkboxTagName).querySelector(
      checkboxElementSelector
    );

    expect(checkboxElement.getAttribute('aria-disabled')).toBe('true');
  });

  test('should set aria-disabled to false if disabled is undefined', () => {
    document.body.innerHTML = `
      <ani-checkbox></ani-checkbox>
    `;

    const checkboxElement = getShadowRoot(checkboxTagName).querySelector(
      checkboxElementSelector
    );

    expect(checkboxElement.getAttribute('aria-disabled')).toBe('false');
  });

  test('should set attribute disabled to true', () => {
    document.body.appendChild(checkbox);
    checkbox.setAttribute('disabled', 'true');

    const checkboxDisabled = getShadowRoot(checkboxTagName)
      .querySelector<HTMLElement>(checkboxElementSelector)
      .getAttribute('aria-disabled');

    expect(checkboxDisabled).toBe('true');
  });

  test('should set aria-checked to true if checked is true', () => {
    document.body.innerHTML = `
      <ani-checkbox checked="true"></ani-checkbox>
    `;

    const checkboxElement = getShadowRoot(checkboxTagName).querySelector(
      checkboxElementSelector
    );

    expect(checkboxElement.getAttribute('aria-checked')).toBe('true');
  });

  test('should set aria-checked to mixed if checked is mixed', () => {
    document.body.innerHTML = `
      <ani-checkbox checked="mixed"></ani-checkbox>
    `;

    const checkboxElement = getShadowRoot(checkboxTagName).querySelector(
      checkboxElementSelector
    );

    expect(checkboxElement.getAttribute('aria-checked')).toBe('mixed');
  });

  test('should set aria-checked to true if checked is defined', () => {
    document.body.innerHTML = `
      <ani-checkbox checked></ani-checkbox>
    `;

    const checkboxElement = getShadowRoot(checkboxTagName).querySelector(
      checkboxElementSelector
    );

    expect(checkboxElement.getAttribute('aria-checked')).toBe('true');
  });

  test('should set aria-checked to false if checked is undefined', () => {
    document.body.innerHTML = `
      <ani-checkbox></ani-checkbox>
    `;

    const checkboxElement = getShadowRoot(checkboxTagName).querySelector(
      checkboxElementSelector
    );

    expect(checkboxElement.getAttribute('aria-checked')).toBe('false');
  });

  test('should set attribute checked to true', () => {
    document.body.appendChild(checkbox);
    checkbox.setAttribute('checked', 'true');

    const checkboxChecked = getShadowRoot(checkboxTagName)
      .querySelector<HTMLElement>(checkboxElementSelector)
      .getAttribute('aria-checked');

    expect(checkboxChecked).toBe('true');
  });

  test('should set size to medium if size is undefined', () => {
    document.body.innerHTML = `
      <ani-checkbox></ani-checkbox>
    `;

    const checkboxElement = getShadowRoot(checkboxTagName).querySelector(
      checkboxElementSelector
    );

    expect(checkboxElement.getAttribute('size')).toBe('medium');
  });

  test('should set size to large if type is large', () => {
    document.body.innerHTML = `
      <ani-checkbox size="large"></ani-checkbox>
    `;

    const checkboxElement = getShadowRoot(checkboxTagName).querySelector(
      checkboxElementSelector
    );

    expect(checkboxElement.getAttribute('size')).toBe('large');
  });

  test('should set attribute size to medium', () => {
    document.body.appendChild(checkbox);
    checkbox.setAttribute('size', 'medium');

    const checkboxMedium = getShadowRoot(checkboxTagName)
      .querySelector<HTMLElement>(checkboxElementSelector)
      .getAttribute('size');

    expect(checkboxMedium).toBe('medium');
  });

  test('should set attribute size to default value if size is null', () => {
    document.body.appendChild(checkbox);
    checkbox.setAttribute('size', null);

    const checkboxMedium = getShadowRoot(checkboxTagName)
      .querySelector<HTMLElement>(checkboxElementSelector)
      .getAttribute('size');

    expect(checkboxMedium).toBe('medium');
  });

  test('should set attribute size to default value if size is null', () => {
    document.body.appendChild(checkbox);
    checkbox.setAttribute('size', null);

    const checkboxMedium = getShadowRoot(checkboxTagName)
      .querySelector<HTMLElement>(checkboxElementSelector)
      .getAttribute('size');

    expect(checkboxMedium).toBe('medium');
  });

  test('shouldn`t set attribute checked to true when clicking checkbox if disabled is true', () => {
    document.body.appendChild(checkbox);
    checkbox.setAttribute('disabled', 'true');

    checkbox.click();

    const checkboxChecked = getShadowRoot(checkboxTagName)
      .querySelector<HTMLElement>(checkboxElementSelector)
      .getAttribute('aria-checked');

    expect(checkboxChecked).toBe('false');
  });

  test('shouldn`t set attribute checked to true when space is pressed if disabled is true', () => {
    document.body.appendChild(checkbox);
    checkbox.setAttribute('disabled', 'true');

    const event = new KeyboardEvent('keydown', { keyCode: 32 });
    checkbox.dispatchEvent(event);

    const checkboxChecked = getShadowRoot(checkboxTagName)
      .querySelector<HTMLElement>(checkboxElementSelector)
      .getAttribute('aria-checked');

    expect(checkboxChecked).toBe('false');
  });

  test('should set attribute checked to true when space is pressed', () => {
    document.body.appendChild(checkbox);
    checkbox.setAttribute('disabled', 'false');

    const event = new KeyboardEvent('keydown', { keyCode: 32 });
    checkbox.dispatchEvent(event);

    const checkboxChecked = getShadowRoot(checkboxTagName)
      .querySelector<HTMLElement>(checkboxElementSelector)
      .getAttribute('aria-checked');

    expect(checkboxChecked).toBe('true');
  });

  test('should set attribute checked to true when clicking checkbox if disabled is false', () => {
    document.body.appendChild(checkbox);
    checkbox.setAttribute('disabled', 'false');

    checkbox.click();

    const checkboxChecked = getShadowRoot(checkboxTagName)
      .querySelector<HTMLElement>(checkboxElementSelector)
      .getAttribute('aria-checked');

    expect(checkboxChecked).toBe('true');
  });

  test('should set attribute checked to false when clicking checkbox if disabled is false', () => {
    document.body.appendChild(checkbox);
    checkbox.setAttribute('disabled', 'false');
    checkbox.setAttribute('checked', 'true');

    checkbox.click();

    const checkboxChecked = getShadowRoot(checkboxTagName)
      .querySelector<HTMLElement>(checkboxElementSelector)
      .getAttribute('aria-checked');

    expect(checkboxChecked).toBe('false');
  });

  test('should be focusable if it isn`t disabled', () => {
    document.body.appendChild(checkbox);
    checkbox.setAttribute('disabled', 'false');

    const checkboxElement = getShadowRoot(checkboxTagName)
    .querySelector<HTMLElement>(checkboxElementSelector);

  expect(checkboxElement.getAttribute('tabindex')).toBe('0');
  });
  
  test('shouldn`t be focusable if it is disabled', () => {
    document.body.appendChild(checkbox);
    checkbox.setAttribute('disabled', 'true');

    const checkboxElement = getShadowRoot(checkboxTagName)
    .querySelector<HTMLElement>(checkboxElementSelector);

  expect(checkboxElement.getAttribute('tabindex')).toBe('-1');
  });
});
