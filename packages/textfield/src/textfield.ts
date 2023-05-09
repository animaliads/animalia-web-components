import { transformBooleanProperties, Component } from '@animaliads/common';

import { style } from './style';

@Component('ani-textfield')
export default class Textfield extends HTMLElement {
  shadow: ShadowRoot;
  textfieldElement: HTMLInputElement;
  changeEvent: Event;
  blurEvent: Event;
  inputEvent: Event;
  focusEvent: Event;

  get placeholder(): string {
    return this.getAttribute('placeholder') || '';
  }

  get pattern(): string {
    return this.getAttribute('pattern') || '';
  }

  get autocomplete(): string {
    return this.getAttribute('autocomplete') || 'on';
  }

  get type(): string {
    return this.getAttribute('type') || 'text';
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

  set value(value: string) {
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

  get error(): string {
    return this.getAttribute('error') || '';
  }

  set error(value: string) {
    this.setAttribute('error', value);
  }

  static get observedAttributes(): Array<string> {
    return [
      'pattern',
      'autocomplete',
      'type',
      'disabled',
      'readonly',
      'placeholder',
      'required',
      'maxlength',
      'minlength',
      'value',
      'error',
    ];
  }

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback(): void {
    this.render();

    this.textfieldElement = this.shadowRoot.querySelector('input');

    this.updateAttributes();

    this.listenerEvents();
  }

  disconnectedCallback(): void {
    this.textfieldElement.removeEventListener('change', this.handleEvent);
    this.textfieldElement.removeEventListener('blur', this.handleEvent);
    this.textfieldElement.removeEventListener('input', this.handleEvent);
  }

  attributeChangedCallback(): void {
    this.updateAttributes();

    if (this.shadowRoot) {
      const errorTextElement = this.shadowRoot.querySelector(
        '.error-text'
      ) as HTMLElement;
      const errorElement = this.shadowRoot.querySelector(
        '.error'
      ) as HTMLElement;
      errorTextElement.textContent = this.error;
      errorElement.style.display = this.error ? 'flex' : 'none';
    }
  }

  /**
   * Retorna o elemento que define o textfield.
   */
  getElement(): HTMLInputElement {
    return this.textfieldElement;
  }

  /**
   * Aciona o foco no componente.
   */
  setFocus(): void {
    this.textfieldElement.focus();
  }

  private render(): void {
    this.shadow.innerHTML = `
        <style>${style}</style>
        <label>
          <div>
            <slot></slot>
          </div>
          <input />
          <span class="error">
            <ani-icon class="error-icon" size="small" name="info"></ani-icon>
            <span class="error-text">${this.error}</span>
          </span>
        </label>
    `;
  }

  private updateAttributes() {
    if (!this.textfieldElement) {
      return;
    }

    const attributes = [
      'autocomplete',
      'pattern',
      'type',
      'placeholder',
      'minlength',
      'maxlength',
    ];

    attributes.forEach(attr => this.updateAttribute(attr, this[attr]));

    this.textfieldElement.value = this.value;
    this.textfieldElement.readOnly = this.readonly === 'true';
    this.textfieldElement.disabled = this.disabled === 'true';
    this.textfieldElement.required = this.required === 'true';
    this.updateErrorText();
  }

  private updateErrorText() {
    const errorElement = this.shadowRoot.querySelector('.error-text');
    errorElement.textContent = this.error;
  }

  updateAttribute(attr: string, property: string): void {
    property && this.textfieldElement.setAttribute(attr, property);
  }

  private listenerEvents() {
    this.changeEvent = new Event('onChange');
    this.blurEvent = new Event('onBlur');
    this.inputEvent = new Event('onInput');
    this.focusEvent = new Event('onFocus');

    this.textfieldElement.addEventListener(
      'change',
      this.handleEvent.bind(this, this.changeEvent)
    );
    this.textfieldElement.addEventListener(
      'blur',
      this.handleEvent.bind(this, this.blurEvent)
    );
    this.textfieldElement.addEventListener(
      'input',
      this.handleEvent.bind(this, this.inputEvent)
    );
    this.textfieldElement.addEventListener(
      'focus',
      this.handleEvent.bind(this, this.focusEvent)
    );
  }

  private handleEvent(event) {
    this.value = this.textfieldElement.value;
    this.dispatchEvent(event);
  }
}
