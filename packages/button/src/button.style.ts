import { css } from 'lit-element';

export const style = css`
  button {
    /* Custom */
    font-family: var(--font-family);
    color: var(--text-color);
    font-size: var(--font-size);
    line-height: var(--line-height);

    background-color: var(--background);
    border-radius: var(--border-radius);
    padding: var(--spacing-squish);

    /* Fixed */
    font-weight: var(--font-weight-bold);
    letter-spacing: var(--letter-spacing-auto);
    border: none;
  }

  button:hover {
    /* Custom */
    background-color: var(--background-hover);

    /* Fixed */
    cursor: cursor-pointer;
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

  :host([disabled='true']) button {
    /* Custom */
    background-color: var(--background-disabled);

    /* Fixed */
    cursor: cursor-not-allowed;
  }

  .disabled:focus {
    /* Custom */
    outline-color: var(--outline-color-disabled);

    /* Fixed */
    outline-offset: 2px;
    outline-width: var(--border-width-lg);
  }
`;
