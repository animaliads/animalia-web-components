import { Component } from '@animaliads/common';

import { a11yElderly } from './svg/a11y-elderly';
import { style } from './style';

@Component('ani-icon')
export default class Icon extends HTMLElement {
  shadow: ShadowRoot;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback(): void {
    this.render();
  }

  private render(): void {
    this.shadow.innerHTML = `
      <style>${style}</style>
      ${a11yElderly}
    `;
  }
}
