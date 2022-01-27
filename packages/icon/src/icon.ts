import { Component } from '@animaliads/common';

import { svgs } from './svg';

import { style } from './style';

@Component('ani-icon')
export default class Icon extends HTMLElement {
  shadow: ShadowRoot;

  get name(): string {
    return this.getAttribute('name');
  }

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
      ${svgs[this.name]}
    `;
  }
}
