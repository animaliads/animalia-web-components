import './card';

describe('Card:', () => {
  let card: HTMLElement;
  const cardTagName = 'ani-card';
  const href = 'https://po-ui.io/';

  const getShadowRoot = (tagName: string): ShadowRoot => {
    return document.querySelector(tagName).shadowRoot;
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
  test('must apply content dynamically', () => {
    document.body.innerHTML = `
      <ani-card></ani-card>
    `;
    document.querySelector('ani-card').innerHTML = 'Test description';
    const renderedText = getShadowRoot(cardTagName)
      .querySelector<HTMLSlotElement>('slot')
      .assignedNodes()[0].textContent;

    expect(renderedText).toEqual('Test description');
  });

  test('should set type to be link and add property href', () => {
    document.body.innerHTML = `
      <ani-card type="link" href="${href}"></ani-card>
    `;

    const cardElement = getShadowRoot(cardTagName).querySelector('a');
    expect(cardElement.getAttribute('href')).toBe(href);
  });

  test('should set type to be selected and add property role and tabindex', () => {
    const role = 'radio';
    const tabindex = '0';
    document.body.innerHTML = `
      <ani-card type="selectable"></ani-card>
    `;

    const cardElement = getShadowRoot(cardTagName).querySelector('div');
    expect(cardElement.getAttribute('role')).toBe(role);
    expect(cardElement.getAttribute('tabindex')).toBe(tabindex);
  });

  test('should set select to be true add property aria-checked=true', () => {
    document.body.innerHTML = `
      <ani-card type="selectable" selected="true" ></ani-card>
    `;

    const cardElement = getShadowRoot(cardTagName).querySelector('div');
    expect(cardElement.getAttribute('aria-checked')).toBe('true');
  });

  test('should set select to be true add property aria-checked=false', () => {
    document.body.innerHTML = `
      <ani-card type="selectable" selected="false" ></ani-card>
    `;

    const cardElement = getShadowRoot(cardTagName).querySelector('div');
    expect(cardElement.getAttribute('aria-checked')).toBe('false');
  });
  test('should change type from read-only to selectable', () => {
    document.body.innerHTML = `
      <ani-card type="read-only"></ani-card>
    `;

    document.querySelector('ani-card').setAttribute('type', 'selectable');

    const cardElement = getShadowRoot(cardTagName).querySelector('div');
    expect(cardElement.getAttribute('aria-checked')).toBe('false');
  });
  test('should change type from read-only to link', () => {
    document.body.innerHTML = `
      <ani-card type="read-only"></ani-card>
    `;

    document.querySelector('ani-card').setAttribute('type', 'link');
    document.querySelector('ani-card').setAttribute('href', href);

    const cardElement = getShadowRoot(cardTagName).querySelector('a');
    expect(cardElement.getAttribute('href')).toBe(href);
  });

  test('should change type from link to selectable', () => {
    const role = 'radio';
    const tabindex = '0';

    document.body.innerHTML = `
      <ani-card type="link"></ani-card>
    `;

    document.querySelector('ani-card').setAttribute('type', 'selectable');
    document.querySelector('ani-card').setAttribute('selected', 'true');

    const cardElement = getShadowRoot(cardTagName).querySelector('div');

    expect(cardElement.getAttribute('role')).toBe(role);
    expect(cardElement.getAttribute('tabindex')).toBe(tabindex);
  });

  test('should change type from link to read-only', () => {
    document.body.innerHTML = `
      <ani-card type="link"></ani-card>
    `;

    document.querySelector('ani-card').setAttribute('type', 'read-only');

    const cardElement = getShadowRoot(cardTagName).querySelector('div');
    expect(cardElement.classList.value).toBe('ani-card');
  });

  test('should change type from selectable to read-only', () => {
    document.body.innerHTML = `
    <ani-card type="selectable"></ani-card>
  `;

    document.querySelector('ani-card').setAttribute('type', 'read-only');

    const cardElement = getShadowRoot(cardTagName).querySelector('div');
    expect(cardElement.classList.value).toBe('ani-card');
  });

  test('should change type from selectable to link', () => {
    document.body.innerHTML = `
    <ani-card type="selectable"></ani-card>
  `;

    document.querySelector('ani-card').setAttribute('type', 'link');
    document.querySelector('ani-card').setAttribute('href', href);

    const cardElement = getShadowRoot(cardTagName).querySelector('a');
    expect(cardElement.getAttribute('href')).toBe(href);
  });

  test('should change the href dynamically', () => {
    document.body.innerHTML = `
    <ani-card type="link" href="https://animaliads.io/"></ani-card>
  `;

    document.querySelector('ani-card').setAttribute('href', href);

    const cardElement = getShadowRoot(cardTagName).querySelector('a');
    expect(cardElement.getAttribute('href')).toBe(href);
  });

  test('should set aria-disabled to true if selected is defined', () => {
    document.body.innerHTML = `
      <ani-card type="selectable" selected></ani-card>
    `;

    const cardElement = getShadowRoot(cardTagName).querySelector('div');
    expect(cardElement.getAttribute('aria-checked')).toBe('true');
  });

  test('should call onClick function if component is clicked', () => {
    document.body.innerHTML = `
      <ani-card type="selectable"></ani-card>
    `;
    document.querySelector('ani-card').setAttribute('selected', 'false');

    const cardChecked =
      getShadowRoot(cardTagName).querySelector<HTMLElement>('div');
    cardChecked.click();

    expect(cardChecked.getAttribute('aria-checked')).toBe('true');
  });

  test('should call onClick and change selected true to false', () => {
    document.body.innerHTML = `
      <ani-card type="selectable"></ani-card>
    `;
    document.querySelector('ani-card').setAttribute('selected', 'true');

    const cardChecked =
      getShadowRoot(cardTagName).querySelector<HTMLElement>('div');
    cardChecked.click();

    expect(cardChecked.getAttribute('aria-checked')).toBe('false');
  });
  test('should`d set aria-checked attribute when clicked, if not selectable type', () => {
    document.body.innerHTML = `
      <ani-card></ani-card>
    `;

    const cardChecked =
      getShadowRoot(cardTagName).querySelector<HTMLElement>('div');
    cardChecked.click();

    expect(cardChecked.getAttribute('aria-checked')).toBeNull();
  });

  test('should`d set aria-checked attribute when clicked, if read-only type', () => {
    document.body.innerHTML = `
      <ani-card type="read-only"></ani-card>
    `;

    const cardChecked =
      getShadowRoot(cardTagName).querySelector<HTMLElement>('div');
    cardChecked.click();

    expect(cardChecked.getAttribute('aria-checked')).toBeNull();
  });

  test('should change the selected when selecting by keyboard', () => {
    document.body.appendChild(card);
    card.setAttribute('type', 'selectable');

    const event = new KeyboardEvent('keydown', { keyCode: 32 });
    card.dispatchEvent(event);

    const cardChecked =
      getShadowRoot(cardTagName).querySelector<HTMLElement>('div');

    expect(cardChecked.getAttribute('aria-checked')).toBe('true');
  });

  test('should change the selected true to false when selecting by keyboard', () => {
    document.body.appendChild(card);
    card.setAttribute('type', 'selectable');
    card.setAttribute('selected', 'true');

    const event = new KeyboardEvent('keydown', { keyCode: 32 });
    card.dispatchEvent(event);

    const cardChecked =
      getShadowRoot(cardTagName).querySelector<HTMLElement>('div');

    expect(cardChecked.getAttribute('aria-checked')).toBe('false');
  });

  test('should`d set aria-checked attribute when keyboard selection, if not selectable type', () => {
    document.body.appendChild(card);

    const event = new KeyboardEvent('keydown', { keyCode: 32 });
    card.dispatchEvent(event);

    const cardChecked =
      getShadowRoot(cardTagName).querySelector<HTMLElement>('div');

    expect(cardChecked.getAttribute('aria-checked')).toBeNull();
  });

  test('should`d set aria-checked attribute when keyboard selection, if read-only type', () => {
    document.body.appendChild(card);
    card.setAttribute('type', 'read-only');
    const event = new KeyboardEvent('keydown', { keyCode: 32 });
    card.dispatchEvent(event);

    const cardChecked =
      getShadowRoot(cardTagName).querySelector<HTMLElement>('div');

    expect(cardChecked.getAttribute('aria-checked')).toBeNull();
  });

  test('should`d set aria-checked attribute when keyboard selection, if link type', () => {
    document.body.appendChild(card);
    card.setAttribute('type', 'link');
    const event = new KeyboardEvent('keydown', { keyCode: 32 });
    card.dispatchEvent(event);

    const cardChecked =
      getShadowRoot(cardTagName).querySelector<HTMLElement>('a');

    expect(cardChecked.getAttribute('aria-checked')).toBeNull();
  });
});
