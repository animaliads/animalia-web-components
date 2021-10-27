import './select';
import Select from './select';

describe('Select:', () => {
  let select: HTMLElement;
  const tagName = 'ani-select';
  const selector = 'select';

  const getShadowRoot = (tagName: string): ShadowRoot => {
    return document.querySelector(tagName).shadowRoot;
  };

  beforeEach(() => {
    select = document.createElement(tagName) as Select;
  });

  afterEach(() => {
    document.getElementsByTagName(tagName)[0]?.remove();
  });

  test('should apply label', () => {
    document.body.innerHTML = `
      <ani-select>Hello select</ani-select>
    `;

    const renderedText = getShadowRoot(tagName)
      .querySelector<HTMLSlotElement>('label slot')
      .assignedNodes()[0].textContent;

    expect(renderedText).toEqual('Hello select');
  });

  test('should set disabled to true if disabled is true', () => {
    document.body.innerHTML = `
      <ani-select disabled="true"></ani-select>
    `;

    const selectElement = getShadowRoot(tagName).querySelector(selector);

    expect(selectElement['disabled']).toBe(true);
  });

  test('should set disabled to false if disabled is false', () => {
    document.body.innerHTML = `
      <ani-select disabled="false"></ani-select>
    `;

    const selectElement = getShadowRoot(tagName).querySelector(selector);

    expect(selectElement['disabled']).toBe(false);
  });

  test('should set disabled to true if disabled is defined', () => {
    document.body.innerHTML = `
      <ani-select disabled></ani-select>
    `;

    const selectElement = getShadowRoot(tagName).querySelector(selector);

    expect(selectElement['disabled']).toBe(true);
  });

  test('should set disabled to false if disabled is undefined', () => {
    document.body.innerHTML = `
      <ani-select></ani-select>
    `;

    const selectElement = getShadowRoot(tagName).querySelector(selector);

    expect(selectElement['disabled']).toBe(false);
  });

  test('should set attribute disabled to true', () => {
    document.body.appendChild(select);
    select.setAttribute('disabled', 'true');

    const selectDisabled =
      getShadowRoot(tagName).querySelector<HTMLElement>(selector)['disabled'];

    expect(selectDisabled).toBe(true);
  });

  test('should set value to "2"', () => {
    document.body.innerHTML = `
      <ani-select value="2" items='[{"label": "item 1", "value": 1}, {"label": "item 2", "value": 2}]'></ani-select>
    `;

    const element = getShadowRoot(tagName).querySelector(selector);

    expect(element.value).toEqual('2');
  });

  test('should set value to first option if value is undefined', () => {
    document.body.innerHTML = `
      <ani-select items='[{"label": "item 1", "value": 1}, {"label": "item 2", "value": 2}]'></ani-select>
    `;

    const element = getShadowRoot(tagName).querySelector(selector);

    expect(element.value).toEqual('1');
  });

  test('should set value to "2" dynamically', () => {
    document.body.appendChild(select);
    select.setAttribute(
      'items',
      '[{"label": "item 1", "value": 1}, {"label": "item 2", "value": 2}]'
    );
    select.setAttribute('value', '2');

    const selectValue =
      getShadowRoot(tagName).querySelector<HTMLElement>(selector)['value'];

    expect(selectValue).toBe('2');
  });

  test('should set options', () => {
    document.body.innerHTML = `
    <ani-select value="2" items='[{"label": "item 1", "value": 1}, {"label": "item 2", "value": 2}]'></ani-select>
  `;

    const element = getShadowRoot(tagName).querySelector(selector);

    expect(element.options[0].value).toEqual('1');
    expect(element.options[1].value).toEqual('2');
    expect(element.options.length).toBe(2);
  });

  test('should set options', () => {
    document.body.appendChild(select);
    select.setAttribute(
      'items',
      '[{"label": "item 1", "value": 1}, {"label": "item 2", "value": 2}]'
    );

    select.setAttribute('items', '[{"label": "item A", "value": "A"}]');

    const selectElement = select.shadowRoot.querySelector(selector);

    expect(selectElement.item(0).value).toEqual('A');
    expect(selectElement.options.length).toBe(1);
  });
});
