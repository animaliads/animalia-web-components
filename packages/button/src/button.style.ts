export const style = `
  button {
    /* Custom */
    font-family: var(--font-family);
    font-weight: var(--font-weight-bold);
    border-radius: var(--border-radius);

    /* Fixed */
    letter-spacing: var(--letter-spacing-auto);
    width: inherit;
  }

  button:focus {
    outline-color: var(--outline-color-focused);

    outline-width: var(--border-width-lg);
    outline-style: solid;
    outline-offset: 2px;
  }

  button:active {
    color: var(--text-color-pressed, var(--text-color));
    outline-color: var(--outline-color-focused);

    outline-width: var(--border-width-lg);
    outline-style: solid;
    outline-offset: 2px;
    cursor: pointer;
  }

  button[size='small'], button[size='medium'], button[size='large'] {
    font-size: var(--font-size);
    line-height: var(--line-height);
    padding: var(--spacing-squish);
  }

  button[kind='primary'] {
    color: var(--text-color);
    background-color: var(--background);
    box-shadow: var(--shadow);

    border: var(--border-width) solid transparent;
  }

  button[kind='primary']:hover {
    color: var(--text-color-hover, var(--text-color));
    background-color: var(--background-hover);

    cursor: pointer;
  }

  button[kind='primary']:active {
    background-color: var(--background-pressed);
  }

  button[kind='primary'][disabled] {
    /* Custom */
    color: var(--text-color-disabled);
    background-color: var(--background-disabled);

    cursor: not-allowed;
  }

  button[kind='secondary'] {
    color: var(--text-color);
    border-color: var(--border-color);
    border-width: var(--border-width);

    background-color: transparent;
    border-style: solid;
    box-shadow: var(--shadow-none);
  }

  button[kind='secondary']:hover {
    color: var(--text-color-hover, var(--text-color));
    background-color: var(--background-hover);
    border-color: var(--border-color-hover);

    cursor: pointer;
  }

  button[kind='secondary']:active {
    background-color: var(--background-pressed);
    border-color: var(--border-color-pressed);
  }

  button[kind='secondary'][disabled] {
    /* Custom */
    color: var(--text-color-disabled);
    border-color: var(--border-color-disabled);

    background-color: transparent;
    cursor: not-allowed;
  }

  button[kind='tertiary'] {
    color: var(--text-color);

    background-color: transparent;
    border: none;
    box-shadow: var(--shadow-none);
    border: var(--border-width) solid transparent;
  }

  button[kind='tertiary']:hover {
    color: var(--text-color-hover);
    background-color: var(--background-hover);

    cursor: pointer;
  }

  button[kind='tertiary']:active {
    background-color: var(--background-pressed);
  }

  button[kind='tertiary'][disabled] {
    /* Custom */
    color: var(--text-color-disabled);

    background-color: transparent;
    cursor: not-allowed;
  }

`;
