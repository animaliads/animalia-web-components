export const tooltipStyle = `

  .ani-tooltip {
    background-color: var(--background);
    border-radius: var(--border-radius);
    font-family: var(--font-family);
    color: var(--text-color);


    max-width: 15rem;

    padding: var(--spacing-squish-md);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-semibold);
    text-align: left;

    width: inherit;
    display: inline-block;
    visibility: hidden;
  }

  .tooltip-hidden {
    visibility: visible;
    opacity: 0.9;
    transition: opacity 1s;
  }

  .tooltip-top{
    position: absolute;
    margin-top: 0.25em;
  }

  .tooltip-left{
    position: absolute;
    left: 0;
  }

  .tooltip-right{
    position: absolute;
    right: 0;
  }

  .tooltip-bottom{
    position: absolute;
    bottom: 0;
  }
`;
