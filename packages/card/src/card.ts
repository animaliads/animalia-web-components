import { cardStyle } from './style';

export default class Card extends HTMLElement {
  shadow: ShadowRoot;
  cardElement: HTMLDivElement;

  get type(): string {
    return this.getAttribute('type');
  }

  get href(): string {
    return this.getAttribute('href');
  }

  get selected(): string {
    const selected = this.getAttribute('selected');
    return transformBooleanProperties(selected);
  }

  set selected(value: string) {
    this.setAttribute('selected', value);
  }

  static get observedAttributes(): Array<string> {
    return ['type', 'href', 'selected'];
  }

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback(): void {
    this.render();
    this.cardElement = this.shadow.querySelector('.ani-card');

    this.addEventListener('click', this.onClick);
    this.addEventListener('keydown', this.handleKeyDown);

    this.updateAttributes();
  }

  disconnectedCallback(): void {
    this.removeEventListener('click', this.onClick);
    this.removeEventListener('keydown', this.handleKeyDown);
  }

  render(): void {
    this.shadow.innerHTML = `
        <style>${cardStyle}</style>
        <div class="ani-card">
          <slot></slot>
        </div>
    `;
  }

  private onClick() {
    if (this.type === 'selectable') {
      this.toggleSelected();
    }
  }

  private handleKeyDown(event) {
    if (this.type === 'selectable' && event.keyCode === 32) {
      this.toggleSelected();
    }
  }

  private toggleSelected() {
    this.selected = this.selected === 'true' ? 'false' : 'true';
  }

  attributeChangedCallback(attrName, oldVal, newVal): void {
    this.updateAttributes();
  }

  private updateAttributes() {
    if (!this.cardElement) {
      return;
    }
    if (this.type === 'link') {
      this.shadow.innerHTML = `
        <style>${cardStyle}</style>
        <a class="ani-card" href="${this.href}">
          <slot></slot>
        </a>
     `;
    }
    if (this.type === 'selectable') {
      this.cardElement.setAttribute('role', 'radio');
      this.cardElement.setAttribute('aria-checked', this.selected);
      this.cardElement.setAttribute('tabindex', '0');
    }
  }
}

customElements.define('ani-card', Card);

function transformBooleanProperties(value: string) {
  if (value === '') {
    return 'true';
  } else if (value === null) {
    return 'false';
  }

  return value;
}
