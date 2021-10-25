import './radio';

describe('Radio:', () => {
  let radio: HTMLElement;
  const radioTagName = 'ani-radio';
  const radioElementSelector = 'input[type="radio"]';

  const getShadowRoot = (tagName: string): ShadowRoot => {
    return document.querySelector(tagName).shadowRoot;
  };

  beforeEach(() => {
    radio = document.createElement(radioTagName) as HTMLElement;
  });

  afterEach(() => {
    document.getElementsByTagName(radioTagName)[0]?.remove();
  });

  test('should apply label', () => {
    document.body.innerHTML = `
      <ani-radio>Hello radio</ani-radio>
    `;

    const renderedText = getShadowRoot(radioTagName)
      .querySelector<HTMLSlotElement>('label > slot')
      .assignedNodes()[0].textContent;

    expect(renderedText).toBe('Hello radio');
  });

  test('should set disabled to true if disabled is true', () => {
    document.body.innerHTML = `
      <ani-radio disabled="true"></ani-radio>
    `;

    const radioElement: HTMLInputElement =
      getShadowRoot(radioTagName).querySelector(radioElementSelector);

    expect(radioElement.disabled).toBe(true);
  });

  test('should set disabled to false if disabled is false', () => {
    document.body.innerHTML = `
      <ani-radio disabled="false"></ani-radio>
    `;

    const radioElement: HTMLInputElement =
      getShadowRoot(radioTagName).querySelector(radioElementSelector);

    expect(radioElement.disabled).toBe(false);
  });

  test('should set disabled to true if disabled is defined', () => {
    document.body.innerHTML = `
      <ani-radio disabled></ani-radio>
    `;

    const radioElement: HTMLInputElement =
      getShadowRoot(radioTagName).querySelector(radioElementSelector);

    expect(radioElement.disabled).toBe(true);
  });

  test('should set disabled to false if disabled is undefined', () => {
    document.body.innerHTML = `
      <ani-radio></ani-radio>
    `;

    const radioElement: HTMLInputElement =
      getShadowRoot(radioTagName).querySelector(radioElementSelector);

    expect(radioElement.disabled).toBe(false);
  });

  test('should set attribute disabled to true', () => {
    document.body.appendChild(radio);
    radio.setAttribute('disabled', 'true');

    const radioElement: HTMLInputElement =
      getShadowRoot(radioTagName).querySelector(radioElementSelector);

    expect(radioElement.disabled).toBe(true);
  });

  test('should set checked to true if checked is true', () => {
    document.body.innerHTML = `
      <ani-radio checked="true"></ani-radio>
    `;

    const radioElement =
      getShadowRoot(radioTagName).querySelector(radioElementSelector);

    expect(radioElement['checked']).toBe(true);
  });

  test('should set checked to true if checked is defined', () => {
    document.body.innerHTML = `
      <ani-radio checked></ani-radio>
    `;

    const radioElement =
      getShadowRoot(radioTagName).querySelector(radioElementSelector);

    expect(radioElement['checked']).toBe(true);
  });

  test('should set checked to false if checked is undefined', () => {
    document.body.innerHTML = `
      <ani-radio></ani-radio>
    `;

    const radioElement =
      getShadowRoot(radioTagName).querySelector(radioElementSelector);

    expect(radioElement['checked']).toBe(false);
  });

  test('should set attribute checked to true', () => {
    document.body.appendChild(radio);
    radio.setAttribute('checked', 'true');

    const radioChecked =
      getShadowRoot(radioTagName).querySelector<HTMLElement>(
        radioElementSelector
      )['checked'];

    expect(radioChecked).toBe(true);
  });

  test('should set size to medium if size is undefined', () => {
    document.body.innerHTML = `
      <ani-radio></ani-radio>
    `;

    const radioElement =
      getShadowRoot(radioTagName).querySelector(radioElementSelector);

    expect(radioElement.getAttribute('size')).toBe('medium');
  });

  test('should set size to large if type is large', () => {
    document.body.innerHTML = `
      <ani-radio size="large"></ani-radio>
    `;

    const radioElement =
      getShadowRoot(radioTagName).querySelector(radioElementSelector);

    expect(radioElement.getAttribute('size')).toBe('large');
  });

  test('should set attribute size to medium', () => {
    document.body.appendChild(radio);
    radio.setAttribute('size', 'medium');

    const radioMedium = getShadowRoot(radioTagName)
      .querySelector<HTMLElement>(radioElementSelector)
      .getAttribute('size');

    expect(radioMedium).toBe('medium');
  });

  test('should set attribute size to default value if size is null', () => {
    document.body.appendChild(radio);
    radio.setAttribute('size', null);

    const radioMedium = getShadowRoot(radioTagName)
      .querySelector<HTMLElement>(radioElementSelector)
      .getAttribute('size');

    expect(radioMedium).toBe('medium');
  });

  test('should set attribute size to default value if size is null', () => {
    document.body.appendChild(radio);
    radio.setAttribute('size', null);

    const radioMedium = getShadowRoot(radioTagName)
      .querySelector<HTMLElement>(radioElementSelector)
      .getAttribute('size');

    expect(radioMedium).toBe('medium');
  });

  test('shouldn`t set attribute checked to true when clicking radio if disabled is true', () => {
    document.body.appendChild(radio);
    radio.setAttribute('disabled', 'true');

    radio.click();

    const radioChecked =
      getShadowRoot(radioTagName).querySelector<HTMLElement>(
        radioElementSelector
      )['checked'];

    expect(radioChecked).toBe(false);
  });

  test('should set attribute checked to true when clicking radio if disabled is false', () => {
    document.body.appendChild(radio);
    radio.setAttribute('disabled', 'false');

    radio.click();

    const radioChecked =
      getShadowRoot(radioTagName).querySelector<HTMLElement>(
        radioElementSelector
      )['checked'];

    expect(radioChecked).toBe(true);
  });
});
