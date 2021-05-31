import { linkStyle } from './link.style';

export default class Link extends HTMLElement {
  shadow: ShadowRoot;

  get url(): string {
    return this.getAttribute('url');
  }

  get openNewTab(): string {
    const isOpenNewTab = this.getAttribute('open-new-tab');
    return transformBooleanProperties(isOpenNewTab);
  }

  set openNewTab(value: string) {
    this.openNewTab = value;
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

customElements.define('ani-link', Link);

function transformBooleanProperties(value: string) {
  if (value === '') {
    return 'true';
  } else if (value === null) {
    return 'false';
  }

  return value;
}
