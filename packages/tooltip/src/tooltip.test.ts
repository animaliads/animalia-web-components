import './tooltip';

fdescribe('Tooltip:', () => {
  let tooltip: HTMLElement;
  const tooltipTagName = 'ani-tooltip';

  const getShadowRoot = (tagName: string): ShadowRoot => {
    return document.querySelector(tagName).shadowRoot;
  };

  beforeEach(() => {
    tooltip = document.createElement(tooltipTagName) as HTMLElement;
  });

  afterEach(() => {
    document.body.getElementsByTagName(tooltipTagName)[0]?.remove();
  });

  test('should apply label', () => {
    document.body.innerHTML = `
      <ani-tooltip tip="Hello tooltip"></ani-tooltip>
    `;

    const renderedText =
      getShadowRoot(tooltipTagName).querySelector<HTMLSlotElement>(
        'span'
      ).textContent;

    expect(renderedText).toEqual('Hello tooltip');
  });
  test('must apply label dynamically', () => {
    document.body.innerHTML = `
    <ani-tooltip tip="Hello tooltip"></ani-tooltip>
  `;
    document.querySelector('ani-tooltip').setAttribute('tip', 'Test tip');
    const tip = getShadowRoot(tooltipTagName).querySelector('span').textContent;

    expect(tip).toEqual('Test tip');
  });

  test('must add tooltip-center-bottom class when position and direction are null', () => {
    document.body.innerHTML = `
    <ani-tooltip tip="Hello tooltip"></ani-tooltip>
    `;

    const tooltipElement = getShadowRoot(tooltipTagName).querySelector('div');
    expect(tooltipElement.classList.value).toBe(
      'ani-tooltip tooltip-center-bottom'
    );
  });
  test('must add tooltip-center-bottom class when the position is null and the direction is center', () => {
    document.body.innerHTML = `
    <ani-tooltip tip="Hello tooltip" direction="center"></ani-tooltip>
    `;

    const tooltipElement = getShadowRoot(tooltipTagName).querySelector('div');
    expect(tooltipElement.classList.value).toBe(
      'ani-tooltip tooltip-center-bottom'
    );
  });
  test('must add tooltip-center-bottom class when the position is bottom and the direction is null', () => {
    document.body.innerHTML = `
    <ani-tooltip tip="Hello tooltip" position="bottom"></ani-tooltip>
    `;

    const tooltipElement = getShadowRoot(tooltipTagName).querySelector('div');
    expect(tooltipElement.classList.value).toBe(
      'ani-tooltip tooltip-center-bottom'
    );
  });
  test('must add tooltip-center-bottom class when the position is bottom and the direction is center', () => {
    document.body.innerHTML = `
    <ani-tooltip tip="Hello tooltip" position="bottom" direction="center"></ani-tooltip>
    `;

    const tooltipElement = getShadowRoot(tooltipTagName).querySelector('div');
    expect(tooltipElement.classList.value).toBe(
      'ani-tooltip tooltip-center-bottom'
    );
  });
  test('must add tooltip-start-bottom class when the position is bottom and the direction is start', () => {
    document.body.innerHTML = `
    <ani-tooltip tip="Hello tooltip" position="bottom" direction="start"></ani-tooltip>
    `;

    const tooltipElement = getShadowRoot(tooltipTagName).querySelector('div');
    expect(tooltipElement.classList.value).toBe(
      'ani-tooltip tooltip-start-bottom'
    );
  });
  test('must add tooltip-end-bottom class when the position is bottom and the direction is end', () => {
    document.body.innerHTML = `
    <ani-tooltip tip="Hello tooltip" position="bottom" direction="end"></ani-tooltip>
    `;

    const tooltipElement = getShadowRoot(tooltipTagName).querySelector('div');
    expect(tooltipElement.classList.value).toBe(
      'ani-tooltip tooltip-end-bottom'
    );
  });

  test('must add tooltip-center-top class when the position is top and the direction is center', () => {
    document.body.innerHTML = `
    <ani-tooltip tip="Hello tooltip" position="top" direction="center"></ani-tooltip>
    `;

    const tooltipElement = getShadowRoot(tooltipTagName).querySelector('div');
    expect(tooltipElement.classList.value).toBe(
      'ani-tooltip tooltip-center-top'
    );
  });
  test('must add tooltip-start-top class when the position is top and the direction is start', () => {
    document.body.innerHTML = `
    <ani-tooltip tip="Hello tooltip" position="top" direction="start"></ani-tooltip>
    `;

    const tooltipElement = getShadowRoot(tooltipTagName).querySelector('div');
    expect(tooltipElement.classList.value).toBe(
      'ani-tooltip tooltip-start-top'
    );
  });
  test('must add tooltip-end-top class when the position is top and the direction is end', () => {
    document.body.innerHTML = `
    <ani-tooltip tip="Hello tooltip" position="top" direction="end"></ani-tooltip>
    `;

    const tooltipElement = getShadowRoot(tooltipTagName).querySelector('div');
    expect(tooltipElement.classList.value).toBe('ani-tooltip tooltip-end-top');
  });
  test('must add tooltip-center-left class when the position is left and the direction is center', () => {
    document.body.innerHTML = `
    <ani-tooltip tip="Hello tooltip" position="left" direction="center"></ani-tooltip>
    `;

    const tooltipElement = getShadowRoot(tooltipTagName).querySelector('div');
    expect(tooltipElement.classList.value).toBe(
      'ani-tooltip tooltip-center-left'
    );
  });
  test('must add tooltip-start-left class when the position is left and the direction is start', () => {
    document.body.innerHTML = `
    <ani-tooltip tip="Hello tooltip" position="left" direction="start"></ani-tooltip>
    `;

    const tooltipElement = getShadowRoot(tooltipTagName).querySelector('div');
    expect(tooltipElement.classList.value).toBe(
      'ani-tooltip tooltip-start-left'
    );
  });
  test('must add tooltip-end-left class when the position is left and the direction is end', () => {
    document.body.innerHTML = `
    <ani-tooltip tip="Hello tooltip" position="left" direction="end"></ani-tooltip>
    `;

    const tooltipElement = getShadowRoot(tooltipTagName).querySelector('div');
    expect(tooltipElement.classList.value).toBe('ani-tooltip tooltip-end-left');
  });
  test('must add tooltip-center-right class when the position is right and the direction is center', () => {
    document.body.innerHTML = `
    <ani-tooltip tip="Hello tooltip" position="right" direction="center"></ani-tooltip>
    `;

    const tooltipElement = getShadowRoot(tooltipTagName).querySelector('div');
    expect(tooltipElement.classList.value).toBe(
      'ani-tooltip tooltip-center-right'
    );
  });
  test('must add tooltip-start-right class when the position is right and the direction is start', () => {
    document.body.innerHTML = `
    <ani-tooltip tip="Hello tooltip" position="right" direction="start"></ani-tooltip>
    `;

    const tooltipElement = getShadowRoot(tooltipTagName).querySelector('div');
    expect(tooltipElement.classList.value).toBe(
      'ani-tooltip tooltip-start-right'
    );
  });
  test('must add tooltip-end-right class when the position is right and the direction is end', () => {
    document.body.innerHTML = `
    <ani-tooltip tip="Hello tooltip" position="right" direction="end"></ani-tooltip>
    `;

    const tooltipElement = getShadowRoot(tooltipTagName).querySelector('div');
    expect(tooltipElement.classList.value).toBe(
      'ani-tooltip tooltip-end-right'
    );
  });

  test('should add a tooltip-visible when click in button', () => {
    document.body.innerHTML = `
      <ani-button aria-describedby="tooltip1"> Button 1
      </ani-button>
      <ani-tooltip id="tooltip1" tip="Hello tooltip"></ani-tooltip>
    `;

    const button = document.querySelector<HTMLElement>('ani-button');
    button.click();

    const tooltipElement = getShadowRoot(tooltipTagName).querySelector('div');
    expect(tooltipElement.classList.value).toBe(
      'ani-tooltip tooltip-center-bottom tooltip-visible'
    );
  });

  test('should remove a tooltip-visible class when keydown', () => {
    document.body.innerHTML = `
    <ani-button aria-describedby="tooltip1"> Button 1
    </ani-button>
    <ani-tooltip id="tooltip1" tip="Hello tooltip"></ani-tooltip>
  `;

    const button = document.querySelector<HTMLElement>('ani-button');
    button.click();

    const event = new KeyboardEvent('keydown', { keyCode: 32 });
    button.dispatchEvent(event);

    const tooltipElement = getShadowRoot(tooltipTagName).querySelector('div');
    expect(tooltipElement.classList.value).toBe(
      'ani-tooltip tooltip-center-bottom'
    );
  });
});
