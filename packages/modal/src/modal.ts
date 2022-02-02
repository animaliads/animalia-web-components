import { Component, KeyCode } from '@animaliads/common';

import { modalStyle } from './style';
import { ModalSize } from './enums/modal-size.enum';

@Component('ani-modal')
export default class Modal extends HTMLElement {
  shadow: ShadowRoot;
  modalElement: HTMLDivElement;

  get title(): string {
    const title = this.getAttribute('title');
    return !title || title === 'null' ? '' : title;
  }

  get size(): string {
    const size = this.getAttribute('size');
    return !size || size === 'null' ? ModalSize.medium : size;
  }

  static get observedAttributes(): Array<string> {
    return ['title', 'size'];
  }

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback(): void {
    // this.render();

    this.setDefaultSize();
    this.setDefaultHidden();

    this.onClickX();
    this.onClickOut();
    this.handleKeyDown();
  }

  disconnectedCallback(): void {}

  attributeChangedCallback(
    name: string,
    oldValue: string,
    newValue: string
  ): void {
    console.log(`Attribute ${name} changed from ${oldValue} to ${newValue}`);

    this.updateAttributes(name, newValue);
  }

  open(): void {
    this.hidden = false;
  }

  close(): void {
    this.hidden = true;
  }

  /**
   * Fecha a modal ao clicar no X
   */
  private onClickX(): void {
    this.modalElement
      .querySelector('.ani-modal-close')
      .addEventListener('click', () => {
        this.close();
      });
  }

  /**
   * Fecha a modal ao clicar fora do modal
   */
  private onClickOut(): void {
    this.modalElement
      .querySelector('.ani-modal-overlay')
      .addEventListener('click', () => {
        this.close();
      });
  }

  /**
   * Fecha a modal ao pressionar ESC
   */
  private handleKeyDown() {
    document.addEventListener('keydown', (event: { keyCode: number }) => {
      if (event.keyCode === KeyCode.ESCAPE) {
        this.close();
      }
    });
  }

  private updateAttributes(name?: string, newValue?: string): void {
    if (!this.hidden) {
      this.render();
    } else {
      this.shadow.innerHTML = '';
    }

    // if (name === 'hidden' && this.shadow) {
    //   if (newValue === 'true') {
    //     this.render();
    //   } else {
    //     this.shadow.innerHTML = '';
    //   }
    // }
  }

  private setDefaultSize() {
    const includesSize = Object.values(ModalSize).includes(
      <ModalSize>this.getAttribute('size')
    );

    if (!this.hasAttribute('size') || !includesSize) {
      this.setAttribute('size', ModalSize.medium);
    }
  }

  private setDefaultHidden() {
    if (!this.hidden) {
      this.hidden = true;
    }
  }

  private render(): void {
    this.shadow.innerHTML = `
      <style>${modalStyle}</style>
      <div class="ani-modal ani-modal--${this.size}">
        <div class="ani-modal-overlay"></div>
        <div class="ani-modal-base">
          <header class="ani-modal-header">
            <div class="ani-modal-title">${this.title}</div>
            <ani-button class="ani-modal-close" kind="tertiary">
              <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.41413 6.62989L11.7071 2.33689C12.0981 1.94589 12.0981 1.31389 11.7071 0.922889C11.3161 0.531889 10.6841 0.531889 10.2931 0.922889L6.00013 5.21589L1.70713 0.922889C1.31613 0.531889 0.684128 0.531889 0.293128 0.922889C-0.0978721 1.31389 -0.0978721 1.94589 0.293128 2.33689L4.58613 6.62989L0.293128 10.9229C-0.0978721 11.3139 -0.0978721 11.9459 0.293128 12.3369C0.488128 12.5319 0.744128 12.6299 1.00013 12.6299C1.25613 12.6299 1.51213 12.5319 1.70713 12.3369L6.00013 8.04389L10.2931 12.3369C10.4881 12.5319 10.7441 12.6299 11.0001 12.6299C11.2561 12.6299 11.5121 12.5319 11.7071 12.3369C12.0981 11.9459 12.0981 11.3139 11.7071 10.9229L7.41413 6.62989Z"
                  fill="#4545A1"
                />
              </svg>
            </ani-button>
          </header>
          <section class="ani-modal-content">
            <slot name="content"></slot>
          </section>
          <footer class="ani-modal-footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `;

    this.modalElement = this.shadow.querySelector('.ani-modal');
  }
}
