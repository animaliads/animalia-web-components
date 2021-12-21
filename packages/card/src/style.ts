export const cardStyle = `
  :host() {
    display: inline-block;
  }

  a {
    display: inline-block;
  }

  .ani-card {
    border-radius: var(--border-radius);
    border-color: var(--border-color);
    background-color: var(--background);
    border-width: var(--border-width);
    padding: var(--padding);

    border-style: solid;
    text-decoration: none;
    color: inherit;
    box-sizing: border-box;
    display: inline-block;
    width: inherit;
  }

  .card-interactive{
    box-shadow: var(--shadow);
  }

  .card-interactive:hover {
    border-color: var(--border-color-hover);
    box-shadow: var(--shadow-hover);

    cursor: pointer;
  }

  .card-interactive:focus {
    border-color: var(--color-focused);
    outline-color: var(--outline-color-focused);

    outline-width: var(--border-width-lg);
    outline-style: solid;
    outline-offset: 2px;
  }

  .card-interactive[aria-checked='true'] {
    border-color: var(--border-color-selected);
    background-color: var(--background-selected)
  }
`;
