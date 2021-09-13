import { KeyCode } from './enums/key-code.enum';
import { style } from './style';

const checkIcon = `
<svg width="12" height="10" viewBox="0 0 12 10" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 5.32608L4.55114 9.5L12 2.10491L10.3864 0.5L4.55114 6.30151L1.60227 3.49433L0 5.32608Z"/>
</svg>`;

export default class Switch extends HTMLElement {
  shadow: ShadowRoot;
  switchElement: HTMLElement;
  ariaAttr = ['checked', 'disabled'];

  get checked(): string {
    const checked = this.getAttribute('checked');
    return transformBooleanProperties(checked);
  }

  set checked(value: string) {
    this.setAttribute('checked', value);
  }

  get disabled(): string {
    const disabled = this.getAttribute('disabled');
    return transformBooleanProperties(disabled);
  }

  get checkedIcon(): string {
    return checkIcon || '';
  }

  static get observedAttributes(): Array<string> {
    return ['checked', 'disabled'];
  }

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback(): void {
    this.render();

    this.switchElement = this.shadow.querySelector('[role="switch"]');

    this.addEventListener('click', this.onClick);
    this.addEventListener('keydown', this.handleKeyDown);
  }

  disconnectedCallback(): void {
    this.removeEventListener('click', this.onClick);
    this.removeEventListener('keydown', this.handleKeyDown);
  }

  attributeChangedCallback(
    attr: string,
    oldValue: string,
    newValue: string
  ): void {
    if (!this.switchElement) {
      return;
    }

    const property = this.ariaAttr.includes(attr) ? `aria-${attr}` : attr;

    this.switchElement.setAttribute(property, newValue);
    // this.switchElement.innerHTML = this.checkedIcon;
  }

  render(): void {
    this.shadow.innerHTML = `
      <style>${style}</style>
      <slot></slot>
      <div
        role="switch"
        class="container"
        aria-checked="${this.checked}"
        aria-disabled="${this.disabled}"
        tabindex="0"
      >
        <div class="toggle">
          ${this.checkedIcon}
        </div>
      </div>
    `;
  }

  private onClick(event) {
    if (this.disabled === 'false') {
      this.toggleSwitch();
    } else {
      event.preventDefault();
    }
  }

  private handleKeyDown(event) {
    const keyCode = event.keyCode;

    if (this.disabled === 'false' && keyCode === KeyCode.SPACE) {
      this.toggleSwitch();
    }
  }

  private toggleSwitch() {
    this.checked = this.checked === 'true' ? 'false' : 'true';
  }
}

customElements.define('ani-switch', Switch);

function transformBooleanProperties(value: string) {
  if (value === '') {
    return 'true';
  } else if (value === null) {
    return 'false';
  }

  return value;
}
