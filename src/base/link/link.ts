export default class Link extends HTMLElement {
  shadow;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback(): void {
    this.render();
  }

  render(): void {
    this.shadow.innerHTML = `
        <a href="">link<a/>
    `;
  }
}

customElements.define('wcpr-link', Link);
