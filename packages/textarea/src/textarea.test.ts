import './textarea';
import Textarea from './textarea';

describe('Textarea:', () => {
  let textarea: HTMLElement;
  const tagName = 'ani-textarea';
  const selector = 'textarea';

  const getShadowRoot = (tagName: string): ShadowRoot => {
    return document.querySelector(tagName).shadowRoot;
  };

  beforeEach(() => {
    textarea = document.createElement(tagName) as Textarea;
  });

  afterEach(() => {
    document.getElementsByTagName(tagName)[0]?.remove();
  });

  test('should apply label', () => {
    document.body.innerHTML = `
      <ani-textarea>Hello textarea</ani-textarea>
    `;

    const renderedText = getShadowRoot(tagName)
      .querySelector<HTMLSlotElement>('label slot')
      .assignedNodes()[0].textContent;

    expect(renderedText).toEqual('Hello textarea');
  });

  test('should set disabled to true if disabled is true', () => {
    document.body.innerHTML = `
      <ani-textarea disabled="true"></ani-textarea>
    `;

    const textareaElement = getShadowRoot(tagName).querySelector(selector);

    expect(textareaElement['disabled']).toBe(true);
  });

  test('should set disabled to false if disabled is false', () => {
    document.body.innerHTML = `
      <ani-textarea disabled="false"></ani-textarea>
    `;

    const textareaElement = getShadowRoot(tagName).querySelector(selector);

    expect(textareaElement['disabled']).toBe(false);
  });

  test('should set disabled to true if disabled is defined', () => {
    document.body.innerHTML = `
      <ani-textarea disabled></ani-textarea>
    `;

    const textareaElement = getShadowRoot(tagName).querySelector(selector);

    expect(textareaElement['disabled']).toBe(true);
  });

  test('should set disabled to false if disabled is undefined', () => {
    document.body.innerHTML = `
      <ani-textarea></ani-textarea>
    `;

    const textareaElement = getShadowRoot(tagName).querySelector(selector);

    expect(textareaElement['disabled']).toBe(false);
  });

  test('should set attribute disabled to true', () => {
    document.body.appendChild(textarea);
    textarea.setAttribute('disabled', 'true');

    const textareaDisabled =
      getShadowRoot(tagName).querySelector<HTMLElement>(selector)['disabled'];

    expect(textareaDisabled).toBe(true);
  });

  test('should set readOnly to true if readonly is true', () => {
    document.body.innerHTML = `
      <ani-textarea readonly="true"></ani-textarea>
    `;

    const textareaElement = getShadowRoot(tagName).querySelector(selector);

    expect(textareaElement['readOnly']).toBe(true);
  });

  test('should set readOnly to true if readonly is defined', () => {
    document.body.innerHTML = `
      <ani-textarea readonly></ani-textarea>
    `;

    const textareaElement = getShadowRoot(tagName).querySelector(selector);

    expect(textareaElement['readOnly']).toBe(true);
  });

  test('should set readOnly to false if readonly is undefined', () => {
    document.body.innerHTML = `
      <ani-textarea></ani-textarea>
    `;

    const textareaElement = getShadowRoot(tagName).querySelector(selector);

    expect(textareaElement['readOnly']).toBe(false);
  });

  test('should set attribute readOnly to true', () => {
    document.body.appendChild(textarea);
    textarea.setAttribute('readonly', 'true');

    const textareaReadonly =
      getShadowRoot(tagName).querySelector<HTMLElement>(selector)['readOnly'];

    expect(textareaReadonly).toBe(true);
  });

  test('should set required to true if required is true', () => {
    document.body.innerHTML = `
      <ani-textarea required="true"></ani-textarea>
    `;

    const textareaElement = getShadowRoot(tagName).querySelector(selector);

    expect(textareaElement['required']).toBe(true);
  });

  test('should set required to true if required is defined', () => {
    document.body.innerHTML = `
      <ani-textarea required></ani-textarea>
    `;

    const textareaElement = getShadowRoot(tagName).querySelector(selector);

    expect(textareaElement['required']).toBe(true);
  });

  test('should set required to false if required is undefined', () => {
    document.body.innerHTML = `
      <ani-textarea></ani-textarea>
    `;

    const textareaElement = getShadowRoot(tagName).querySelector(selector);

    expect(textareaElement['required']).toBe(false);
  });

  test('should set attribute required to true', () => {
    document.body.appendChild(textarea);
    textarea.setAttribute('required', 'true');

    const textareaElement =
      getShadowRoot(tagName).querySelector<HTMLElement>(selector)['required'];

    expect(textareaElement).toBe(true);
  });

  test('should set placeholder to text', () => {
    document.body.innerHTML = `
      <ani-textarea placeholder="text"></ani-textarea>
    `;

    const element = getShadowRoot(tagName).querySelector(selector);

    expect(element.getAttribute('placeholder')).toEqual('text');
  });

  test('should set attribute placeholder to text', () => {
    document.body.appendChild(textarea);
    textarea.setAttribute('placeholder', 'text');

    const element = getShadowRoot(tagName)
      .querySelector<HTMLElement>(selector)
      .getAttribute('placeholder');

    expect(element).toEqual('text');
  });

  test('should set maxlength to 2', () => {
    document.body.innerHTML = `
      <ani-textarea maxlength="2"></ani-textarea>
    `;

    const element = getShadowRoot(tagName).querySelector(selector);

    expect(element.getAttribute('maxlength')).toEqual('2');
  });

  test('should set attribute minlength to 3', () => {
    document.body.appendChild(textarea);
    textarea.setAttribute('minlength', '3');

    const element = getShadowRoot(tagName)
      .querySelector<HTMLElement>(selector)
      .getAttribute('minlength');

    expect(element).toEqual('3');
  });

  test('should set minlength to 2', () => {
    document.body.innerHTML = `
      <ani-textarea minlength="2"></ani-textarea>
    `;

    const element = getShadowRoot(tagName).querySelector(selector);

    expect(element.getAttribute('minlength')).toEqual('2');
  });

  test('should set attribute maxlength to 3', () => {
    document.body.appendChild(textarea);
    textarea.setAttribute('maxlength', '3');

    const element = getShadowRoot(tagName)
      .querySelector<HTMLElement>(selector)
      .getAttribute('maxlength');

    expect(element).toEqual('3');
  });

  test('should set value to "content test"', () => {
    document.body.innerHTML = `
      <ani-textarea value="content test"></ani-textarea>
    `;

    const element = getShadowRoot(tagName).querySelector(selector);

    expect(element.value).toEqual('content test');
  });

  test('should set value to "content test dynamic"', () => {
    document.body.appendChild(textarea);
    textarea.setAttribute('value', 'content test dynamic');

    const element =
      getShadowRoot(tagName).querySelector<HTMLTextAreaElement>(selector).value;

    expect(element).toEqual('content test dynamic');
  });

  test('should set rows to 4', () => {
    document.body.innerHTML = `
      <ani-textarea rows="4"></ani-textarea>
    `;

    const element = getShadowRoot(tagName).querySelector(selector);

    expect(element.getAttribute('rows')).toEqual('4');
  });

  test('should set rows to 3 if rows is undefined', () => {
    document.body.innerHTML = `
      <ani-textarea></ani-textarea>
    `;

    const element = getShadowRoot(tagName).querySelector(selector);

    expect(element.getAttribute('rows')).toEqual('3');
  });

  test('should set attribute rows to 5', () => {
    document.body.appendChild(textarea);
    textarea.setAttribute('rows', '5');

    const element = getShadowRoot(tagName)
      .querySelector<HTMLElement>(selector)
      .getAttribute('rows');

    expect(element).toEqual('5');
  });

  test('should set attribute rows to 3 if rows is not defined', () => {
    document.body.appendChild(textarea);

    const element = getShadowRoot(tagName)
      .querySelector<HTMLElement>(selector)
      .getAttribute('rows');

    expect(element).toEqual('3');
  });

  test('should return textarea element', () => {
    document.body.innerHTML = `
      <ani-textarea></ani-textarea>
    `;

    const aniTextarea = <Textarea>document.querySelector('ani-textarea');

    const element = getShadowRoot(tagName).querySelector<HTMLElement>(selector);

    expect(element).toBe(aniTextarea.getElement());
  });

  test('should set focus if setFocus is called', () => {
    document.body.innerHTML = `
      <ani-textarea></ani-textarea>
    `;

    const aniTextarea = <Textarea>document.querySelector('ani-textarea');
    spyOn(aniTextarea.getElement(), 'focus');

    aniTextarea.setFocus();

    expect(aniTextarea.getElement().focus).toBeCalled();
  });
});
