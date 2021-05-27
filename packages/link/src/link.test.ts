import './link';

describe('Link:', () => {
  let link: HTMLElement;
  const linkTagName = 'ani-link';

  const getShadowRoot = (tagName: string): ShadowRoot => {
    return document.body.getElementsByTagName(tagName)[0].shadowRoot;
  };

  beforeEach(() => {
    link = document.createElement(linkTagName) as HTMLElement;
  });

  afterEach(() => {
    document.body.getElementsByTagName(linkTagName)[0].remove();
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

  test('should to contain _blank if isOpenNewTab is true', () => {
    document.body.innerHTML = `
      <ani-link isOpenNewTab="true">Hello link</ani-link>
    `;

    const anchorTarget = getShadowRoot(linkTagName)
      .querySelector<HTMLElement>('a')
      .getAttribute('target');

    expect(anchorTarget).toBe('_blank');
  });

  test('should to contain _blank if isOpenNewTab is empty', () => {
    document.body.innerHTML = `
      <ani-link isOpenNewTab>Hello link</ani-link>
    `;

    const anchorTarget = getShadowRoot(linkTagName)
      .querySelector<HTMLElement>('a')
      .getAttribute('target');

    expect(anchorTarget).toBe('_blank');
  });

  test('shouldn`t to be _blank if isOpenNewTab is false', () => {
    document.body.innerHTML = `
      <ani-link isOpenNewTab="false">Hello link</ani-link>
    `;

    const anchorTarget = getShadowRoot(linkTagName)
      .querySelector<HTMLElement>('a')
      .getAttribute('target');

    expect(anchorTarget).not.toBe('_blank');
  });

  test('shouldn`t to be _blank if isOpenNewTab isn`t defined', () => {
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
});
