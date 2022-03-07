import './icon';
import { svgs } from './svg';

describe('Icon:', () => {
  let icon: HTMLElement;
  const iconTagName = 'ani-icon';

  const getShadowRoot = (tagName: string): ShadowRoot => {
    return document.querySelector(tagName).shadowRoot;
  };

  beforeEach(() => {
    icon = document.createElement(iconTagName) as HTMLElement;
  });

  afterEach(() => {
    document.getElementsByTagName(iconTagName)[0]?.remove();
  });

  test('should apply svg icon', () => {
    document.body.innerHTML = `
      <ani-icon name="user"></ani-icon>
    `;

    const userSvg = getShadowRoot(iconTagName)
      .querySelector('path')
      .getAttribute('d');

    const expectedSvg = new DOMParser()
      .parseFromString(svgs.user, 'text/html')
      .querySelector('path')
      .getAttribute('d');

    expect(userSvg).toEqual(expectedSvg);
  });

  test('should set size to medium if size is undefined', () => {
    document.body.innerHTML = `
      <ani-icon></ani-icon>
    `;

    const iconElement = document.querySelector(iconTagName);

    expect(iconElement.getAttribute('size')).toBe('medium');
  });

  test('should set size to large if type is large', () => {
    document.body.innerHTML = `
      <ani-icon size="large"></ani-icon>
    `;

    const iconElement = document.querySelector(iconTagName);

    expect(iconElement.getAttribute('size')).toBe('large');
  });

  test('should set attribute size to medium', () => {
    document.body.appendChild(icon);
    icon.setAttribute('size', 'medium');

    const iconElement = document.querySelector(iconTagName);

    expect(iconElement.getAttribute('size')).toBe('medium');
  });

  test('should set attribute size to default value if size is null', () => {
    document.body.appendChild(icon);
    icon.setAttribute('size', null);

    const iconElement = document.querySelector(iconTagName);

    expect(iconElement.getAttribute('size')).toBe('medium');
  });
});
