import { style } from './style';

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

  get items(): Array<{ label: string; value: string }> {
    return JSON.parse(this.getAttribute('items')) || [];
  }

  get value(): string {
    return this.getAttribute('value');
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

  static get observedAttributes(): Array<string> {
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

    this.addOptions();

    const firstOption = this.selectElement.options[0]?.value;
    const isEmpty = !this.value && this.labelChooseOption;

    this.selectElement.value =
      this.value || this.labelChooseOption || firstOption;

    this.setColorLabelChooseOption(
      isEmpty ? '--text-color-empty' : '--text-color'
    );
  }

  private setColorLabelChooseOption(customProperty: string) {
    this.selectElement.style.setProperty(
      'color',
      getComputedStyle(this.selectElement).getPropertyValue(customProperty)
    );
  }

  private addOptions() {
    this.removeOptions();

    if (this.labelChooseOption) {
      this.createOption(
        { label: this.labelChooseOption, value: this.labelChooseOption },
        true
      );
    }

    this.items.forEach(item => this.createOption(item));
  }

  private createOption(
    item: { label: string; value: string },
    isDisabled = false
  ) {
    const option = document.createElement('option');
    option.value = item.value;
    option.innerText = item.label;
    option.disabled = isDisabled;

    this.selectElement.add(option);
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
