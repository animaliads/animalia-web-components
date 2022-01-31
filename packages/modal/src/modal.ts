import { modalStyle } from './style';
import { ModalSize } from './enums/modal-size.enum';
import { Component } from '@animaliads/common';

@Component('ani-modal')
export default class Modal extends HTMLElement {
  shadow: ShadowRoot;
  modalElement: HTMLDivElement;

  get title(): string {
    return this.getAttribute(`title`);
  }

  get size(): string {
    const size = this.getAttribute('size');
    return !size || size === 'null' ? ModalSize.medium : size;
  }

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.closeByx();
    this.closeByOut();
  }

  private render(): void {
    this.shadow.innerHTML = `
        <style>${modalStyle}</style>
        <div id="modal" class="ani-modal">
            <div id="overlay" class="ani-modal-overlay"></div>
                <div class="ani-modal-base">
                    <div class="ani-modal-header">
                    <div class="ani-modal-title">${this.title}</div>
                    <ani-button id="close" class="ani-modal-close" kind="tertiary">&times;</ani-button>
                </div>
            <div class="ani-modal-content">
                <slot></slot>
            </div>
            <div class="ani-modal-footer"></div>
        </div>
    </div>
    `;
    this.modalElement = this.shadow.querySelector('.ani-modal');
  }

  open() {
    this.shadow
      .querySelector('.ani-modal')
      .setAttribute('style', 'display: block');
  }

  close() {
    this.shadow.querySelector('.ani-modal').removeAttribute('style');
  }

  private closeByx(): void {
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        this.close();
        //?se a tecla esc não foi pressionada em combinação com ctrl ou alt ou shift
        const isNotCombinedKey = !(
          event.ctrlKey ||
          event.altKey ||
          event.shiftKey
        );
        if (isNotCombinedKey) {
          this.close();
          console.log('tecla Esc foi pressionada sem nenhuma tecla a mais');
        }
      }
    });

    this.shadow.querySelector('#close').addEventListener('click', () => {
      this.close();
    });
  }

  //? Fecha modal ao clicar fora
  closeByOut(): void {
    this.shadow
      .querySelector('.ani-modal-overlay')
      .addEventListener('click', () => {
        this.close();
      });
  }
}
