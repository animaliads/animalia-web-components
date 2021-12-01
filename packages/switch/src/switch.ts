import { transformBooleanProperties, Component } from '@animaliads/common';

import { KeyCode } from './enums/key-code.enum';
import { style } from './style';

const checkIcon = `
<svg width="12" height="10" viewBox="0 0 12 10" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 5.32608L4.55114 9.5L12 2.10491L10.3864 0.5L4.55114 6.30151L1.60227 3.49433L0 5.32608Z"/>
</svg>`;

@Component('ani-switch')
export default class Switch extends HTMLElement {
  shadow: ShadowRoot;
  switchElement: HTMLElement;
  ariaAttr = ['checked', 'disabled'];

  get checked(): string {
    const checked = this.getAttribute('checked');
    return transformBooleanProperties(checked);
  }

  set checked(value: string) {
    this.setAttribute('checked', value);
  }

  get disabled(): string {
    const disabled = this.getAttribute('disabled');
    return transformBooleanProperties(disabled);
  }

  static get observedAttributes(): Array<string> {
    return ['checked', 'disabled'];
  }

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback(): void {
    this.render();

    this.switchElement = this.shadow.querySelector('[role="switch"]');

    this.shadow.addEventListener('click', this.onClick.bind(this));
    this.shadow.addEventListener('keydown', this.handleKeyDown.bind(this));

    this.updateProperties();
  }

  disconnectedCallback(): void {
    this.shadow.removeEventListener('click', this.onClick);
    this.shadow.removeEventListener('keydown', this.handleKeyDown);
  }

  attributeChangedCallback(): void {
    if (!this.switchElement) {
      return;
    }
    this.updateProperties();
  }

  render(): void {
    this.shadow.innerHTML = `
      <style>${style}</style>
      <slot class="label" id="label"></slot>
      <div class="container" role="switch" aria-labelledby="label">
        <div class="track">
          <div class="toggle">
            ${checkIcon}
          </div>
        </div>
      </div>
    `;
  }

  private updateProperties() {
    this.switchElement.setAttribute('aria-checked', this.checked);
    this.switchElement.setAttribute('aria-disabled', this.disabled);
    this.switchElement.setAttribute(
      'tabindex',
      this.disabled === 'true' ? '-1' : '0'
    );
  }

  private onClick() {
    this.toggleSwitch();
  }

  private handleKeyDown(event) {
    const keyCode = event.keyCode;

    if (keyCode === KeyCode.SPACE) {
      this.toggleSwitch();
    }
  }

  private toggleSwitch() {
    if (this.disabled === 'true') {
      return;
    }

    this.checked = this.checked === 'true' ? 'false' : 'true';
  }
}
