/* eslint-disable linebreak-style */
import { style } from './style';

const icon = `
<svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.707 0.293006C13.316 -0.0979941 12.684 -0.0979941 12.293 0.293006L7.00001 5.58601L1.70701 0.293006C1.31601 -0.0979941 0.684006 -0.0979941 0.293006 0.293006C-0.0979941 0.684006 -0.0979941 1.31601 0.293006 1.70701L6.29301 7.70701C6.48801 7.90201 6.74401 8.00001 7.00001 8.00001C7.25601 8.00001 7.51201 7.90201 7.70701 7.70701L13.707 1.70701C14.098 1.31601 14.098 0.684006 13.707 0.293006Z" fill="#515162"/>
</svg>`;

export default class Select extends HTMLElement {
  shadow: ShadowRoot;
  selectElement: HTMLSelectElement;
  changeEvent: Event;
  blurEvent: Event;
  inputEvent: Event;
  focusEvent: Event;

  get disabled(): string {
    const disabled = this.getAttribute('disabled');
    return transformBooleanProperties(disabled);
  }

  get items() {
    return JSON.parse(this.getAttribute('items')) || [];
  }

  get value(): string {
    return this.getAttribute('value') || '';
  }

  set value(value: string) {
    this.setAttribute('value', value);
  }

  get required(): string {
    const required = this.getAttribute('required');
    return transformBooleanProperties(required);
  }

  get labelChooseOption(): string {
    return this.getAttribute('label-choose-option');
  }

  static get observedAttributes() {
    return ['items', 'disabled', 'value', 'required', 'label-choose-option'];
  }

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback(): void {
    this.render();
    this.selectElement = this.shadowRoot.querySelector('select');

    this.updateAttributes();
    this.listenerEvents();
  }

  disconnectedCallback(): void {
    this.selectElement.removeEventListener('change', this.handleEvent);
    this.selectElement.removeEventListener('blur', this.handleEvent);
    this.selectElement.removeEventListener('input', this.handleEvent);
  }

  attributeChangedCallback(): void {
    this.updateAttributes();
  }

  /**
   * Retorna o elemento que define o textfield.
   */
  getElement(): HTMLSelectElement {
    return this.selectElement;
  }

  /**
   * Aciona o foco no componente.
   */
  setFocus(): void {
    this.selectElement.focus();
  }

  private render() {
    this.shadow.innerHTML = `
      <style>${style}</style>

      <label>
        <div>
          <slot></slot>
        </div>
          <select></select>
      </label>
    `;
  }

  private updateAttributes() {
    if (!this.selectElement) {
      return;
    }

    this.selectElement.disabled = this.disabled === 'true';
    this.selectElement.required = this.required === 'true';

    this.removeOptions();

    if (this.labelChooseOption) {
      const option = document.createElement('option');
      option.value = this.labelChooseOption;
      option.innerText = this.labelChooseOption;
      option.disabled = true;
      this.selectElement.add(option);
    }

    this.items.forEach(item => {
      const option = document.createElement('option');
      option.value = item.value;
      option.innerText = item.label;

      this.selectElement.add(option);
    });

    if (this.value) {
      this.selectElement.value = this.value;
      this.selectElement.style.setProperty(
        'color',
        getComputedStyle(this.selectElement).getPropertyValue('--text-color')
      );
    }

    if (!this.value && this.labelChooseOption) {
      this.selectElement.value = this.labelChooseOption;
      this.selectElement.style.setProperty(
        'color',
        getComputedStyle(this.selectElement).getPropertyValue(
          '--text-color-empty'
        )
      );
    }
  }

  private removeOptions() {
    let hasOptions = !!this.selectElement.options.length;

    while (hasOptions) {
      this.selectElement.remove(0);
      hasOptions = !!this.selectElement.options.length;
    }
  }

  private listenerEvents() {
    this.changeEvent = new Event('onChange');
    this.blurEvent = new Event('onBlur');
    this.inputEvent = new Event('onInput');
    this.focusEvent = new Event('onFocus');

    this.selectElement.addEventListener(
      'change',
      this.handleEvent.bind(this, this.changeEvent)
    );
    this.selectElement.addEventListener(
      'blur',
      this.handleEvent.bind(this, this.blurEvent)
    );
    this.selectElement.addEventListener(
      'input',
      this.handleEvent.bind(this, this.inputEvent)
    );
    this.selectElement.addEventListener(
      'focus',
      this.handleEvent.bind(this, this.focusEvent)
    );
  }

  private handleEvent(event) {
    this.value = this.selectElement.value;
    this.dispatchEvent(event);
  }
}

customElements.define('ani-select', Select);

function transformBooleanProperties(value: string) {
  if (value === '') {
    return 'true';
  } else if (value === null) {
    return 'false';
  }

  return value;
}
