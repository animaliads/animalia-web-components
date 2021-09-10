import './textfield';
import Textfield from './textfield';

describe('Textfield:', () => {
  let textfield: HTMLElement;
  const tagName = 'ani-textfield';
  const selector = 'input';

  const getShadowRoot = (tagName: string): ShadowRoot => {
    return document.querySelector(tagName).shadowRoot;
  };

  beforeEach(() => {
    textfield = document.createElement(tagName) as Textfield;
  });

  afterEach(() => {
    document.getElementsByTagName(tagName)[0]?.remove();
  });

  test('should apply label', () => {
    document.body.innerHTML = `
      <ani-textfield>Hello textfield</ani-textfield>
    `;

    const renderedText = getShadowRoot(tagName)
      .querySelector<HTMLSlotElement>('label slot')
      .assignedNodes()[0].textContent;

    expect(renderedText).toEqual('Hello textfield');
  });

  test('should set disabled to true if disabled is true', () => {
    document.body.innerHTML = `
      <ani-textfield disabled="true"></ani-textfield>
    `;

    const textfieldElement = getShadowRoot(tagName).querySelector(selector);

    expect(textfieldElement['disabled']).toBe(true);
  });

  test('should set disabled to false if disabled is false', () => {
    document.body.innerHTML = `
      <ani-textfield disabled="false"></ani-textfield>
    `;

    const textfieldElement = getShadowRoot(tagName).querySelector(selector);

    expect(textfieldElement['disabled']).toBe(false);
  });

  test('should set disabled to true if disabled is defined', () => {
    document.body.innerHTML = `
      <ani-textfield disabled></ani-textfield>
    `;

    const textfieldElement = getShadowRoot(tagName).querySelector(selector);

    expect(textfieldElement['disabled']).toBe(true);
  });

  test('should set disabled to false if disabled is undefined', () => {
    document.body.innerHTML = `
      <ani-textfield></ani-textfield>
    `;

    const textfieldElement = getShadowRoot(tagName).querySelector(selector);

    expect(textfieldElement['disabled']).toBe(false);
  });

  test('should set attribute disabled to true', () => {
    document.body.appendChild(textfield);
    textfield.setAttribute('disabled', 'true');

    const textfieldDisabled = getShadowRoot(tagName).querySelector<HTMLElement>(
      selector
    )['disabled'];

    expect(textfieldDisabled).toBe(true);
  });

  test('should set readOnly to true if readonly is true', () => {
    document.body.innerHTML = `
      <ani-textfield readonly="true"></ani-textfield>
    `;

    const textfieldElement = getShadowRoot(tagName).querySelector(selector);

    expect(textfieldElement['readOnly']).toBe(true);
  });

  test('should set readOnly to true if readonly is defined', () => {
    document.body.innerHTML = `
      <ani-textfield readonly></ani-textfield>
    `;

    const textfieldElement = getShadowRoot(tagName).querySelector(selector);

    expect(textfieldElement['readOnly']).toBe(true);
  });

  test('should set readOnly to false if readonly is undefined', () => {
    document.body.innerHTML = `
      <ani-textfield></ani-textfield>
    `;

    const textfieldElement = getShadowRoot(tagName).querySelector(selector);

    expect(textfieldElement['readOnly']).toBe(false);
  });

  test('should set attribute readOnly to true', () => {
    document.body.appendChild(textfield);
    textfield.setAttribute('readonly', 'true');

    const textfieldReadonly = getShadowRoot(tagName).querySelector<HTMLElement>(
      selector
    )['readOnly'];

    expect(textfieldReadonly).toBe(true);
  });

  test('should set required to true if required is true', () => {
    document.body.innerHTML = `
      <ani-textfield required="true"></ani-textfield>
    `;

    const textfieldElement = getShadowRoot(tagName).querySelector(selector);

    expect(textfieldElement['required']).toBe(true);
  });

  test('should set required to true if required is defined', () => {
    document.body.innerHTML = `
      <ani-textfield required></ani-textfield>
    `;

    const textfieldElement = getShadowRoot(tagName).querySelector(selector);

    expect(textfieldElement['required']).toBe(true);
  });

  test('should set required to false if required is undefined', () => {
    document.body.innerHTML = `
      <ani-textfield></ani-textfield>
    `;

    const textfieldElement = getShadowRoot(tagName).querySelector(selector);

    expect(textfieldElement['required']).toBe(false);
  });

  test('should set attribute required to true', () => {
    document.body.appendChild(textfield);
    textfield.setAttribute('required', 'true');

    const textfieldElement = getShadowRoot(tagName).querySelector<HTMLElement>(
      selector
    )['required'];

    expect(textfieldElement).toBe(true);
  });

  test('should set placeholder to text', () => {
    document.body.innerHTML = `
      <ani-textfield placeholder="text"></ani-textfield>
    `;

    const element = getShadowRoot(tagName).querySelector(selector);

    expect(element.getAttribute('placeholder')).toEqual('text');
  });

  test('should set attribute placeholder to text', () => {
    document.body.appendChild(textfield);
    textfield.setAttribute('placeholder', 'text');

    const element = getShadowRoot(tagName)
      .querySelector<HTMLElement>(selector)
      .getAttribute('placeholder');

    expect(element).toEqual('text');
  });

  test('should set maxlength to 2', () => {
    document.body.innerHTML = `
      <ani-textfield maxlength="2"></ani-textfield>
    `;

    const element = getShadowRoot(tagName).querySelector(selector);

    expect(element.getAttribute('maxlength')).toEqual('2');
  });

  test('should set attribute minlength to 3', () => {
    document.body.appendChild(textfield);
    textfield.setAttribute('minlength', '3');

    const element = getShadowRoot(tagName)
      .querySelector<HTMLElement>(selector)
      .getAttribute('minlength');

    expect(element).toEqual('3');
  });

  test('should set minlength to 2', () => {
    document.body.innerHTML = `
      <ani-textfield minlength="2"></ani-textfield>
    `;

    const element = getShadowRoot(tagName).querySelector(selector);

    expect(element.getAttribute('minlength')).toEqual('2');
  });

  test('should set attribute maxlength to 3', () => {
    document.body.appendChild(textfield);
    textfield.setAttribute('maxlength', '3');

    const element = getShadowRoot(tagName)
      .querySelector<HTMLElement>(selector)
      .getAttribute('maxlength');

    expect(element).toEqual('3');
  });

  test('should set value to "content test"', () => {
    document.body.innerHTML = `
      <ani-textfield value="content test"></ani-textfield>
    `;

    const element = getShadowRoot(tagName).querySelector(selector);

    expect(element.value).toEqual('content test');
  });

  test('should set value to "content test dynamic"', () => {
    document.body.appendChild(textfield);
    textfield.setAttribute('value', 'content test dynamic');

    const element = getShadowRoot(tagName).querySelector<HTMLInputElement>(
      selector
    ).value;

    expect(element).toEqual('content test dynamic');
  });

  test('should set pattern to ab+c', () => {
    document.body.innerHTML = `
      <ani-textfield pattern="ab+c"></ani-textfield>
    `;

    const element = getShadowRoot(tagName).querySelector(selector);

    expect(element.getAttribute('pattern')).toEqual('ab+c');
  });

  test('should set type to text if type is undefined', () => {
    document.body.innerHTML = `
      <ani-textfield></ani-textfield>
    `;

    const element = getShadowRoot(tagName).querySelector(selector);

    expect(element.getAttribute('type')).toEqual('text');
  });

  test('should set attribute autocomplete to off', () => {
    document.body.appendChild(textfield);
    textfield.setAttribute('autocomplete', 'off');

    const element = getShadowRoot(tagName)
      .querySelector<HTMLElement>(selector)
      .getAttribute('autocomplete');

    expect(element).toEqual('off');
  });

  test('should set attribute autocomplete to on if autocomplete is not defined', () => {
    document.body.appendChild(textfield);

    const element = getShadowRoot(tagName)
      .querySelector<HTMLElement>(selector)
      .getAttribute('autocomplete');

    expect(element).toEqual('on');
  });

  test('should return textfield element', () => {
    document.body.innerHTML = `
      <ani-textfield></ani-textfield>
    `;

    const aniTextfield = <Textfield>document.querySelector('ani-textfield');

    const element = getShadowRoot(tagName).querySelector<HTMLElement>(selector);

    expect(element).toBe(aniTextfield.getElement());
  });

  test('should set focus if setFocus is called', () => {
    document.body.innerHTML = `
      <ani-textfield></ani-textfield>
    `;

    const aniTextfield = <Textfield>document.querySelector('ani-textfield');
    spyOn(aniTextfield.getElement(), 'focus');

    aniTextfield.setFocus();

    expect(aniTextfield.getElement().focus).toBeCalled();
  });
});
