import { transformBooleanProperties, Component } from '@animaliads/common';

import '@animaliads/ani-icon';

import { CheckboxSize } from './enums/checkbox-size.enum';
import { KeyCode } from './enums/key-code.enum';
import { checkboxStyle } from './checkbox.style';

const mixedIcon = `
<svg width="12" height="3" viewBox="0 0 12 3" xmlns="http://www.w3.org/2000/svg">
  <rect y="0.5" width="12" height="2"/>
</svg>`;

const checkIcon = `
<svg width="12" height="10" viewBox="0 0 12 10" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 5.32608L4.55114 9.5L12 2.10491L10.3864 0.5L4.55114 6.30151L1.60227 3.49433L0 5.32608Z"/>
</svg>`;

@Component('ani-checkbox')
export default class Checkbox extends HTMLElement {
  shadow: ShadowRoot;
  checkboxElement: HTMLElement;

  get checked(): string {
    const checked = this.getAttribute('checked');
    return transformBooleanProperties(checked);
  }

  set checked(value: string) {
    this.setAttribute('checked', value);
  }

  get disabled(): string {
    const disabled = this.getAttribute('disabled');
    return transformBooleanProperties(disabled);
  }

  get checkedIcon(): string {
    const icons = {
      true: checkIcon,
      mixed: mixedIcon,
    };

    return icons[this.checked] || '';
  }

  get size(): string {
    const size = this.getAttribute('size');
    return !size || size === 'null' ? CheckboxSize.medium : size;
  }

  static get observedAttributes(): Array<string> {
    return ['checked', 'disabled', 'size'];
  }

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback(): void {
    this.render();

    this.checkboxElement = this.shadow.querySelector('.checkbox');

    this.addEventListener('click', this.onClick);
    this.addEventListener('keydown', this.handleKeyDown);

    this.updateProperties();
  }

  disconnectedCallback(): void {
    this.removeEventListener('click', this.onClick);
    this.removeEventListener('keydown', this.handleKeyDown);
  }

  attributeChangedCallback(): void {
    this.updateProperties();
  }

  render(): void {
    this.shadow.innerHTML = `
      <style>${checkboxStyle}</style>
      <span
        class="checkbox"
        role="checkbox"
        size="${this.size}">
        ${this.checkedIcon}
      </span>
      <slot></slot>
    `;
  }

  private updateProperties() {
    if (!this.checkboxElement) {
      return;
    }

    this.checkboxElement.setAttribute('aria-checked', this.checked);
    this.checkboxElement.setAttribute('aria-disabled', this.disabled);
    this.checkboxElement.setAttribute(
      'tabindex',
      this.disabled === 'true' ? '-1' : '0'
    );
    this.checkboxElement.innerHTML = this.checkedIcon;

    this.setDefaultSize();
  }

  private onClick(event) {
    if (this.disabled === 'false') {
      this.toggleCheckbox();
    } else {
      event.preventDefault();
    }
  }

  private handleKeyDown(event) {
    const keyCode = event.keyCode;

    if (this.disabled === 'false' && keyCode === KeyCode.SPACE) {
      this.toggleCheckbox();
    }
  }

  private toggleCheckbox() {
    this.checked = this.checked === 'true' ? 'false' : 'true';
  }

  private setDefaultSize() {
    const includesSize = Object.values(CheckboxSize).includes(
      <CheckboxSize>this.getAttribute('size')
    );

    if (!this.hasAttribute('size') || !includesSize) {
      this.setAttribute('size', CheckboxSize.medium);
    }
  }
}
