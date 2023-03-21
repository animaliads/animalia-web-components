import { Component } from '@animaliads/common';
import { tooltipStyle } from './tooltip.style';

@Component('ani-tooltip')
export class Tooltip extends HTMLElement {
  private tooltip: HTMLDivElement;

  constructor() {
    super();

    this.tooltip = document.createElement('div');
    this.tooltip.classList.add('tooltip');
    this.tooltip.setAttribute('role', 'tooltip');

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(this.tooltip);

    this.addEventListener('mouseenter', this.showTooltip.bind(this));
    this.addEventListener('mouseleave', this.hideTooltip.bind(this));

    shadow.innerHTML += `
      <style>
        ${tooltipStyle}
      </style>
      <slot></slot>
      <div class="tooltip">
        <slot name="content"></slot>
      </div>
    `;
  }

  private showTooltip() {
    let content = this.getAttribute('content') || '';

    content = this.truncateText(content, 140);

    this.tooltip.innerText = content;
    this.tooltip.style.opacity = '1';
  }

  private hideTooltip() {
    this.tooltip.style.opacity = '0';
  }

  private truncateText(text: string, limit: number) {
    if (text.length > limit) {
      return text.substring(0, limit) + '...';
    } else {
      return text;
    }
  }
}
