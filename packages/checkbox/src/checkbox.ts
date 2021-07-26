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

  render(): void {
    this.shadow.innerHTML = `
        <style>${checkboxStyle}</style>
        <label>
          <input
            type="checkbox"
            size="${this.size}"
            aria-disabled="${this.disabled}"
            ${this.checked === 'true' ? 'checked' : ''}
          >
          <slot></slot>
        </label>
    `;
    // this.shadow.innerHTML = `
    //     <style>${checkboxStyle}</style>
    //     <div role="checkbox"
    //         class="group_checkbox"
    //         aria-checked="false"
    //         tabindex="0">
    //           <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    //           <path d="M0 5.32608L4.55114 9.5L12 2.10491L10.3864 0.5L4.55114 6.30151L1.60227 3.49433L0 5.32608Z" fill="white"/>
    //           </svg>

    //         <slot></slot>
    //     </div>
    // `;
    this.setDefaultSize();
  }

  private onClick(event) {
    if (this.disabled === 'false') {
      this.checked = this.checked === 'true' ? 'false' : 'true';
    } else {
      event.preventDefault();
    }
  }

  private setDefaultSize() {
    const includesSize = Object.values(CheckboxSize).includes(
      <CheckboxSize>this.getAttribute('size')
    );

    if (!this.hasAttribute('size') || !includesSize) {
      this.setAttribute('size', CheckboxSize.medium);
    }
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
