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

  focusableElements: Array<HTMLElement> = [];
  firstFocusableElement;
  lastFocusableElement;

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
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback(): void {
    this.setDefaultSize();
    this.setDefaultVisible();

    this.onClickX();
    this.onClickOut();

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
    this.updateAttributes(name, newValue);
  }

  open(): void {
    this.setAttribute('visible', 'true');
    this.setFocus();
  }

  close(): void {
    this.setAttribute('visible', 'false');
  }

  /**
   * Define os elementos que podem receber foco
   * e identifica o primeiro e o ultimo elemento;
   */
  private setFocus(): void {
    if (this.focusableElements?.length) {
      this.focusableElements = [];
    }

    if (this.shadow) {
      this.findFocusableElement(this.shadow.querySelectorAll('*'));
    }

    this.findFocusableElement(this.querySelectorAll('*'));

    this.firstFocusableElement = this.focusableElements[0];
    this.lastFocusableElement =
      this.focusableElements[this.focusableElements.length - 1];

    this.addEventListener('keydown', event => {
      const isTabbed = event.key === 'Tab' || event.code === '9';

      if (!isTabbed) {
        return;
      }

      if (event.shiftKey) {
        if (
          document.activeElement === this.firstFocusableElement ||
          document.activeElement?.firstFocusableElement ===
            this.firstFocusableElement
        ) {
          this.lastFocusableElement?.shadow
            ? this.lastFocusableElement.setFocus()
            : (this.lastFocusableElement as HTMLElement).focus();
          event.preventDefault();
        }
      } else {
        if (document.activeElement === this.lastFocusableElement) {
          this.firstFocusableElement?.shadow
            ? this.firstFocusableElement.setFocus()
            : (this.firstFocusableElement as HTMLElement).focus();
          event.preventDefault();
        }
      }
    });

    this.firstFocusableElement?.shadow
      ? this.firstFocusableElement.setFocus()
      : (this.firstFocusableElement as HTMLElement).focus();
  }

  private isCustomElement(el) {
    const isAttr = el.getAttribute('is');
    return el.localName.includes('-') || (isAttr && isAttr.includes('-'));
  }

  private findFocusableElement(nodes): void {
    const nativeElements = [
      'a[href], button, details, input, select, textarea, [tabindex]:not([tabindex="-1"])',
    ];

    for (let i = 0, el; (el = nodes[i]); ++i) {
      if (this.isCustomElement(el) || el.matches(nativeElements)) {
        this.focusableElements.push(el);
      }
    }
  }

  private onClickX(): void {
    this.shadow.querySelector('.modal-close').addEventListener('click', () => {
      this.close();
    });
  }

  private onClickOut(): void {
    this.shadow
      .querySelector('.modal-overlay')
      .addEventListener('click', () => {
        this.close();
      });
  }

  private handleKeyDown(event: { keyCode: number }): void {
    if (event.keyCode === KeyCode.ESCAPE) {
      this.close();
    }
  }

  private updateAttributes(name?: string, newValue?: string): void {
    if (name === 'visible' && this.shadow) {
      if (newValue === 'true') {
        this.render();
        this.setWaiAriaDialog();
      } else {
        this.shadow.innerHTML = '';
      }
    }
  }

  private setDefaultSize(): void {
    const includesSize = Object.values(ModalSize).includes(
      <ModalSize>this.getAttribute('size')
    );

    if (!this.hasAttribute('size') || !includesSize) {
      this.setAttribute('size', ModalSize.medium);
    }
  }

  private setDefaultVisible(): void {
    const visible = this.getAttribute('visible');

    if (!this.hasAttribute('visible') || !visible === true) {
      this.setAttribute('visible', 'false');
    }
  }

  private setWaiAriaDialog() {
    this.setAttribute('role', 'dialog');
    this.setAttribute('aria-labelledby', 'title');
    this.setAttribute('aria-describedby', 'description');
  }

  private render(): void {
    this.shadow.innerHTML = `
      <style>${modalStyle}</style>
      <div class="modal" size="${this.size}" title="${this.title}" role="dialog" aria-labelledby="title" aria-describedby="description">
        <div class="modal-overlay" tabindex="-1"></div>
        <div class="modal-dialog">
          <header class="modal-header">
            <h2 class="modal-title" id="title">
              <slot name="title"></slot>
            </h2>
            <ani-button  class="modal-close" kind="tertiary"><span aria-label="Fechar janela modal"><svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.41413 6.37L11.7071 2.077C12.0981 1.686 12.0981 1.054 11.7071 0.663001C11.3161 0.272001 10.6841 0.272001 10.2931 0.663001L6.00013 4.956L1.70713 0.663001C1.31613 0.272001 0.684128 0.272001 0.293128 0.663001C-0.0978721 1.054 -0.0978721 1.686 0.293128 2.077L4.58613 6.37L0.293128 10.663C-0.0978721 11.054 -0.0978721 11.686 0.293128 12.077C0.488128 12.272 0.744128 12.37 1.00013 12.37C1.25613 12.37 1.51213 12.272 1.70713 12.077L6.00013 7.784L10.2931 12.077C10.4881 12.272 10.7441 12.37 11.0001 12.37C11.2561 12.37 11.5121 12.272 11.7071 12.077C12.0981 11.686 12.0981 11.054 11.7071 10.663L7.41413 6.37Z" fill="#4545A1"/>
            </svg></span>
            </ani-button>
          </header>
          <section class="modal-body" id="description">
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
