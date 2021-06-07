import { css } from 'lit-element';

export const style = css`
  button {
    /* Custom */
    font-family: var(--font-family);
    font-size: var(--font-size);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height);
    border-radius: var(--border-radius);
    padding: var(--spacing-squish);

    /* Fixed */
    letter-spacing: var(--letter-spacing-auto);
  }

  button[kind='primary'] {
    background-color: var(--background);
    color: var(--text-color);
    box-shadow: var(--shadow);

    border: none;
  }

  button[kind='primary']:hover {
    background-color: var(--background-hover);
    color: var(--text-color-hover);

    cursor: pointer;
  }

  button[kind='primary']:focus {
    outline-color: var(--outline-color-focused);

    outline-width: var(--border-width-lg);
  }

  button[kind='primary']:active {
    background-color: var(--background-pressed);
    color: var(--text-color-pressed);
    outline-color: var(--outline-color-focused);

    outline-width: var(--border-width-lg);
    cursor: pointer;
  }

  button[kind='primary'][aria-disabled='true'] {
    /* Custom */
    background-color: var(--background-disabled);
    color: var(--text-color-disabled);

    /* Fixed */
    cursor: not-allowed;
  }

  button[kind='primary'][aria-disabled='true']:focus {
    /* Custom */
    outline-color: var(--outline-color-disabled);

    /* Fixed */
    outline-width: var(--border-width-lg);
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
    color: var(--text-color-hover);
    background-color: var(--background-hover);
    border-color: var(--border-color-hover);

    cursor: pointer;
  }

  button[kind='secondary']:focus {
    outline-color: var(--outline-color-focused);

    outline-width: var(--border-width-lg);
  }

  button[kind='secondary']:active {
    color: var(--text-color-pressed);
    background-color: var(--background-pressed);
    border-color: var(--border-color-pressed);
    outline-color: var(--outline-color-focused);

    outline-width: var(--border-width-lg);
    cursor: pointer;
  }

  button[kind='secondary'][aria-disabled='true'] {
    /* Custom */
    color: var(--text-color-disabled);
    border-color: var(--border-color-disabled);

    /* Fixed */
    cursor: not-allowed;
  }

  button[kind='secondary'][aria-disabled='true']:focus {
    /* Custom */
    outline-color: var(--outline-color-disabled);

    /* Fixed */
    outline-width: var(--border-width-lg);
    cursor: not-allowed;
  }

  button[kind='tertiary'] {
    color: var(--text-color);

    background-color: transparent;
    border: none;
    box-shadow: var(--shadow-none);
  }

  button[kind='tertiary']:hover {
    color: var(--text-color-hover);
    background-color: var(--background-hover);

    cursor: pointer;
  }

  button[kind='tertiary']:focus {
    outline-color: var(--outline-color-focused);

    outline-width: var(--border-width-lg);
  }

  button[kind='tertiary']:active {
    color: var(--text-color-pressed);
    background-color: var(--background-pressed);
    outline-color: var(--outline-color-focused);

    outline-width: var(--border-width-lg);
    cursor: pointer;
  }

  button[kind='tertiary'][aria-disabled='true'] {
    /* Custom */
    color: var(--text-color-disabled);

    /* Fixed */
    cursor: not-allowed;
  }

  button[kind='tertiary'][aria-disabled='true']:focus {
    /* Custom */
    outline-color: var(--outline-color-disabled);

    /* Fixed */
    outline-width: var(--border-width-lg);
    cursor: not-allowed;
  }
`;
