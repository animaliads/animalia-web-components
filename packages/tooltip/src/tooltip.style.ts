export const tooltipStyle = `
  :host {
    background-color: var(--color);
    border-radius: var(--border-radius);
    color: var(--text-color);
    font-family: var(--font-family);
    font-size: $font-size-sm;
    font-weight: $font-weight-normal;
    max-width: 15rem;
    opacity: 0.9;
    padding: $spacing-squish-md;
    text-align: left;
    
    position: relative;
    display: inline-block;
  }

  .tooltip {
    background-color: var(--color);
    border-radius: var(--border-radius);
    color: var(--text-color);
    font-family: var(--font-family); 
    font-size: $font-size-sm; 
    font-weight: $font-weight-normal; 
    max-width: 15rem;
    opacity: 0;
    padding: $spacing-squish-md;
    position: absolute;
    text-align: left;
    transition: opacity 0.2s;
    z-index: 1;
  }
  
  /* Posicionamento do tooltip */
  :host([position="top"]) .tooltip,
  :host([position="bottom"]) .tooltip,
  :host([position="top-left"]) .tooltip,
  :host([position="top-right"]) .tooltip,
  :host([position="bottom-left"]) .tooltip,
  :host([position="bottom-right"]) .tooltip {
    left: 50%;
    transform: translateX(-50%);
  }

  :host([position="top"]) .tooltip,
  :host([position="top-left"]) .tooltip,
  :host([position="top-right"]) .tooltip {
    bottom: calc(100% + 9px);
  }

  :host([position="bottom"]) .tooltip,
  :host([position="bottom-left"]) .tooltip,
  :host([position="bottom-right"]) .tooltip {
    top: calc(100% + 9px);
  }

  :host([position="left"]) .tooltip,
  :host([position="right"]) .tooltip,
  :host([position="left-top"]) .tooltip,
  :host([position="left-bottom"]) .tooltip,
  :host([position="right-top"]) .tooltip,
  :host([position="right-bottom"]) .tooltip {
    top: 50%;
    transform: translateY(-50%);
  }

  :host([position="left"]) .tooltip,
  :host([position="left-top"]) .tooltip,
  :host([position="left-bottom"]) .tooltip {
    right: calc(100% + 9px);
  }

  :host([position="right"]) .tooltip,
  :host([position="right-top"]) .tooltip,
  :host([position="right-bottom"]) .tooltip {
    left: calc(100% + 9px);
  }

  /* Posicionamento das setas */
  :host(:hover) .tooltip {
    opacity: 1;
  }
  
  :host(:hover) .tooltip {
    opacity: 1;
  }

  .tooltip::before {
    content: '';
    position: absolute;
    border-style: solid;
    width: 0;
    height: 0;
  }
  
  :host([position="top"]) .tooltip::before,
  :host([position="top-left"]) .tooltip::before,
  :host([position="top-right"]) .tooltip::before {
    bottom: -5px;
    border-width: 5px 5px 0 5px;
    border-color: var(--color) transparent transparent transparent;
  }

  :host([position="right"]) .tooltip::before,
  :host([position="right-top"]) .tooltip::before,
  :host([position="right-bottom"]) .tooltip::before {
    left: -5px;
    border-width: 5px 5px 5px 0;
    border-color: transparent var(--color) transparent transparent;
  }

  :host([position="bottom"]) .tooltip::before,
  :host([position="bottom-left"]) .tooltip::before,
  :host([position="bottom-right"]) .tooltip::before {
    top: -5px;
    border-width: 0 5px 5px 5px;
    border-color: transparent transparent var(--color) transparent;
  }

  :host([position="left"]) .tooltip::before,
  :host([position="left-top"]) .tooltip::before,
  :host([position="left-bottom"]) .tooltip::before {
    right: -5px;
    border-width: 5px 0 5px 5px;
    border-color: transparent transparent transparent var(--color);
  }

  /* Posicionamento das setas */
  :host([position="top"]) .tooltip::before,
  :host([position="bottom"]) .tooltip::before {
    left: calc(50% - 5px);
  }

  :host([position="top-left"]) .tooltip::before,
  :host([position="bottom-left"]) .tooltip::before {
    right: 15px;
  }

  :host([position="top-right"]) .tooltip::before,
  :host([position="bottom-right"]) .tooltip::before {
    left: 15px;
  }

  :host([position="right"]) .tooltip::before,
  :host([position="left"]) .tooltip::before {
    top: calc(50% - 5px);
  }

  :host([position="right-top"]) .tooltip::before,
  :host([position="left-top"]) .tooltip::before {
    bottom: 15px;
  }

  :host([position="right-bottom"]) .tooltip::before,
  :host([position="left-bottom"]) .tooltip::before {
    top: 15px;
  }
`;
