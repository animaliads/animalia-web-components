import { Component } from '@animaliads/common';

import { svgs } from './svg';
import { IconSize } from './enums/icon-size.enum';
import { style } from './style';

@Component('ani-icon')
export default class Icon extends HTMLElement {
  shadow: ShadowRoot;

  get name(): string {
    return this.getAttribute('name');
  }

  get size(): string {
    return this.getAttribute('size');
  }

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes(): Array<string> {
    return ['size', 'name'];
  }

  connectedCallback(): void {
    this.render();
  }

  attributeChangedCallback(): void {
    this.render();
  }

  private render(): void {
    this.setDefaultSize();

    this.shadow.innerHTML = `
      <style>${style}</style>
      ${svgs[this.name]}
    `;
  }

  private setDefaultSize() {
    const includesSize = Object.values(IconSize).includes(
      <IconSize>this.getAttribute('size')
    );

    if (!this.hasAttribute('size') || !includesSize) {
      this.setAttribute('size', IconSize.medium);
    }
  }
}
