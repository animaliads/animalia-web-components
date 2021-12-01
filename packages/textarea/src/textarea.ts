import { transformBooleanProperties, Component } from '@animaliads/common';

import { Field } from './field';
import { style } from './textarea.style';

@Component('ani-textarea')
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
  setFocus(): void {
    this.textareaElement.focus();
  }

  private render(): void {
    this.shadow.innerHTML = `
        <style>${style}</style>
        <label>
          <div>
            <slot></slot>
          </div>
          <textarea>
          </textarea>
        </label>
    `;
  }

  private updateAttributes() {
    if (!this.textareaElement) {
      return;
    }

    this.textareaElement.setAttribute('placeholder', this.placeholder);
    this.textareaElement.setAttribute('rows', this.rows);
    this.textareaElement.setAttribute('minlength', this.minlength);
    this.textareaElement.setAttribute('maxlength', this.maxlength);

    this.textareaElement.value = this.value;
    this.textareaElement.readOnly = this.readonly === 'true';
    this.textareaElement.disabled = this.disabled === 'true';
    this.textareaElement.required = this.required === 'true';
  }

  private listenerEvents() {
    this.changeEvent = new Event('onChange');
    this.blurEvent = new Event('onBlur');
    this.inputEvent = new Event('onInput');
    this.focusEvent = new Event('onFocus');

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
