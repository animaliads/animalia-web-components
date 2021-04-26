import './button';

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

  test('should set aria-disabled to true if disabled is true', () => {
    document.body.innerHTML = `
      <ani-button disabled="true"></ani-button>
    `;

    const buttonElement = getShadowRoot(buttonTagName).querySelector('button');

    expect(buttonElement.getAttribute('aria-disabled')).toBe('true');
  });

  test('should set aria-disabled to false if disabled is false', () => {
    document.body.innerHTML = `
      <ani-button disabled="false"></ani-button>
    `;

    const buttonElement = getShadowRoot(buttonTagName).querySelector('button');

    expect(buttonElement.getAttribute('aria-disabled')).toBe('false');
  });

  test('should set aria-disabled to true if disabled is defined', () => {
    document.body.innerHTML = `
      <ani-button disabled></ani-button>
    `;

    const buttonElement = getShadowRoot(buttonTagName).querySelector('button');

    expect(buttonElement.getAttribute('aria-disabled')).toBe('true');
  });

  test('should set aria-disabled to false if disabled is undefined', () => {
    document.body.innerHTML = `
      <ani-button></ani-button>
    `;

    const buttonElement = getShadowRoot(buttonTagName).querySelector('button');

    expect(buttonElement.getAttribute('aria-disabled')).toBe('false');
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
