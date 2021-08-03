import { Field } from './field';
import { style } from './textarea.style';

export default class Textarea extends HTMLElement implements Field {
  shadow: ShadowRoot;
  textareaElement: HTMLTextAreaElement;

  get placeholder(): string {
    return this.getAttribute('placeholder') || '';
  }

  get rows(): string {
    return this.getAttribute('rows') || '3';
  }

  get maxlength(): string {
    return this.getAttribute('maxlength') || '';
  }

  get minlength(): string {
    return this.getAttribute('minlength') || '';
  }

  get label(): string {
    return this.getAttribute('label') || '';
  }

  get disabled(): string {
    const disabled = this.getAttribute('disabled');
    return transformBooleanProperties(disabled);
  }

  get required(): string {
    const required = this.getAttribute('required');
    return transformBooleanProperties(required);
  }

  get readonly(): string {
    const readonly = this.getAttribute('readonly');
    return transformBooleanProperties(readonly);
  }

  static get observedAttributes(): Array<string> {
    return [
      'disabled',
      'readonly',
      'placeholder',
      'required',
      'rows',
      'maxlength',
      'minlength',
    ];
  }

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback(): void {
    this.render();

    this.updateAttributes();
  }

  attributeChangedCallback(): void {
    this.render();
    this.updateAttributes();
  }

  render(): void {
    this.shadow.innerHTML = `
        <style>${style}</style>
        <label>
          ${this.label}
          <textarea
            rows="${this.rows}"
            aria-maxlength="${this.maxlength}"
            maxlength="${this.maxlength}"
            minlength="${this.minlength}"
            placeholder="${this.placeholder}">
          </textarea>
        </label>
    `;
  }

  private updateAttributes() {
    this.textareaElement = this.shadowRoot.querySelector('textarea');

    this.textareaElement.textContent = this.textContent;
    this.textareaElement.readOnly = this.readonly === 'true';
    this.textareaElement.disabled = this.disabled === 'true';
    this.textareaElement.required = this.required === 'true';
  }
}

customElements.define('ani-textarea', Textarea);

function transformBooleanProperties(value: string): string {
  if (value === '') {
    return 'true';
  } else if (value === null) {
    return 'false';
  }

  return value;
}
