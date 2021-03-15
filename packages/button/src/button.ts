import { styleTest } from './button.style';

// import styles from './button.css';

export default class Button extends HTMLElement {
  shadow;
  click;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });

    this.click = document.createEvent('Event');
    this.click.initEvent('clickButton', true, true);
  }

  get label(): string {
    return this.getAttribute('label');
  }

  set label(value: string) {
    this.setAttribute('label', value);
  }

  get type(): string {
    return this.getAttribute('type') || 'default';
  }

  set type(value: string) {
    this.setAttribute('type', value);
  }

  get disabled(): string {
    return this.getAttribute('disabled') ? 'disabled' : '';
  }

  set disabled(value: string) {
    this.setAttribute('disabled', value);
  }

  static get observedAttributes(): Array<string> {
    return ['type', 'label', 'disabled'];
  }

  connectedCallback(): void {
    this.render();
  }

  onClick(): void {
    if (!this.disabled) {
      this.dispatchEvent(this.click);
    }
  }

  attributeChangedCallback(): void {
    this.render();
    this.addEventListener('click', this.onClick);
  }

  render(): void {
    this.shadow.innerHTML = `
            <style>${styleTest}</style>
            <button
                class="${this.type} ${this.disabled}">
                ${this.label}
            </button>
        `;
  }
}

customElements.define('pods-button', Button);
