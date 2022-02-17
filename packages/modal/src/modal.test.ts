import './modal';
import { Modal } from './modal';

describe('Modal:', () => {
  let modal: HTMLElement;
  const modalTagName = 'ani-modal';

  const getShadowRoot = (tagName: string): ShadowRoot => {
    return document.querySelector(tagName).shadowRoot;
  };

  beforeEach(() => {
    modal = document.createElement(modalTagName) as HTMLElement;
  });

  afterEach(() => {
    document.getElementsByTagName(modalTagName)[0]?.remove();
  });

  /**
   * setDefaultSize()
   */
  test('should set "size" to medium if "size" is undefined', () => {
    document.body.innerHTML = '<ani-modal></ani-modal>';

    const aniModal = <Modal>document.querySelector(modalTagName);

    expect(aniModal.getAttribute('size')).toBe('medium');
  });

  test('should set "size" to medium if "size" is defined without value', () => {
    document.body.innerHTML = '<ani-modal size></ani-modal>';

    const aniModal = <Modal>document.querySelector(modalTagName);

    expect(aniModal.getAttribute('size')).toBe('medium');
  });

  test('should set "size" value if "size" is defined with value', () => {
    document.body.innerHTML = '<ani-modal size="small"></ani-modal>';

    const aniModal = <Modal>document.querySelector(modalTagName);

    expect(aniModal.getAttribute('size')).toBe('small');
  });

  /**
   * setDefaultVisible()
   */
  test('should set "visible" to false if "visible" is undefined', () => {
    document.body.innerHTML = '<ani-modal></ani-modal>';

    const aniModal = <Modal>document.querySelector(modalTagName);

    expect(aniModal.getAttribute('visible')).toBe('false');
  });

  test('should set "visible" to true if "visible" is defined without value', () => {
    document.body.innerHTML = '<ani-modal visible></ani-modal>';

    const aniModal = <Modal>document.querySelector(modalTagName);

    expect(aniModal.getAttribute('visible')).toBe('true');
  });

  test('should set "visible" to true if "visible" is true', () => {
    document.body.innerHTML = '<ani-modal visible="true"></ani-modal>';

    const aniModal = <Modal>document.querySelector(modalTagName);

    expect(aniModal.getAttribute('visible')).toBe('true');
  });

  test('should set "visible" to false if "visible" is false', () => {
    document.body.innerHTML = '<ani-modal visible="false"></ani-modal>';

    const aniModal = <Modal>document.querySelector(modalTagName);

    expect(aniModal.getAttribute('visible')).toBe('false');
  });
});
