import { Field } from './field';
import { style } from './textarea.style';

export default class Textarea extends HTMLElement implements Field {
  shadow: ShadowRoot;
  textareaElement: HTMLTextAreaElement;
  changeEvent: Event;
  blurEvent: Event;
  inputEvent: Event;
  focusEvent: Event;

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

  get value(): string {
    return this.getAttribute('value') || '';
  }

  set value(value) {
    this.setAttribute('value', value);
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
      'value',
    ];
  }

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback(): void {
    this.render();

    this.textareaElement = this.shadowRoot.querySelector('textarea');

    this.updateAttributes();

    this.listenerEvents();
  }

  disconnectedCallback(): void {
    this.textareaElement.removeEventListener('change', this.handleEvent);
    this.textareaElement.removeEventListener('blur', this.handleEvent);
    this.textareaElement.removeEventListener('input', this.handleEvent);
  }

  attributeChangedCallback(): void {
    // this.render();
    this.updateAttributes();
  }

  /**
   * Retorna o elemento que define o textarea.
   */
  getElement(): HTMLTextAreaElement {
    return this.textareaElement;
  }

  /**
   * Aciona o foco no componente.
   */
  setFocus() {
    this.textareaElement.focus();
  }

  private render(): void {
    this.shadow.innerHTML = `
        <style>${style}</style>
        <label>
          <div>
            <slot></slot>
          </div>
          <textarea
            rows="${this.rows}"
            maxlength="${this.maxlength}"
            minlength="${this.minlength}"
            placeholder="${this.placeholder}">
          </textarea>
        </label>
    `;
  }

  private updateAttributes() {
    if (!this.textareaElement) {
      return;
    }

    this.textareaElement.value = this.value;
    this.textareaElement.readOnly = this.readonly === 'true';
    this.textareaElement.disabled = this.disabled === 'true';
    this.textareaElement.required = this.required === 'true';
  }

  private listenerEvents() {
    this.changeEvent = document.createEvent('Event');
    this.changeEvent.initEvent('onChange', true, true);

    this.blurEvent = document.createEvent('Event');
    this.blurEvent.initEvent('onBlur', true, true);

    this.inputEvent = document.createEvent('Event');
    this.inputEvent.initEvent('onInput', true, true);

    this.focusEvent = document.createEvent('Event');
    this.focusEvent.initEvent('onFocus', true, true);

    this.textareaElement.addEventListener(
      'change',
      this.handleEvent.bind(this, this.changeEvent)
    );
    this.textareaElement.addEventListener(
      'blur',
      this.handleEvent.bind(this, this.blurEvent)
    );
    this.textareaElement.addEventListener(
      'input',
      this.handleEvent.bind(this, this.inputEvent)
    );
    this.textareaElement.addEventListener(
      'focus',
      this.handleEvent.bind(this, this.focusEvent)
    );
  }

  private handleEvent(event) {
    this.value = this.textareaElement.value;
    this.dispatchEvent(event);
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
