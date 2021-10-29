import './button';
import { Button } from './button';

describe('Button:', () => {
  let button: HTMLElement;
  const buttonTagName = 'ani-button';

  const getShadowRoot = (tagName: string): ShadowRoot => {
    return document.querySelector(tagName).shadowRoot;
  };

  beforeEach(() => {
    button = document.createElement(buttonTagName) as HTMLElement;
  });

  afterEach(() => {
    document.getElementsByTagName(buttonTagName)[0]?.remove();
  });

  test('should apply label', () => {
    document.body.innerHTML = `
      <ani-button>Hello button</ani-button>
    `;

    const renderedText = getShadowRoot(buttonTagName)
      .querySelector<HTMLSlotElement>('button > slot')
      .assignedNodes()[0].textContent;

    expect(renderedText).toBe('Hello button');
  });

  test('should set disabled to true if disabled is true', () => {
    document.body.innerHTML = `
      <ani-button disabled="true"></ani-button>
    `;

    const buttonElement = getShadowRoot(buttonTagName).querySelector('button');

    expect(buttonElement.disabled).toBe(true);
  });

  test('shouldn`t set danger if kind is tertiary', () => {
    document.body.innerHTML = `
      <ani-button kind="tertiary" danger></ani-button>
    `;

    const buttonElement = getShadowRoot(buttonTagName).querySelector('button');

    expect(buttonElement.getAttribute('danger')).toBe('false');
  });

  test('shouldn`t set danger if kind was dynamically assigned as tertiary', () => {
    document.body.appendChild(button);
    button.setAttribute('kind', 'tertiary');

    const buttonKind = getShadowRoot(buttonTagName)
      .querySelector<HTMLElement>('button')
      .getAttribute('danger');

    expect(buttonKind).toBe('false');
  });

  test('should set disabled to false if disabled is false', () => {
    document.body.innerHTML = `
      <ani-button disabled="false"></ani-button>
    `;

    const buttonElement = getShadowRoot(buttonTagName).querySelector('button');

    expect(buttonElement.disabled).toBe(false);
  });

  test('should set disabled to true if disabled is defined', () => {
    document.body.innerHTML = `
      <ani-button disabled></ani-button>
    `;

    const buttonElement = getShadowRoot(buttonTagName).querySelector('button');

    expect(buttonElement.disabled).toBe(true);
  });

  test('should set disabled to false if disabled is undefined', () => {
    document.body.innerHTML = `
      <ani-button></ani-button>
    `;

    const buttonElement = getShadowRoot(buttonTagName).querySelector('button');

    expect(buttonElement.disabled).toBe(false);
  });

  test('should set attribute disabled to true', () => {
    document.body.appendChild(button);
    button.setAttribute('disabled', 'true');

    const buttonDisabled =
      getShadowRoot(buttonTagName).querySelector<HTMLElement>('button');

    expect(buttonDisabled['disabled']).toBe(true);
  });

  test('should set danger to true if danger is true', () => {
    document.body.innerHTML = `
      <ani-button danger="true"></ani-button>
    `;

    const buttonElement = getShadowRoot(buttonTagName).querySelector('button');

    expect(buttonElement.getAttribute('danger')).toBe('true');
  });

  test('should set danger to true if danger is defined', () => {
    document.body.innerHTML = `
      <ani-button danger></ani-button>
    `;

    const buttonElement = getShadowRoot(buttonTagName).querySelector('button');

    expect(buttonElement.getAttribute('danger')).toBe('true');
  });

  test('should set danger to false if danger is undefined', () => {
    document.body.innerHTML = `
      <ani-button></ani-button>
    `;

    const buttonElement = getShadowRoot(buttonTagName).querySelector('button');

    expect(buttonElement.getAttribute('danger')).toBe('false');
  });

  test('should set attribute danger to true', () => {
    document.body.appendChild(button);
    button.setAttribute('danger', 'true');

    const buttonDanger = getShadowRoot(buttonTagName)
      .querySelector<HTMLElement>('button')
      .getAttribute('danger');

    expect(buttonDanger).toBe('true');
  });

  test('should set type to button if type is undefined', () => {
    document.body.innerHTML = `
      <ani-button></ani-button>
    `;

    const buttonElement = getShadowRoot(buttonTagName).querySelector('button');

    expect(buttonElement.getAttribute('type')).toBe('button');
  });

  test('should set type to reset if type is reset', () => {
    document.body.innerHTML = `
      <ani-button type="reset"></ani-button>
    `;

    const buttonElement = getShadowRoot(buttonTagName).querySelector('button');

    expect(buttonElement.getAttribute('type')).toBe('reset');
  });

  test('should set attribute type to submit', () => {
    document.body.appendChild(button);
    button.setAttribute('type', 'submit');

    const buttonType = getShadowRoot(buttonTagName)
      .querySelector<HTMLElement>('button')
      .getAttribute('type');

    expect(buttonType).toBe('submit');
  });

  test('should set kind to secondary if kind is undefined', () => {
    document.body.innerHTML = `
      <ani-button></ani-button>
    `;

    const buttonElement = getShadowRoot(buttonTagName).querySelector('button');

    expect(buttonElement.getAttribute('kind')).toBe('secondary');
  });

  test('should set kind to primary if type is primary', () => {
    document.body.innerHTML = `
      <ani-button kind="primary"></ani-button>
    `;

    const buttonElement = getShadowRoot(buttonTagName).querySelector('button');

    expect(buttonElement.getAttribute('kind')).toBe('primary');
  });

  test('should set attribute kind to secondary', () => {
    document.body.appendChild(button);
    button.setAttribute('kind', 'secondary');

    const buttonSecondary = getShadowRoot(buttonTagName)
      .querySelector<HTMLElement>('button')
      .getAttribute('kind');

    expect(buttonSecondary).toBe('secondary');
  });

  test('should set attribute kind to default value if kind is null', () => {
    document.body.appendChild(button);
    button.setAttribute('kind', null);

    const buttonSecondary = getShadowRoot(buttonTagName)
      .querySelector<HTMLElement>('button')
      .getAttribute('kind');

    expect(buttonSecondary).toBe('secondary');
  });

  test('should set attribute kind to default value if kind is null', () => {
    document.body.appendChild(button);
    button.setAttribute('kind', null);

    const buttonSecondary = getShadowRoot(buttonTagName)
      .querySelector<HTMLElement>('button')
      .getAttribute('kind');

    expect(buttonSecondary).toBe('secondary');
  });

  test('should set attribute type to default value if type is null string', () => {
    document.body.appendChild(button);
    button.setAttribute('type', 'null');

    const buttonType = getShadowRoot(buttonTagName)
      .querySelector<HTMLElement>('button')
      .getAttribute('type');

    expect(buttonType).toBe('button');
  });

  test('should set attribute type to default value if type is null string', () => {
    document.body.appendChild(button);
    button.setAttribute('type', 'null');

    const buttonType = getShadowRoot(buttonTagName)
      .querySelector<HTMLElement>('button')
      .getAttribute('type');

    expect(buttonType).toBe('button');
  });

  test('should call onClick function if component is clicked', () => {
    const onClickMock = jest.fn();
    button.addEventListener('onClick', onClickMock);

    button.click();

    expect(onClickMock).toHaveBeenCalled();
  });

  test('should call onClick function if component is clicked and disabled is false', () => {
    const onClickMock = jest.fn();
    button.setAttribute('disabled', 'false');
    button.addEventListener('onClick', onClickMock);

    button.click();

    expect(onClickMock).toHaveBeenCalled();
  });

  test('shouldn`t call onClick function if disabled is true', () => {
    const onClickMock = jest.fn();
    button.setAttribute('disabled', 'true');
    button.addEventListener('onClick', onClickMock);

    button.click();

    expect(onClickMock).not.toHaveBeenCalled();
  });

  test('should set focus if setFocus is called', () => {
    document.body.innerHTML = `
      <ani-button></ani-button>
    `;

    const buttonElement =
      getShadowRoot(buttonTagName).querySelector<HTMLElement>('button');

    const aniButton = <Button>document.querySelector('ani-button');

    jest.spyOn(buttonElement, 'focus');

    aniButton.setFocus();

    expect(buttonElement.focus).toBeCalled();
  });
});
