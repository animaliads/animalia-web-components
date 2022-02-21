import { assertTSTypeAliasDeclaration } from '@babel/types';
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

  /**
   * open()
   */
  test('should open modal', () => {
    document.body.innerHTML = '<ani-modal></ani-modal>';

    const aniModal = <Modal>document.querySelector(modalTagName);

    aniModal.open();

    expect(aniModal.getAttribute('visible')).toBe('true');
  });

  /**
   * close
   */
  test('should close modal', () => {
    document.body.innerHTML = '<ani-modal visible></ani-modal>';

    const aniModal = <Modal>document.querySelector(modalTagName);

    aniModal.close();

    document.activeElement;

    expect(aniModal.getAttribute('visible')).toBe('false');
  });

  /**
   * onClickX()
   */
  test('should close modal on click button "X"', () => {
    document.body.innerHTML = '<ani-modal visible></ani-modal>';

    const onClickX = jest.fn();
    const aniModal = <Modal>document.querySelector(modalTagName);
    const modalClose =
      getShadowRoot(modalTagName).querySelector<HTMLElement>('.modal-close');

    modalClose.addEventListener('click', onClickX);
    modalClose.click();

    expect(onClickX).toHaveBeenCalled();
    expect(aniModal.getAttribute('visible')).toBe('false');
  });

  /**
   * onClickOverlay()
   */
  test('should close modal on click modal overlay', () => {
    document.body.innerHTML = '<ani-modal visible></ani-modal>';

    const onClickOverlay = jest.fn();
    const aniModal = <Modal>document.querySelector(modalTagName);
    const modalOverlay =
      getShadowRoot(modalTagName).querySelector<HTMLElement>('.modal-overlay');

    modalOverlay.addEventListener('click', onClickOverlay);
    modalOverlay.click();

    expect(onClickOverlay).toHaveBeenCalled();
    expect(aniModal.getAttribute('visible')).toBe('false');
  });

  /**
   * handlerKeyDownEscape()
   */
  test('should close modal if ESCAPE key is pressed', () => {
    document.body.innerHTML = '<ani-modal visible></ani-modal>';

    const aniModal = <Modal>document.querySelector(modalTagName);
    const event = new KeyboardEvent('keydown', { keyCode: 27 });

    aniModal.dispatchEvent(event);

    expect(aniModal.getAttribute('visible')).toBe('false');
  });

  /**
   * setFocus()
   */
  test('should set focus in focusable elements', () => {
    document.body.innerHTML = `
      <ani-modal>
      <div slot="body">
        <input type="text" name="Text" placeholder="native-input1" />
        <ani-textfield placeholder="ani-textfield1"></ani-textfield>
      </div>
      <div slot="footer">
        <button id="cancelModal">Cancel</button>
        <ani-button id="closeModal" kind="primary">Close</ani-button>
      </div>
      </ani-modal>
    `;

    const aniModal = <Modal>document.querySelector(modalTagName);
    aniModal.open();
    aniModal['setFocus']();

    expect(aniModal.focusableElements.length).toBe(5);
  });

  /**
   * clearFocusableElements()
   */
  test('should clear focusable elements', () => {
    document.body.innerHTML = '<ani-modal></ani-modal>';

    const aniModal = <Modal>document.querySelector(modalTagName);
    aniModal.focusableElements = [
      'a[href], button, details, input, select, textarea, [tabindex]:not([tabindex="-1"])',
    ];

    aniModal.open();
    aniModal['clearFocusableElements']();

    expect(aniModal.focusableElements).toHaveLength(0);
  });
});
