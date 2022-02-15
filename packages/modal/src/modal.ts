import {
  Component,
  KeyCode,
  transformBooleanProperties,
} from '@animaliads/common';

import { ModalSize } from './enums/modal-size.enum';

import { modalStyle } from './style';

@Component('ani-modal')
export class Modal extends HTMLElement {
  shadow: ShadowRoot;
  modalElement: HTMLDivElement;
  clickEvent: Event;

  get size(): string {
    const size = this.getAttribute('size');
    return !size || size === 'null' ? ModalSize.medium : size;
  }

  get title(): string {
    const title = this.getAttribute('title');
    return !title || title === 'null' ? '' : title;
  }

  get visible(): string {
    const visible = this.getAttribute('visible');
    return transformBooleanProperties(visible);
  }

  static get observedAttributes(): Array<string> {
    return ['size', 'title', 'visible'];
  }

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open', delegatesFocus: true });

    this.clickEvent = new Event('teste', {
      bubbles: false,
      cancelable: true,
      composed: true,
    });

    this.addEventListener('focus', event => {
      console.log('teste', event);

      event.preventDefault();
    });
  }

  connectedCallback(): void {
    this.setDefaultSize();
    // this.setDefaultHidden();
    this.setDefaultVisible();

    // this.onClickX();
    // this.onClickOut();

    this.addEventListener('keydown', this.handleKeyDown);
  }

  disconnectedCallback(): void {
    this.removeEventListener('keydown', this.handleKeyDown);
  }

  attributeChangedCallback(
    name: string,
    oldValue?: string,
    newValue?: string
  ): void {
    console.log(`Attribute ${name} changed from ${oldValue} to ${newValue}`);

    this.updateAttributes(name, newValue);
  }

  open(): void {
    // this.hidden = false;
    this.setAttribute('visible', 'true');
    this.setFocus();
  }

  close(): void {
    // this.hidden = true;
    this.setAttribute('visible', 'false');
  }

  /**
   * Define os elementos que podem receber foco
   * e identifica o primeiro e o ultimo elemento;
   */
  private setFocus(): void {
    const focusableElements = this.querySelectorAll(
      'a[href], button, details, input, select, textarea, [tabindex]:not([tabindex="-1"]), ani-button, ani-textfield'
    );

    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement =
      focusableElements[focusableElements.length - 1];

    this.addEventListener('keydown', event => {
      const isTabbed = event.key === 'Tab' || event.code === '9';

      if (!isTabbed) {
        return;
      }

      if (event.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          (lastFocusableElement as HTMLElement).focus();
          event.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusableElement) {
          (firstFocusableElement as HTMLElement).focus();
          event.preventDefault();
        }
      }
    });

    (firstFocusableElement as HTMLElement).focus();
  }

  /**
   * Fecha a modal ao clicar no X
   */
  private onClickX(): void {
    this.shadow.querySelector('.modal-close').addEventListener('click', () => {
      this.close();
    });
  }

  /**
   * Fecha a modal ao clicar fora do modal
   */
  private onClickOut(): void {
    this.shadow
      .querySelector('.modal-overlay')
      .addEventListener('click', () => {
        this.close();
      });
  }

  /**
   * Fecha a modal ao pressionar ESC
   */
  private handleKeyDown(event: { keyCode: number }): void {
    if (event.keyCode === KeyCode.ESCAPE) {
      this.close();
    }
  }

  private updateAttributes(name?: string, newValue?: string): void {
    // if (!this.hidden) {
    //   this.render();
    // } else {
    //   this.shadow.innerHTML = '';
    // }

    if (name === 'visible' && this.shadow) {
      if (newValue === 'true') {
        this.render();
      } else {
        this.shadow.innerHTML = '';
      }
    }

    this.setWaiAriaDialog();
  }

  private setDefaultSize(): void {
    const includesSize = Object.values(ModalSize).includes(
      <ModalSize>this.getAttribute('size')
    );

    if (!this.hasAttribute('size') || !includesSize) {
      this.setAttribute('size', ModalSize.medium);
    }
  }

  private setDefaultHidden(): void {
    if (!this.hidden) {
      this.hidden = true;
    }
  }

  private setWaiAriaDialog() {
    this.modalElement.setAttribute('role', 'dialog');
    this.modalElement.setAttribute('aria-labelledby', 'title');
    this.modalElement
      .querySelector('.modal-body')
      .setAttribute('aria-describedby', 'description');
  }

  private setDefaultVisible(): void {
    const visible = this.getAttribute('visible');

    if (!this.hasAttribute('visible') || !visible === true) {
      this.setAttribute('visible', 'false');
    }
  }

  private render(): void {
    this.shadow.innerHTML = `
      <style>${modalStyle}</style>
      <div class="modal" size="${this.size}" title="${this.title}">
        <div class="modal-overlay"></div>
        <div class="modal-dialog">
          <header class="modal-header">
            <h2 class="modal-title" id="title">
              ${
                this.title && this.title !== null
                  ? this.title
                  : '<slot name="title"></slot>'
              }
            </h2>
            <ani-button class="modal-close" kind="tertiary">
              <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.41413 6.62989L11.7071 2.33689C12.0981 1.94589 12.0981 1.31389 11.7071 0.922889C11.3161 0.531889 10.6841 0.531889 10.2931 0.922889L6.00013 5.21589L1.70713 0.922889C1.31613 0.531889 0.684128 0.531889 0.293128 0.922889C-0.0978721 1.31389 -0.0978721 1.94589 0.293128 2.33689L4.58613 6.62989L0.293128 10.9229C-0.0978721 11.3139 -0.0978721 11.9459 0.293128 12.3369C0.488128 12.5319 0.744128 12.6299 1.00013 12.6299C1.25613 12.6299 1.51213 12.5319 1.70713 12.3369L6.00013 8.04389L10.2931 12.3369C10.4881 12.5319 10.7441 12.6299 11.0001 12.6299C11.2561 12.6299 11.5121 12.5319 11.7071 12.3369C12.0981 11.9459 12.0981 11.3139 11.7071 10.9229L7.41413 6.62989Z" fill="#4545A1"/>
              </svg>
            </ani-button>
          </header>
          <section class="modal-body">
            <slot name="body"></slot>
          </section>
          <footer class="modal-footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `;

    this.modalElement = this.shadow.querySelector('.modal');
  }
}
