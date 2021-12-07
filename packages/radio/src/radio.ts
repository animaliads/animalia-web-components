import { transformBooleanProperties, Component } from '@animaliads/common';

import { RadioSize } from './enums/radio-size.enum';
import { radioStyle } from './radio.style';

@Component('ani-radio')
export default class Radio extends HTMLElement {
  shadow: ShadowRoot;

  radioElement: HTMLElement;

  get checked(): string {
    const checked = this.getAttribute('checked');
    return transformBooleanProperties(checked);
  }

  get disabled(): string {
    const disabled = this.getAttribute('disabled');
    return transformBooleanProperties(disabled);
  }

  get size(): string {
    const size = this.getAttribute('size');
    return !size || size === 'null' ? RadioSize.medium : size;
  }

  static get observedAttributes(): Array<string> {
    return ['checked', 'disabled', 'size'];
  }

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });

    this.addEventListener('click', this.onClick);
  }

  connectedCallback(): void {
    this.render();

    this.setDefaultSize();
  }

  attributeChangedCallback(): void {
    this.render();

    this.setDefaultSize();
  }

  private onClick(event) {
    if (this.disabled === 'false') {
      this.setAttribute('checked', 'true');
    } else {
      event.preventDefault();
    }
  }

  render(): void {
    this.shadow.innerHTML = `
        <style>${radioStyle}</style>
        <label>
          <input
            type="radio"
            id="radioElement"
            size="${this.size}"
            ${this.checked === 'true' ? 'checked' : ''}
            ${this.disabled === 'true' ? 'disabled' : ''}
          >
          <slot></slot>
        </label>
    `;
  }

  private setDefaultSize() {
    const includesSize = Object.values(RadioSize).includes(
      <RadioSize>this.getAttribute('size')
    );

    if (!this.hasAttribute('size') || !includesSize) {
      this.setAttribute('size', RadioSize.medium);
    }
  }
}
