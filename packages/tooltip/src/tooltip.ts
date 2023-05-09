import { Component } from '@animaliads/common';
import { tooltipStyle } from './tooltip.style';

@Component('ani-tooltip')
export class Tooltip extends HTMLElement {
  private tooltip: HTMLDivElement;
  private triggerElement: HTMLElement;

  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    this.addEventListener('mouseenter', this.showTooltip.bind(this));
    this.addEventListener('mouseleave', this.hideTooltip.bind(this));

    shadow.innerHTML = `
      <style>
        ${tooltipStyle}
      </style>
      <slot></slot>
      <div class="tooltip" role="tooltip" aria-hidden="true">
        <slot name="content"></slot>
      </div>
    `;

    this.tooltip = shadow.querySelector('.tooltip') as HTMLDivElement;
  }

  connectedCallback(): void {
    const assignedNodes = (
      this.shadowRoot.querySelector('slot') as HTMLSlotElement
    ).assignedNodes();
    this.triggerElement = assignedNodes.find(
      node => node instanceof HTMLElement
    ) as HTMLElement;

    if (this.triggerElement) {
      const tooltipId = `tooltip-${Math.random().toString(36).substr(2, 10)}`;
      this.tooltip.id = tooltipId;
      this.triggerElement.setAttribute('aria-describedby', tooltipId);
      this.triggerElement.setAttribute('tabindex', '0');
    }
  }

  get position(): string {
    const position = this.getAttribute('position');
    return position || 'top';
  }

  private showTooltip() {
    let content = this.getAttribute('content') || '';

    content = this.truncateText(content, 140);

    this.tooltip.innerText = content;
    this.tooltip.style.opacity = '1';
    this.tooltip.setAttribute('aria-hidden', 'false');
  }

  private hideTooltip() {
    this.tooltip.style.opacity = '0';
    this.tooltip.setAttribute('aria-hidden', 'true');
  }

  private truncateText(text: string, limit: number) {
    if (text.length > limit) {
      return text.substring(0, limit) + '...';
    } else {
      return text;
    }
  }
}
