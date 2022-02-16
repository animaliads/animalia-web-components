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
            <ani-button class="modal-close" kind="tertiary">&times;</ani-button>
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
