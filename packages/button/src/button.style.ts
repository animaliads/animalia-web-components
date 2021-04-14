export const style = `
  button {
    /* Custom */
    font-family: var(--font-family);
    color: var(--text-color);
    font-size: var(--font-size);
    line-height: var(--line-height);

    background-color: var(--background);
    border-radius: var(--border-radius);
    padding: var(--spacing-squish);

    box-shadow: var(--shadow);

    /* Fixed */
    font-weight: var(--font-weight-bold);
    letter-spacing: var(--letter-spacing-auto);
    border: none;
  }

  button:hover {
    /* Custom */
    background-color: var(--background-hover);

    /* Fixed */
    cursor: pointer;
  }

  button:focus {
    /* Fixed */
    /* outline-width in box-shadow */
    outline: none;
    box-shadow: 0 0 0 var(--border-width-lg) var(--outline-color-focused);
  }

  button:active {
    /* Custom */
    background-color: var(--background-pressed);

    /* Fixed */
    /* outline-width in box-shadow */
    box-shadow: 0 0 0 var(--border-width-lg) var(--outline-color-focused);
    cursor: pointer;
  }

  button[aria-disabled='true'] {
    /* Custom */
    background-color: var(--background-disabled);
    color: var(--text-color-disabled);

    /* Fixed */
    cursor: not-allowed;
  }

  button[aria-disabled='true']:focus {
    /* Custom */
    outline-color: var(--outline-color-disabled);

    /* Fixed */
    outline-offset: 2px;
    outline-width: var(--border-width-lg);
  }
`;
