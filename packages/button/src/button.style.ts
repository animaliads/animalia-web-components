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

  :host([kind='primary']) button {
    background-color: var(--background);
    color: var(--text-color);
    box-shadow: var(--shadow);

    border: none;
  }

  :host([kind='primary']) button:hover {
    background-color: var(--background-hover);
    color: var(--text-color-hover);

    cursor: pointer;
  }

  :host([kind='primary']) button:focus {
    outline-color: var(--outline-color-focused);

    outline-width: var(--border-width-lg);
  }

  :host([kind='primary']) button:active {
    background-color: var(--background-pressed);
    color: var(--text-color-pressed);
    outline-color: var(--outline-color-focused);

    outline-width: var(--border-width-lg);
    cursor: pointer;
  }

  :host([kind='primary'][disabled]) button[aria-disabled='true'] {
    /* Custom */
    background-color: var(--background-disabled);
    color: var(--text-color-disabled);

    /* Fixed */
    cursor: not-allowed;
  }

  :host([kind='primary'][disabled]) button[aria-disabled='true']:focus {
    /* Custom */
    outline-color: var(--outline-color-disabled);

    /* Fixed */
    outline-width: var(--border-width-lg);
    cursor: not-allowed;
  }

  :host([kind='secondary']) button {
    color: var(--text-color);
    border-color: var(--border-color);
    border-width: var(--border-width);

    background-color: transparent;
    border-style: solid;
    box-shadow: var(--shadow-none);
  }

  :host([kind='secondary']) button:hover {
    color: var(--text-color-hover);
    background-color: var(--background-hover);
    border-color: var(--border-color-hover);

    cursor: pointer;
  }

  :host([kind='secondary']) button:focus {
    outline-color: var(--outline-color-focused);

    outline-width: var(--border-width-lg);
  }

  :host([kind='secondary']) button:active {
    color: var(--text-color-pressed);
    background-color: var(--background-pressed);
    border-color: var(--border-color-pressed);
    outline-color: var(--outline-color-focused);

    outline-width: var(--border-width-lg);
    cursor: pointer;
  }

  :host([kind='secondary'][disabled]) button[aria-disabled='true'] {
    /* Custom */
    color: var(--text-color-disabled);
    border-color: var(--border-color-disabled);

    /* Fixed */
    cursor: not-allowed;
  }

  :host([kind='secondary'][disabled]) button[aria-disabled='true']:focus {
    /* Custom */
    outline-color: var(--outline-color-disabled);

    /* Fixed */
    outline-width: var(--border-width-lg);
    cursor: not-allowed;
  }

  :host([kind='tertiary']) button {
    color: var(--text-color);

    background-color: transparent;
    border: none;
    box-shadow: var(--shadow-none);
  }

  :host([kind='tertiary']) button:hover {
    color: var(--text-color-hover);
    background-color: var(--background-hover);

    cursor: pointer;
  }

  :host([kind='tertiary']) button:focus {
    outline-color: var(--outline-color-focused);

    outline-width: var(--border-width-lg);
  }

  :host([kind='tertiary']) button:active {
    color: var(--text-color-pressed);
    background-color: var(--background-pressed);
    outline-color: var(--outline-color-focused);

    outline-width: var(--border-width-lg);
    cursor: pointer;
  }

  :host([kind='tertiary'][disabled]) button[aria-disabled='true'] {
    /* Custom */
    color: var(--text-color-disabled);

    /* Fixed */
    cursor: not-allowed;
  }

  :host([kind='tertiary'][disabled]) button[aria-disabled='true']:focus {
    /* Custom */
    outline-color: var(--outline-color-disabled);

    /* Fixed */
    outline-width: var(--border-width-lg);
    cursor: not-allowed;
  }
`;
