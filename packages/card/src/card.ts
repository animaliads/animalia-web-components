import { transformBooleanProperties, Component } from '@animaliads/common';

import { cardStyle } from './style';

@Component('ani-card')
export default class Card extends HTMLElement {
  shadow: ShadowRoot;
  cardElement: HTMLDivElement;

  get type(): string {
    return this.getAttribute('type');
  }

  get href(): string {
    return this.getAttribute('href');
  }

  get selected(): string {
    const selected = this.getAttribute('selected');
    return transformBooleanProperties(selected);
  }

  set selected(value: string) {
    this.setAttribute('selected', value);
  }

  static get observedAttributes(): Array<string> {
    return ['type', 'href', 'selected'];
  }

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback(): void {
    this.createCard(this.type);

    this.addEventListener('click', this.onClick);
    this.addEventListener('keydown', this.handleKeyDown);

    this.updateAttributes();
  }

  disconnectedCallback(): void {
    this.removeEventListener('click', this.onClick);
    this.removeEventListener('keydown', this.handleKeyDown);
  }

  render(): void {
    this.shadow.innerHTML = `
        <style>${cardStyle}</style>
        <div class="ani-card">
          <slot></slot>
        </div>
    `;

    this.cardElement = this.shadow.querySelector('.ani-card');
  }

  private onClick() {
    if (this.type === 'selectable') {
      this.toggleSelected();
    }
  }

  private handleKeyDown(event) {
    if (this.type === 'selectable' && event.keyCode === 32) {
      this.toggleSelected();
    }
  }

  private toggleSelected() {
    this.selected = this.selected === 'true' ? 'false' : 'true';
  }

  attributeChangedCallback(
    attrName: string,
    _oldValue: string,
    newValue: string
  ): void {
    this.updateAttributes(attrName, newValue);
  }

  private updateAttributes(attrName?, newValue?) {
    if (attrName === 'type') {
      this.createCard(newValue);
    }

    if (attrName === 'selected') {
      this.setSelectStatus();
    }
    if (attrName === 'href') {
      this.setHrefLink();
    }
  }

  private createCard(type) {
    if (type === 'selectable') {
      this.selectableCard();
      return;
    }
    if (type === 'link') {
      this.linkCard();
      return;
    }
    this.render();
    return;
  }

  private selectableCard() {
    this.render();
    this.setSelectStatus();

    this.cardElement.classList.add('card-interactive');
    this.cardElement.setAttribute('role', 'radio');
    this.cardElement.setAttribute('tabindex', '0');
  }

  private setSelectStatus() {
    this.cardElement.setAttribute('aria-checked', this.selected);
  }

  private setHrefLink() {
    this.cardElement.setAttribute('href', this.href);
  }

  private linkCard() {
    this.shadow.innerHTML = `
      <style>${cardStyle}</style>
      <a class="ani-card card-interactive" href="${this.href}">
        <slot></slot>
      </a>
    `;
    this.cardElement = this.shadow.querySelector('.ani-card');
  }
}
