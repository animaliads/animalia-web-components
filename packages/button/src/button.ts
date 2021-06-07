import { style } from './button.style';
import { ButtonKind } from './enums/button-kind.enum';
import { ButtonType } from './enums/button-type.enum';

export class Button extends HTMLElement {
  shadow: ShadowRoot;
  clickEvent: Event;
  buttonElement: HTMLElement;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });

    this.clickEvent = document.createEvent('Event');
    this.clickEvent.initEvent('onClick', true, true);

    this.addEventListener('click', this.onClick);
  }

  get disabled(): string {
    const disabled = this.getAttribute('disabled');
    return transformBooleanProperties(disabled);
  }

  get danger(): string {
    const isTertiary = this.kind === ButtonKind.tertiary;
    const isDanger = isTertiary ? 'false' : this.getAttribute('danger');
    return transformBooleanProperties(isDanger);
  }

  set danger(value: string) {
    this.danger = value;
  }

  get kind(): string {
    const kind = this.getAttribute('kind');
    return kind === null ? ButtonKind.secondary : kind;
  }

  set kind(value: string) {
    this.kind = value;
  }

  get type(): string {
    const type = this.getAttribute('type');
    return type === null ? ButtonType.button : type;
  }

  set type(value: string) {
    this.type = value;
  }

  static get observedAttributes(): Array<string> {
    return ['kind', 'disabled', 'danger', 'type'];
  }

  connectedCallback(): void {
    this.render();
    this.setAccessibility();
  }

  attributeChangedCallback(): void {
    this.render();
    this.setAccessibility();
  }

  private onClick(): void {
    if (this.disabled !== 'true') {
      this.dispatchEvent(this.clickEvent);
    }
  }

  private setAccessibility() {
    this.buttonElement = this.shadow.getElementById('buttonElement');
    this.buttonElement.setAttribute('aria-disabled', this.disabled);
  }

  private render(): void {
    this.shadow.innerHTML = `
            <style>${style}</style>
            <button
              id="buttonElement"
              type="${this.type}"
              kind=${this.kind}
              danger=${this.danger}>
                <slot></slot>
            </button>
        `;
  }
}

customElements.define('ani-button', Button);

function transformBooleanProperties(value: string) {
  if (value === '') {
    return 'true';
  } else if (value === null) {
    return 'false';
  }

  return value;
}
