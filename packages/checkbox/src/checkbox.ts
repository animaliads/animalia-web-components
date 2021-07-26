import { CheckboxSize } from './enums/checkbox-size.enum';
import { checkboxStyle } from './checkbox.style';

export default class Checkbox extends HTMLElement {
  shadow: ShadowRoot;

  checkboxElement: HTMLElement;

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

  get size(): string {
    const size = this.getAttribute('size');
    return !size || size === 'null' ? CheckboxSize.medium : size;
  }

  static get observedAttributes(): Array<string> {
    return ['checked', 'disabled', 'size'];
  }

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback(): void {
    this.render();

    this.addEventListener('click', this.onClick);
  }

  attributeChangedCallback(): void {
    this.render();
  }

  private onClick(event) {
    if (this.disabled === 'false') {
      this.checked = this.checked === 'true' ? 'false' : 'true';
    } else {
      event.preventDefault();
    }
  }

  render(): void {
    this.shadow.innerHTML = `
        <style>${checkboxStyle}</style>
        <label>
          <input
            type="checkbox"
            id="checkboxElement"
            size="${this.size}"
            ${this.checked === 'true' ? 'checked' : ''}
          >
          <slot></slot>
        </label>
    `;

    this.setAccessibility();
    this.setDefaultSize();
  }

  private setDefaultSize() {
    const includesSize = Object.values(CheckboxSize).includes(
      <CheckboxSize>this.getAttribute('size')
    );

    if (!this.hasAttribute('size') || !includesSize) {
      this.setAttribute('size', CheckboxSize.medium);
    }
  }

  private setAccessibility() {
    this.checkboxElement = this.shadow.getElementById('checkboxElement');

    this.checkboxElement.setAttribute('aria-disabled', this.disabled);
  }
}

customElements.define('ani-checkbox', Checkbox);

function transformBooleanProperties(value: string) {
  if (value === '') {
    return 'true';
  } else if (value === null) {
    return 'false';
  }

  return value;
}
