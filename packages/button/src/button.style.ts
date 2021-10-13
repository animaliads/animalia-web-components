export const style = `
  button {
    font-family: var(--font-family);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height);
    border-radius: var(--border-radius);
    border-width: var(--border-width);
    padding: var(--padding);

    letter-spacing: var(--letter-spacing-auto);
    width: inherit;
    border-style: solid;
    min-height: 2.75em;
    cursor: pointer;
  }

  button[size='small'], button[size='medium'], button[size='large'] {
    font-size: var(--font-size);
    line-height: var(--line-height);
    padding: var(--padding);
  }

  button[size='small'] {
    min-height: 2em;
  }
  
  button[size='large'] {
    min-height: 3.5em;
  }

  button[kind='primary'] {
    color: var(--text-color);
    background-color: var(--color);
    box-shadow: var(--shadow);

    border-color: transparent;
  }

  button[kind='primary']:hover {
    color: var(--text-color);
    background-color: var(--color-hover);
  }

  button[kind='primary']:active {
    background-color: var(--color-pressed);
  }


  button:focus, button:enabled:active {
    outline-color: var(--outline-color-focused);

    outline-width: var(--border-width-lg);
    outline-style: solid;
    outline-offset: 2px;
  }

  button[kind='secondary'] {
    color: var(--color);
    border-color: var(--color);

    background-color: transparent;
    box-shadow: var(--shadow-none);
  }

  button[kind='secondary']:hover {
    background-color: var(--background-hover);
    border-color: var(--border-color-hover);
    color: var(--border-color-hover);
  }

  button[kind='secondary']:enabled:active {
    background-color: var(--background-pressed);
    border-color: var(--border-color-hover);
    color: var(--border-color-hover);
  }

  button[kind='tertiary'] {
    color: var(--color);

    background-color: transparent;
    border-color: transparent;
    box-shadow: var(--shadow-none);
  }

  button[kind='tertiary']:hover {
    color: var(--border-color-hover);
    background-color: var(--background-hover);
  }

  button[kind='tertiary']:enabled:active {
    background-color: var(--background-pressed);
    color: var(--color-pressed);
  }

  button[kind='primary'][danger="true"] {
    color: var(--text-color-danger);
    background-color: var(--color-danger);

    border-color: transparent;
  }
  
  button[kind='primary'][danger="true"]:enabled:hover {
    background-color: var(--color-danger-hover);
  }
  
  button[kind='primary'][danger="true"]:enabled:active {
    background-color: var(--color-danger-pressed);
  }

  button[kind='secondary'][danger="true"] {
    color: var(--color-danger);
    border-color: var(--color-danger);
  }
  
  button[kind='secondary'][danger="true"]:enabled:hover {
    background-color: var(--background-danger-hover);
    border-color: var(--border-color-danger-hover);

    color: var(--border-color-danger-hover);
  }
  
  button[kind='secondary'][danger="true"]:enabled:active {
    background-color: var(--background-danger-pressed);
    border-color: var(--border-color-danger-hover);

    color: var(--border-color-danger-hover);
  }


  button:disabled {
    cursor: not-allowed; 
  }

  button[kind='primary']:disabled {
    color: var(--text-color-disabled);
    background-color: var(--color-disabled);
  }

  button[kind='secondary']:disabled {
    color: var(--color-disabled);
    border-color: var(--color-disabled);

    background-color: transparent;
  }

  button[kind='tertiary']:disabled {
    color: var(--color-disabled);

    background-color: transparent;
  }

`;
