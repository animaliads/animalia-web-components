export const tooltipStyle = `
  :host {
    background-color: var(--color);
    border-radius: var(--border-radius);
    font-family: var(--font-family);
    color: var(--text-color);
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
    position: absolute;
    z-index: 1;
    top: calc(100% + 5px);
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--color);
    color: var(--text-color);
    padding: $spacing-squish-md;
    border-radius: var(--border-radius);
    opacity: 0;
    transition: opacity 0.2s;
    font-size: $font-size-sm;
    font-weight: $font-weight-normal;
    max-width: 15rem;
    text-align: left;
  }
  
  :host(:hover) .tooltip {
    opacity: 1;
  }
`;
