import { Field } from './field';
import { style } from './textarea.style';

export default class Textarea extends HTMLElement implements Field {
  shadow: ShadowRoot;

  get placeholder(): string {
    return this.getAttribute('placeholder') || '';
  }

  get label(): string {
    return this.getAttribute('label') || '';
  }

  get disabled(): string {
    const disabled = this.getAttribute('disabled');
    return transformBooleanProperties(disabled);
  }

  get readonly(): string {
    const readonly = this.getAttribute('readonly');
    return transformBooleanProperties(readonly);
  }

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback(): void {
    this.render();

    const textarea = this.shadowRoot.querySelector('textarea');
    textarea.textContent = this.textContent;
  }

  attributeChangedCallback(): void {}

  render(): void {
    this.shadow.innerHTML = `
        <style>${style}</style>
        <label>
          ${this.label}
          <textarea
            rows="3"
            aria-disabled="${this.disabled}"
            ${this.readonly === 'true' ? 'readonly' : ''}
            placeholder="${this.placeholder}">
          </textarea>
        </label>
    `;
  }
}

customElements.define('ani-textarea', Textarea);

function transformBooleanProperties(value: string) {
  if (value === '') {
    return 'true';
  } else if (value === null) {
    return 'false';
  }

  return value;
}
