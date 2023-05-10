import { transformBooleanProperties, Component } from '@animaliads/common';

import { style } from './style';

@Component('ani-label')
export default class Label extends HTMLElement {
  shadow: ShadowRoot;

  get required(): string {
    const required = this.getAttribute('required');
    return transformBooleanProperties(required);
  }

  get requiredText(): string {
    const requiredText = this.getAttribute('required-text');
    return transformBooleanProperties(requiredText);
  }

  get disabled(): string {
    const disabled = this.getAttribute('disabled');
    return transformBooleanProperties(disabled);
  }

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback(): void {
    this.render();
  }

  static get observedAttributes(): Array<string> {
    return ['required', 'required-text', 'disabled'];
  }

  attributeChangedCallback(): void {
    this.render();
  }

  render(): void {
    const requiredValue =
      this.required === 'true' ? '(obrigatório)' : '(opcional)';
    const requiredLabel = this.requiredText === 'true' ? requiredValue : '';

    this.shadow.innerHTML = `
      <style>${style}</style>
      <label
        ${this.required === 'true' ? 'required' : ''}
        ${this.requiredText === 'true' ? 'required-text' : ''}
        ${this.disabled === 'true' ? 'disabled' : ''}
      >
        <slot></slot> ${requiredLabel}
      </label>
    `;
  }
}
