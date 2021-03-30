import { style } from './button.style';

export class Button extends HTMLElement {
  shadow: ShadowRoot;
  clickEvent: Event;
  buttonElement: HTMLElement;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });

    this.clickEvent = document.createEvent('Event');
    this.clickEvent.initEvent('onClick', true, true);

    this.addEventListener('click', this.onClick);
  }

  get type(): string {
    return this.getAttribute('type');
  }

  get disabled(): string {
    const disabled = this.getAttribute('disabled');
    return disabled === '' ? 'true' : disabled;
  }

  static get observedAttributes(): Array<string> {
    return ['type', 'disabled'];
  }

  connectedCallback(): void {
    this.render();
    this.setAccessibility();
  }

  attributeChangedCallback(): void {
    this.render();
    this.setAccessibility();
  }

  private onClick(): void {
    if (this.disabled !== 'true') {
      this.dispatchEvent(this.clickEvent);
    }
  }

  private setAccessibility() {
    this.buttonElement = this.shadow.getElementById('buttonElement');
    this.buttonElement.setAttribute('aria-disabled', this.disabled);
  }

  private render(): void {
    this.shadow.innerHTML = `
            <style>${style}</style>
            <button id="buttonElement">
                <slot></slot>
            </button>
        `;
  }
}

customElements.define('pods-button', Button);
