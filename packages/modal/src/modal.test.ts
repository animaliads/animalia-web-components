import './modal';
import { Modal } from './modal';

import { Button } from '@animaliads/ani-button';

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
   * get title()
   */
  test('get value from property "title"', () => {
    document.body.innerHTML = '<ani-modal title="Title"></ani-modal>';

    const aniModal = <Modal>document.querySelector(modalTagName);

    expect(aniModal['title']).toBe('Title');
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

  test('should set "size" to small if "size" is defined with small', () => {
    document.body.innerHTML = '<ani-modal size="small"></ani-modal>';

    const aniModal = <Modal>document.querySelector(modalTagName);

    expect(aniModal.getAttribute('size')).toBe('small');
  });

  /**
   * setDefaultVisibilty()
   */

  /**
   * open()
   */
  xtest('should open modal', () => {
    document.body.innerHTML = '<ani-modal></ani-modal>';

    const aniModal = <Modal>document.querySelector(modalTagName);

    aniModal.open();

    expect(aniModal.hidden).toBe(false);
  });

  /**
   * close
   */
  test('should close modal', () => {
    document.body.innerHTML = '<ani-modal visible></ani-modal>';

    const aniModal = <Modal>document.querySelector(modalTagName);

    // aniModal['focusedElementBeforeOpen'] = document.body;

    aniModal.close();

    // expect(aniModal.getAttribute('visible')).toBe('false');
    expect(aniModal.hidden).toBe(true);
  });

  /**
   * onClickX()
   */
  test('should close modal on click button "X"', () => {
    document.body.innerHTML = '<ani-modal></ani-modal>';

    const onClickX = jest.fn();
    const aniModal = <Modal>document.querySelector(modalTagName);

    aniModal.open();

    const modalClose =
      getShadowRoot(modalTagName).querySelector<Button>('.modal-close');

    modalClose.addEventListener('click', onClickX);
    modalClose.click();

    expect(onClickX).toHaveBeenCalled();
    // expect(aniModal.getAttribute('visible')).toBe('false');
    expect(aniModal.hidden).toBe(true);
  });

  /**
   * onClickOverlay()
   */
  test('should close modal on click modal overlay', () => {
    document.body.innerHTML = '<ani-modal></ani-modal>';

    const onClickOverlay = jest.fn();
    const aniModal = <Modal>document.querySelector(modalTagName);

    aniModal.open();

    const modalOverlay =
      getShadowRoot(modalTagName).querySelector<HTMLElement>('.modal-overlay');

    modalOverlay.addEventListener('click', onClickOverlay);
    modalOverlay.click();

    expect(onClickOverlay).toHaveBeenCalled();
    // expect(aniModal.getAttribute('visible')).toBe('false');
    expect(aniModal.hidden).toBe(true);
  });

  /**
   * handlerKeyDownEscape()
   */
  test('should close modal if ESCAPE key is pressed', () => {
    document.body.innerHTML = '<ani-modal></ani-modal>';

    const aniModal = <Modal>document.querySelector(modalTagName);

    aniModal.open();

    const event = new KeyboardEvent('keydown', { keyCode: 27 });

    aniModal.dispatchEvent(event);

    // expect(aniModal.getAttribute('visible')).toBe('false');
    expect(aniModal.hidden).toBe(true);
  });

  /**
   * setFocus()
   */
  test('should find focusable elements', () => {
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

    expect(aniModal.focusableElements.length).toBe(5);
  });

  /**
   * clearFocusableElements()
   */
  test('should clear focusable elements', () => {
    document.body.innerHTML = '<ani-modal></ani-modal>';

    const aniModal = <Modal>document.querySelector(modalTagName);
    aniModal.open();

    expect(aniModal.focusableElements).toHaveLength(1);

    aniModal['clearFocusableElements']();

    expect(aniModal.focusableElements).toHaveLength(0);
  });

  // test('should focus on focusedElementBeforeOpen', () => {
  //   document.body.innerHTML = '<ani-modal></ani-modal>';

  //   const aniModal = <Modal>document.querySelector(modalTagName);

  //   aniModal.focusedElementBeforeOpen = document.body;

  //   aniModal.close();

  //   expect(aniModal.focusedElementBeforeOpen).toBe(document.body);
  // });

  /**
   * trapFocusableElements()
   */
  test('trapFocusableElements just one element', () => {
    document.body.innerHTML = '<ani-modal></ani-modal>';

    const aniModal = <Modal>document.querySelector(modalTagName);

    aniModal.open();

    expect(aniModal.focusableElements.length).toBe(1);

    const modalClose =
      getShadowRoot(modalTagName).querySelector<HTMLElement>('.modal-close');
    const event = new KeyboardEvent('keydown', { keyCode: 9 });

    // aniModal.dispatchEvent(event);

    // expect(modalClose).focus();
  });

  test('should render element "modal-icon" if "slot=icon" is used', () => {
    document.body.innerHTML = `
      <ani-modal>
        <div slot="icon">icon</div>
      </ani-modal>
    `;

    const aniModal = <Modal>document.querySelector(modalTagName);

    aniModal.open();

    const modalIcon =
      getShadowRoot(modalTagName).querySelector<HTMLElement>('.modal-icon');

    expect(modalIcon).toBeTruthy();
  });
});
