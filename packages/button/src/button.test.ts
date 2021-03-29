import './button';

describe('Button:', () => {
  let button: HTMLElement;
  const buttonTagName = 'pods-button';

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
      <pods-button>Hello button</pods-button>
    `;

    const renderedText = getShadowRoot(buttonTagName)
      .querySelector<HTMLSlotElement>('button > slot')
      .assignedNodes()[0].textContent;

    expect(renderedText).toBe('Hello button');
  });

  test('should set aria-disabled to true if disabled is true', () => {
    document.body.innerHTML = `
      <pods-button disabled="true"></pods-button>
    `;

    const buttonElement = getShadowRoot(buttonTagName).querySelector('button');

    expect(buttonElement.getAttribute('aria-disabled')).toBe('true');
  });

  test('should set aria-disabled to false if disabled is false', () => {
    document.body.innerHTML = `
      <pods-button disabled="false"></pods-button>
    `;

    const buttonElement = getShadowRoot(buttonTagName).querySelector('button');

    expect(buttonElement.getAttribute('aria-disabled')).toBe('false');
  });

  test('should set aria-disabled to true if disabled is defined', () => {
    document.body.innerHTML = `
      <pods-button disabled></pods-button>
    `;

    const buttonElement = getShadowRoot(buttonTagName).querySelector('button');

    expect(buttonElement.getAttribute('aria-disabled')).toBe('true');
  });

  test('should set aria-disabled to null if disabled is undefined', () => {
    document.body.innerHTML = `
      <pods-button></pods-button>
    `;

    const buttonElement = getShadowRoot(buttonTagName).querySelector('button');

    expect(buttonElement.getAttribute('aria-disabled')).toBe('null');
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
});
