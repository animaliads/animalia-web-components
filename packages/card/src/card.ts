import { Component } from '@animaliads/common';

import { cardStyle } from './style';

@Component('ani-card')
export default class Card extends HTMLElement {
  shadow: ShadowRoot;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback(): void {
    this.render();
  }

  render(): void {
    this.shadow.innerHTML = `
        <style>${cardStyle}</style>
        <div class="ani-card">
          <slot></slot>
        </div>
    `;
  }
}
