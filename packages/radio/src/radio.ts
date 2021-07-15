import { RadioSize } from './enums/radio-size.enum';
import { radioStyle } from './radio.style';

export default class Radio extends HTMLElement {
  shadow: ShadowRoot;

  get checked(): string {
    const checked = this.getAttribute('checked');
    return transformBooleanProperties(checked);
  }

  get disabled(): string {
    const disabled = this.getAttribute('disabled');
    return transformBooleanProperties(disabled);
  }

  get group(): string {
    return this.getAttribute('group');
  }

  get size(): string {
    const size = this.getAttribute('size');
    return !size || size === 'null' ? RadioSize.medium : size;
  }

  get aniId(): string {
    return this.getAttribute('ani-id');
  }

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback(): void {
    this.render();

    this.setDefaultSize();
  }

  static get observedAttributes(): Array<string> {
    return ['checked', 'ani-id', 'group', 'disabled'];
  }

  attributeChangedCallback(): void {
    this.render();

    this.setDefaultSize();
  }

  render(): void {
    this.shadow.innerHTML = `
        <style>${radioStyle}</style>
        <input
          type="radio"
          id="customRadio"
          name="${this.group}"
          size="${this.size}"
          checked="${this.checked}"
        >
        <label for="customRadio">
          <slot></slot>
        </label>
    `;
  }

  private setDefaultSize() {
    const includesSize = Object.values(RadioSize).includes(
      <RadioSize>this.getAttribute('size')
    );

    if (!this.hasAttribute('size') || !includesSize) {
      this.setAttribute('size', RadioSize.medium);
    }
  }
}

customElements.define('ani-radio', Radio);

function transformBooleanProperties(value: string) {
  if (value === '') {
    return 'true';
  } else if (value === null) {
    return 'false';
  }

  return value;
}
