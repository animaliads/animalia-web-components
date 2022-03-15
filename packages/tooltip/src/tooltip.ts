import { Component, KeyCode } from '@animaliads/common';
import { tooltipStyle } from './style';
@Component('ani-tooltip')
export default class Tooltip extends HTMLElement {
  shadow: ShadowRoot;
  tooltipElement: HTMLDivElement;

  private target: any;

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

  static get observedAttributes(): Array<string> {
    return ['tip', 'position', 'direction'];
  }

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });

    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  connectedCallback(): void {
    this.render();

    this.target = document.querySelector('[aria-describedby=' + this.id + ']');
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
    if (!this.position && !this.direction) {
      this.tooltipElement.classList.add('tooltip-center-bottom');
      return;
    }
    if (!this.position) {
      this.tooltipElement.classList.add(`tooltip-${this.direction}-bottom`);
      return;
    }
    if (!this.direction) {
      this.tooltipElement.classList.add(`tooltip-center-${this.position}`);
      return;
    }
    this.tooltipElement.classList.add(
      `tooltip-${this.direction}-${this.position}`
    );
  }

  private listenerEvents() {
    this.target.addEventListener('click', this.show);
    this.target.addEventListener('mouseenter', this.show);
    this.target.addEventListener('mouseout', this.hide);
    this.target.addEventListener('focus', this.show);
    this.target.addEventListener('keydown', this.hide);
  }

  disconnectedCallback(): void {
    this.target.removeEventListener('focus', this.show);
    this.target.removeEventListener('click', this.show);
    this.target.removeEventListener('mouseenter', this.show);
    this.target.removeEventListener('mouseout', this.hide);
    this.target.removeEventListener('keydown', this.hide);
    this.target = null;
  }

  render(): void {
    this.shadow.innerHTML = `
        <style>${tooltipStyle}</style>
        <div  class="ani-tooltip" >
          <slot></slot>
          <span class="tooltip-text" role="tooltip" tabindex="-1">${this.tip}</span>
        </div>
    `;

    this.tooltipElement = this.shadow.querySelector('.tooltip-text');
  }

  private show() {
    this.tooltipElement.classList.add('tooltip-visible');
  }

  private hide() {
    this.tooltipElement.classList.remove('tooltip-visible');
  }
}
