import './link';

describe('Link:', () => {
  let link: HTMLElement;
  const linkTagName = 'ani-link';

  const getShadowRoot = (tagName: string): ShadowRoot => {
    return document.querySelector(tagName)?.shadowRoot;
  };

  beforeEach(() => {
    link = document.createElement(linkTagName) as HTMLElement;
  });

  afterEach(() => {
    document.body.getElementsByTagName(linkTagName)[0]?.remove();
  });

  test('should be anchor element', () => {
    document.body.appendChild(link);

    const anchorElement = getShadowRoot(linkTagName).querySelector('a');

    expect(anchorElement).toBeTruthy();
    expect(anchorElement instanceof HTMLAnchorElement).toBeTruthy();
  });

  test('should apply label', () => {
    document.body.innerHTML = `
      <ani-link>Hello link</ani-link>
    `;

    const renderedText = getShadowRoot(linkTagName)
      .querySelector<HTMLSlotElement>('a > slot')
      .assignedNodes()[0].textContent;

    expect(renderedText).toBe('Hello link');
  });

  test('should to contain _blank if open-new-tab is true', () => {
    document.body.innerHTML = `
      <ani-link open-new-tab="true">Hello link</ani-link>
    `;

    const anchorTarget = getShadowRoot(linkTagName)
      .querySelector<HTMLElement>('a')
      .getAttribute('target');

    expect(anchorTarget).toBe('_blank');
  });

  test('should to contain _blank if open-new-tab is empty', () => {
    document.body.innerHTML = `
      <ani-link open-new-tab>Hello link</ani-link>
    `;

    const anchorTarget = getShadowRoot(linkTagName)
      .querySelector<HTMLElement>('a')
      .getAttribute('target');

    expect(anchorTarget).toBe('_blank');
  });

  test('shouldn`t to be _blank if open-new-tab is false', () => {
    document.body.innerHTML = `
      <ani-link open-new-tab="false">Hello link</ani-link>
    `;

    const anchorTarget = getShadowRoot(linkTagName)
      .querySelector<HTMLElement>('a')
      .getAttribute('target');

    expect(anchorTarget).not.toBe('_blank');
  });

  test('shouldn`t to be _blank if open-new-tab isn`t defined', () => {
    document.body.innerHTML = `
      <ani-link>Hello link</ani-link>
    `;

    const anchorTarget = getShadowRoot(linkTagName)
      .querySelector<HTMLElement>('a')
      .getAttribute('target');

    expect(anchorTarget).not.toBe('_blank');
  });

  test('url should be equal to href attribute', () => {
    const url = 'animaliads.io';

    document.body.innerHTML = `
      <ani-link url="${url}">Hello link</ani-link>
    `;

    const anchorHref = getShadowRoot(linkTagName)
      .querySelector<HTMLElement>('a')
      .getAttribute('href');

    expect(anchorHref).toBe(url);
  });

  test('should set attribute target to _blank if open-new-tab to change dynamically', () => {
    document.body.appendChild(link);
    link.setAttribute('open-new-tab', 'true');

    const anchorTarget = getShadowRoot(linkTagName)
      .querySelector<HTMLElement>('a')
      .getAttribute('target');

    expect(anchorTarget).toBe('_blank');
  });
});
