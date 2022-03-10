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

    position: relative;
    width: inherit;
    visibility: hidden;
    z-index: 1;
    margin: 0.25em;
  }

  .tooltip-visible {
    visibility: visible;
    opacity: 0.9;
    transition: opacity 0.3s;
  }

  .tooltip-start-top{
    position: absolute;
    margin-bottom: 0.25em;
    bottom: 100%;
    left: 50%;
  }

  .tooltip-start-top::after {
    content: " ";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -3px;
    border-width: 3px;
    border-style: solid;
    border-color: var(--background) transparent transparent transparent;
  }

  .tooltip-center-top{
    position: absolute;
    margin-bottom: 0.25em;
    bottom: 100%;
    left: 50%;
  }

  .tooltip-center-top::after {
    content: " ";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -3px;
    border-width: 3px;
    border-style: solid;
    border-color: var(--background) transparent transparent transparent;
  }

  .tooltip-end-top{
    position: absolute;
    margin-bottom: 0.25em;
    bottom: 100%;
    left: 50%;
  }

  .tooltip-end-top::after {
    content: " ";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -3px;
    border-width: 3px;
    border-style: solid;
    border-color: var(--background) transparent transparent transparent;
  }

  .tooltip-start-left {
    position: absolute;
    margin-right: 0.25em;
    float: left;
  }

  .tooltip-start-left::after {
    content: " ";
    position: absolute;
    top: 12px;
    right: 100%; /* To the left of the tooltip */
    margin-top: -3px;
    border-width: 3px;
    border-style: solid;
    border-color: transparent var(--background) transparent transparent;
  }

  .tooltip-center-left {
    position: absolute;
    margin-right: 0.25em;
    top: -5px;
    right: 105%;
  }

  .tooltip-center-left::after {
    content: " ";
    position: absolute;
    top: 50%;
    right: 100%; /* To the left of the tooltip */
    margin-top: -3px;
    border-width: 3px;
    border-style: solid;
    border-color: transparent var(--background) transparent transparent;
  }

  .tooltip-end-left {
    position: absolute;
    margin-right: 0.25em;
    top: -5px;
    right: 105%;
  }

  .tooltip-end-left::after {
    content: " ";
    position: absolute;
    bottom: 12px;
    right: 100%; /* To the left of the tooltip */
    margin-top: -3px;
    border-width: 3px;
    border-style: solid;
    border-color: transparent var(--background) transparent transparent;
  }

  .tooltip-start-right {
    position: relative;
    margin-left: 0.25em;
    top:-5px;
    left: 100%;
  }

  .tooltip-start-right::after {
    content: " ";
    position: absolute;
    top: 12px;
    right: 100%;
    margin-top: -3px;
    border-width: 3px;
    border-style: solid;
    border-color: transparent transparent transparent var(--background);
  }

  .tooltip-center-right {
    margin-left: 0.25em;
    position: absolute;
    top: -5px;
    left: 105%;
  }

  .tooltip-center-right::after {
    content: " ";
    position: absolute;
    top: 50%;
    left: 100%; /* To the right of the tooltip */
    margin-top: -3px;
    border-width: 3px;
    border-style: solid;
    border-color: transparent transparent transparent var(--background);
  }

  .tooltip-end-right {
    margin-left: 0.25em;
    position: absolute;
    top: -5px;
    left: 105%;
  }

  .tooltip-end-right::after {
    content: " ";
    position: absolute;
    bottom: 12px;
    left: 100%; /* To the right of the tooltip */
    margin-top: -3px;
    border-width: 3px;
    border-style: solid;
    border-color: transparent transparent transparent var(--background);
  }


  .tooltip-start-bottom{
    position: absolute;
    margin-top: 0.25em;
    top: 100%;
    left: 50%;
  }

  .tooltip-start-bottom::after{
    content: " ";
    bottom: 100%;
    left: 12px;
    position: absolute;
    margin-top: 0.25em;

    margin-left: -3px;
    border-width: 3px;
    border-style: solid;
    border-color: transparent transparent var(--background) transparent;
  }

  .tooltip-center-bottom{
    position: absolute;
    margin-top: 0.25em;
    top: 100%;
    left: 50%;
  }

  .tooltip-center-bottom::after{
    content: " ";
    bottom: 100%;
    left: 50px;
    position: absolute;
    margin-top: 0.25em;

    margin-left: -3px;
    border-width: 3px;
    border-style: solid;
    border-color: transparent transparent var(--background) transparent;
  }

  .tooltip-end-bottom{
    position: absolute;
    margin-top: 0.25em;
    top: 100%;
    left: 50%;
  }

  .tooltip-end-bottom::after{
    content: " ";
    bottom: 100%;
    right: 12px;
    position: absolute;
    margin-top: 0.25em;

    margin-left: -3px;
    border-width: 3px;
    border-style: solid;
    border-color: transparent transparent var(--background) transparent;
  }

`;
