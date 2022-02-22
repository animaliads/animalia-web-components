import {
  Component,
  KeyCode,
  transformBooleanProperties,
} from '@animaliads/common';

import { ModalSize } from './enums/modal-size.enum';

import { modalStyle } from './modal.style';

@Component('ani-modal')
export class Modal extends HTMLElement {
  shadow: ShadowRoot;
  modalElement: HTMLDivElement;

  focusedElementBeforeOpen;
  focusableElements = [];
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
    this.setAriaAttributes();
  }

  attributeChangedCallback(
    name: string,
    _oldValue?: string,
    newValue?: string
  ): void {
    this.updateAttributes(name, newValue);
  }

  open(): void {
    this.setAttribute('visible', 'true');
    this.lockScroll();
    this.focusedElementBeforeOpen = document.activeElement;
    this.setFocus();
  }

  close(): void {
    this.setAttribute('visible', 'false');
    this.lockScroll();
    this.focusedElementBeforeOpen?.shadow
      ? this.focusedElementBeforeOpen?.setFocus()
      : this.focusedElementBeforeOpen?.focus();
  }

  private setFocus(): void {
    this.clearFocusableElements();

    if (this.shadow) {
      this.findFocusableElements(this.shadow.querySelectorAll('*'));
    }

    this.findFocusableElements(this.querySelectorAll('*'));

    this.firstFocusableElement = this.focusableElements[0];
    this.lastFocusableElement =
      this.focusableElements[this.focusableElements.length - 1];

    this.addEventListener('keydown', event => {
      const isTabbed = event.key === 'Tab' || event.code === '9';

      if (!isTabbed) {
        return;
      }

      if (this.focusableElements.length === 1) {
        event.preventDefault();
      }

      if (event.shiftKey) {
        if (
          this.firstFocusableElement ===
          (this.shadow.activeElement || document.activeElement)
        ) {
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
          this.firstFocusableElement.shadow
            ? this.firstFocusableElement.setFocus()
            : this.firstFocusableElement.focus();
          event.preventDefault();
        }
      }
    });

    this.firstFocusableElement.shadow
      ? this.firstFocusableElement.setFocus()
      : this.firstFocusableElement.focus();
  }

  private isCustomElement(el) {
    const isAttr = el.getAttribute('is');
    return el.localName.includes('-') || (isAttr && isAttr.includes('-'));
  }

  private isNativeElement(el) {
    const nativeElements =
      'a[href], button, details, input, select, textarea, [tabindex]:not([tabindex="-1"])';
    return el.matches(nativeElements);
  }

  private findFocusableElements(nodes): void {
    for (let i = 0, el; (el = nodes[i]); ++i) {
      if (this.isCustomElement(el) || this.isNativeElement(el)) {
        this.focusableElements.push(el);
      }
    }
  }

  private clearFocusableElements(): void {
    if (this.focusableElements.length) {
      this.focusableElements = [];
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
    this.visible === 'true'
      ? (document.body.style.overflow = 'hidden')
      : document.body.style.removeProperty('overflow');

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
    if (name === 'visible' && this.shadow) {
      if (newValue === 'true') {
        this.render();
        this.onClickOverlay();
        this.onClickX();
        this.addEventListener('keydown', this.handlerKeyDownEscape);
      } else {
        this.shadow.innerHTML = '';
        this.removeEventListener('keydown', this.handlerKeyDownEscape);
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
    if (!this.hasAttribute('visible') || this.visible === 'false') {
      this.setAttribute('visible', 'false');
    } else {
      this.setAttribute('visible', 'true');
    }
  }

  private setAriaAttributes(): void {
    const ariaAttributes = {
      'aria-describedby': 'description',
      'aria-labelledby': 'title',
      'aria-modal': 'true',
      role: 'dialog',
    };

    Object.entries(ariaAttributes).forEach(([key, value]) => {
      if (!this.hasAttribute(key)) {
        this.setAttribute(key, value);
      }
    });
  }

  private render(): void {
    const modalIcon =
      '<span class="modal-icon"><slot name="icon"></slot></span>';
    const modalFooter =
      '<footer class="modal-footer" tabindex="-1" role="presentation"><slot name="footer"></slot></footer>';

    this.shadow.innerHTML = `
      <style>${modalStyle}</style>
      <div class="modal" size="${this.size}" title="${this.title}" visible="${
      this.visible
    }" role="dialog" aria-labelledby="title" aria-describedby="description">
        <div class="modal-overlay"></div>
        <div class="modal-dialog">
          <header class="modal-header" aria-hidden="true">
            ${this.querySelector('[slot="icon"]') ? modalIcon : ''}
            <h2 class="modal-title" id="title" role="presentation">${
              this.title
            }</h2>
            <ani-button class="modal-close" kind="tertiary">
              <span aria-label="Fechar janela modal">
                <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.41413 6.37L11.7071 2.077C12.0981 1.686 12.0981 1.054 11.7071 0.663001C11.3161 0.272001 10.6841 0.272001 10.2931 0.663001L6.00013 4.956L1.70713 0.663001C1.31613 0.272001 0.684128 0.272001 0.293128 0.663001C-0.0978721 1.054 -0.0978721 1.686 0.293128 2.077L4.58613 6.37L0.293128 10.663C-0.0978721 11.054 -0.0978721 11.686 0.293128 12.077C0.488128 12.272 0.744128 12.37 1.00013 12.37C1.25613 12.37 1.51213 12.272 1.70713 12.077L6.00013 7.784L10.2931 12.077C10.4881 12.272 10.7441 12.37 11.0001 12.37C11.2561 12.37 11.5121 12.272 11.7071 12.077C12.0981 11.686 12.0981 11.054 11.7071 10.663L7.41413 6.37Z" fill="#4545A1"/>
                </svg>
              </span>
            </ani-button>
          </header>
          <section class="modal-body" id="description">
            <slot name="body"></slot>
          </section>
          ${this.querySelector('[slot="footer"]') ? modalFooter : ''}
        </div>
      </div>
    `;

    this.modalElement = this.shadow.querySelector('.modal');
  }
}
