import { transformBooleanProperties, Component } from '@animaliads/common';

import { linkStyle } from './link.style';
import { linkStyleIe } from './link.style.ie';

@Component('ani-link')
export default class Link extends HTMLElement {
  shadow: ShadowRoot;

  get url(): string {
    return this.getAttribute('url');
  }

  get openNewTab(): string {
    const isOpenNewTab = this.getAttribute('open-new-tab');
    return transformBooleanProperties(isOpenNewTab);
  }

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback(): void {
    this.render();
  }

  static get observedAttributes(): Array<string> {
    return ['url', 'open-new-tab'];
  }

  attributeChangedCallback(): void {
    this.render();
  }

  render(): void {
    this.shadow.innerHTML = `
        <style>${linkStyleIe}</style>
        <style>${linkStyle}</style>
        <a href="${this.url}" target="${this.target}">
          <slot></slot>
        <a/>
    `;
  }

  private get target() {
    return this.openNewTab === 'true' ? '_blank' : '_self';
  }
}
