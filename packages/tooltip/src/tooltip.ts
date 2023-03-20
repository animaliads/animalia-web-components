import { Component } from '@animaliads/common';

@Component('ani-tooltip')
export class Tooltip extends HTMLElement {
  tooltipText: string;
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.tooltipText = this.getAttribute('tooltip-text') || '';
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          position: relative;
          display: inline-block;
        }
        .tooltip {
          position: absolute;
          z-index: 1;
          background-color: black;
          color: white;
          padding: 5px;
          border-radius: 3px;
          visibility: hidden;
        }
        :host(:hover) .tooltip {
          visibility: visible;
        }
      </style>
      <slot></slot>
      <div class="tooltip">${this.tooltipText}</div>
    `;
  }
}
