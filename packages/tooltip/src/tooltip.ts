import { Component, KeyCode } from '@animaliads/common';
import { tooltipStyle } from './style';
@Component('ani-tooltip')
export default class Tooltip extends HTMLElement {
  shadow: ShadowRoot;
  tooltipElement: HTMLDivElement;

  private _target: any;

  get id(): string {
    return this.getAttribute('id');
  }

  get tip(): string {
    return this.getAttribute('tip');
  }

  get position(): string {
    return this.getAttribute('position');
  }

  get direction(): string {
    return this.getAttribute('direction');
  }

  get trigger(): string {
    return this.getAttribute('trigger');
  }

  static get observedAttributes(): Array<string> {
    return ['tip', 'position', 'direction', 'trigger', 'id'];
  }

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });

    this._show = this._show.bind(this);
    this._hide = this._hide.bind(this);
  }

  connectedCallback(): void {
    this.render();

    this._target = document.querySelector('[aria-describedby=' + this.id + ']');
    this.listenerEvents();
    this.positionTooltip();
  }

  attributeChangedCallback(): void {
    this.updateAttributes();
  }

  private updateAttributes() {
    if (!this.hidden) {
      this.render();
    } else {
      this.shadow.innerHTML = '';
    }
  }

  private positionTooltip() {
    if (!this.position || this.position === 'bottom') {
      this.tooltipElement.classList.add('tooltip-bottom');
    } else if (this.position === 'top') {
      this.tooltipElement.classList.add('tooltip-top');
    } else if (this.position === 'right') {
      this.tooltipElement.classList.add('tooltip-right');
    } else {
      this.tooltipElement.classList.add('tooltip-left');
    }
  }

  private listenerEvents() {
    if (!this._target) {
      return;
    }
    this._target.addEventListener('focus', this._show);
    this._target.addEventListener('click', this._show);
    this._target.addEventListener('mouseenter', this._show);
    this._target.addEventListener('mouseout', this._hide);
  }

  disconnectedCallback(): void {
    if (!this._target) {
      return;
    }
    this._target.addEventListener('focus', this._show);
    this._target.addEventListener('click', this._show);
    this._target.addEventListener('mouseenter', this._show);
    this._target.addEventListener('mouseout', this._hide);
    this._target = null;
  }

  render(): void {
    this.shadow.innerHTML = `
        <style>${tooltipStyle}</style>
        <div class="ani-tooltip" role="tooltip" tabindex="-1">
          <span>${this.tip}</span>
        </div>
    `;

    this.tooltipElement = this.shadow.querySelector('.ani-tooltip');
  }

  _show() {
    this.hidden = false;
    const teste = this.shadow.querySelector('.ani-tooltip');
    teste.classList.add('tooltip-hidden');
  }

  _hide() {
    this.hidden = true;
    const teste = this.shadow.querySelector('.ani-tooltip');
    teste.classList.remove('tooltip-hidden');
  }
}
