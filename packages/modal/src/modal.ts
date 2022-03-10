import {
  Component,
  KeyCode,
  getShortBrowserLanguage,
} from '@animaliads/common';

import { modalSize } from './enums/modal-size.enum';
import { modalLiterals } from './literals/modal-literals';
import { modalStyle } from './modal.style';

@Component('ani-modal')
export class Modal extends HTMLElement {
  shadow: ShadowRoot;
  modalElement: HTMLDivElement;

  focusableElements = [];
  firstFocusableElement;
  lastFocusableElement;

  ariaLabel;

  get size(): string {
    const size = this.getAttribute('size');
    return !size || size === 'null' ? modalSize.medium : size;
  }

  get title(): string {
    const title = this.getAttribute('title');
    return !title || title === 'null' ? '' : title;
  }

  static get observedAttributes(): Array<string> {
    return ['size', 'title'];
  }

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback(): void {
    this.setDefaultSize();
    this.setDefaultVisibility();
    this.setLiterals();
  }

  attributeChangedCallback(
    name: string,
    _oldValue?: string,
    newValue?: string
  ): void {
    this.updateAttributes(name, newValue);
  }

  open(): void {
    this.hidden = false;
    this.render();
    this.onClickOverlay();
    this.onClickX();
    this.addEventListener('keydown', this.handlerKeyDownEscape);
    this.addEventListener('keydown', this.trapFocusableElements);
    this.lockScroll();
    this.setFocus();
  }

  close(): void {
    this.hidden = true;
    this.shadow.innerHTML = '';
    this.removeEventListener('keydown', this.handlerKeyDownEscape);
    this.removeEventListener('keydown', this.trapFocusableElements);
    this.lockScroll();
  }

  private setFocus(): void {
    this.clearFocusableElements();

    this.findFocusableElements(this.querySelectorAll('*'));

    this.firstFocusableElement =
      this.modalElement.querySelector('.modal-close');
    this.lastFocusableElement =
      this.focusableElements[this.focusableElements.length - 1];

    this.firstFocusableElement.setFocus();
  }

  private clearFocusableElements(): void {
    if (this.focusableElements.length) {
      this.focusableElements = [];
    }
  }

  private findFocusableElements(nodes): void {
    const elements =
      'a[href], button, details, input, select, textarea, [tabindex]:not([tabindex="-1"])';

    for (let i = 0, element; (element = nodes[i]); ++i) {
      if (element.localName.includes('-') || element.matches(elements)) {
        this.focusableElements.push(element);
      }
    }
  }

  private trapFocusableElements(event): void {
    if (event.key !== 'Tab') {
      return;
    }

    if (this.focusableElements.length === 1) {
      event.preventDefault();
    }

    if (event.shiftKey) {
      if (this.firstFocusableElement === this.shadow.activeElement) {
        this.lastFocusableElement.shadow
          ? this.lastFocusableElement.setFocus()
          : this.lastFocusableElement.focus();
        event.preventDefault();
      }
    } else {
      if (
        this.lastFocusableElement ===
        (this.shadow.activeElement || document.activeElement)
      ) {
        this.firstFocusableElement.setFocus();
        event.preventDefault();
      }
    }
  }

  private onClickX(): void {
    const modalClose = this.shadow.querySelector('.modal-close');
    modalClose.addEventListener('click', () => this.close());
  }

  private onClickOverlay(): void {
    const modalOverlay = this.shadow.querySelector('.modal-overlay');
    modalOverlay.addEventListener('click', () => this.close());
  }

  private lockScroll() {
    this.hidden
      ? document.body.style.removeProperty('overflow')
      : (document.body.style.overflow = 'hidden');

    if (document.body.getAttribute('style') === '') {
      document.body.removeAttribute('style');
    }
  }

  private handlerKeyDownEscape(event: { keyCode: number }): void {
    if (event.keyCode === KeyCode.ESCAPE) {
      this.close();
    }
  }

  private updateAttributes(name?: string, newValue?: string): void {
    if (name === 'size') {
      if (newValue in modalSize && this.modalElement) {
        this.modalElement.setAttribute('size', newValue);
      }
    }
  }

  private setDefaultSize(): void {
    const includesSize = Object.values(modalSize).includes(
      <modalSize>this.getAttribute('size')
    );

    if (!this.hasAttribute('size') || !includesSize) {
      this.setAttribute('size', modalSize.medium);
    }
  }

  private setDefaultVisibility(): void {
    this.hidden = true;
  }

  private setLiterals(): void {
    const lang = getShortBrowserLanguage();

    if (lang in modalLiterals) {
      this.ariaLabel = modalLiterals[lang].close;
    }
  }

  private render(): void {
    this.shadow.innerHTML = `
      <style>${modalStyle}</style>
      <div class="modal" size="${this.size}" title="${
      this.title
    }" role="dialog" aria-labelledby="title" aria-describedby="description">
        <div class="modal-overlay"></div>
        <div class="modal-dialog">
          <header class="modal-header" aria-hidden="true">
            ${
              this.querySelector('[slot="icon"]')
                ? '<div class="modal-icon"><slot name="icon"></slot></div>'
                : ''
            }
            <h2 class="modal-title" id="title" role="presentation">${
              this.title
            }</h2>
            <ani-button class="modal-close" kind="tertiary" aria-label="${
              this.ariaLabel
            }">
              <ani-icon name="close"></ani-icon>
            </ani-button>
          </header>
          <section class="modal-body" id="description">
            <slot name="body"></slot>
          </section>
          ${
            this.querySelector('[slot="footer"]')
              ? '<footer class="modal-footer" tabindex="-1" role="presentation"><slot name="footer"></slot></footer>'
              : ''
          }
        </div>
      </div>
    `;

    this.modalElement = this.shadow.querySelector('.modal');
  }
}
