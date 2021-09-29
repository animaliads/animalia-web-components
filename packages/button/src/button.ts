import { style } from './button.style';
import { ButtonKind } from './enums/button-kind.enum';
import { ButtonType } from './enums/button-type.enum';
import { ButtonSize } from './enums/button.size.enum';

export class Button extends HTMLElement {
  shadow: ShadowRoot;
  clickEvent: Event;

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

  get size(): string {
    const size = this.getAttribute('size');
    return !size || size === 'null' ? ButtonSize.medium : size;
  }

  get kind(): string {
    const kind = this.getAttribute('kind');
    return !kind || kind === 'null' ? ButtonKind.secondary : kind;
  }

  get type(): string {
    const type = this.getAttribute('type');
    return !type || type === 'null' ? ButtonType.button : type;
  }

  static get observedAttributes(): Array<string> {
    return ['kind', 'disabled', 'danger', 'type'];
  }

  connectedCallback(): void {
    this.render();

    this.setDefaultKind();
    this.setDefaultSize();
  }

  attributeChangedCallback(): void {
    this.render();

    this.setDefaultKind();
    this.setDefaultSize();
  }

  /**
   * Aciona o foco no componente.
   */
     setFocus() {
      this.shadow.querySelector('button').focus();
    }
  

  private onClick(): void {
    if (this.disabled !== 'true') {
      this.dispatchEvent(this.clickEvent);
    }
  }

  private setDefaultKind() {
    const includesKind = Object.values(ButtonKind).includes(
      <ButtonKind>this.getAttribute('kind')
    );

    if (!this.hasAttribute('kind') || !includesKind) {
      this.setAttribute('kind', ButtonKind.secondary);
    }
  }

  private setDefaultSize() {
    const includesSize = Object.values(ButtonSize).includes(
      <ButtonSize>this.getAttribute('size')
    );

    if (!this.hasAttribute('size') || !includesSize) {
      this.setAttribute('size', ButtonSize.medium);
    }
  }

  private render(): void {
    this.shadow.innerHTML = `
            <style>${style}</style>
            <button
              type="${this.type}"
              kind=${this.kind}
              size=${this.size}
              ${this.disabled === 'true' ? 'disabled' : ''}
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
