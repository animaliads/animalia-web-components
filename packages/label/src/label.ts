import { Component } from '@animaliads/common';

@Component('ani-label')
export default class Label extends HTMLElement {
  shadow: ShadowRoot;

  get text(): string {
    return this.getAttribute('text');
  }

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback(): void {
    this.render();
  }

  static get observedAttributes(): Array<string> {
    return ['text'];
  }

  attributeChangedCallback(): void {
    this.render();
  }

  render(): void {
    this.shadow.innerHTML = `
      <label>${this.text}</label>
    `;
  }
}
