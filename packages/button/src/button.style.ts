import { css } from '@po-ds/utils';

export const style = css`
  button {
    /* Global tokens */
    font-size: var(--font-size-default);
    font-weight: var(--font-weight-bold);
    letter-spacing: var(--letter-spacing-normal);
    transition: var(--transition-default);
    border-radius: var(--border-radius-xs);
    padding: var(--spacing-inset-squish-sm);

    /* Brand tokens */
    font-family: var(--pods-button-font-family);

    display: inline-block;
    height: 44px;
    cursor: pointer;

    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    text-align: center;
  }

  .primary {
    /* Global tokens */
    box-shadow: var(--shadow);

    /* Brand tokens */
    background-color: var(--pods-button-primary-background);
    border: 1px solid var(--pods-button-primary-border-color);
    color: var(--color);
  }

  .default {
    border: solid 2px var(--pods-button-secondary-border-color);
    background-color: var(--pods-button-default-background);
    color: var(--pods-button-default-font-color);
  }

  .secondary {
    background-color: var(--pods-button-secondary-background);
    color: var(--pods-button-secondary-font-color);
    border: solid 4px var(--pods-button-secondary-border-color);
  }

  button:focus {
    outline: none;
    box-shadow: var(--shadow-focus);
  }

  button.primary:hover {
    background-color: var(--pods-button-primary-background-hover);
    border-color: var(--pods-button-primary-border-color-hover);
  }

  button.default:hover {
    color: var(--pods-button-default-font-color-hover);
    border-color: var(--pods-button-default-border-color-hover);
  }

  button.secondary:hover {
    background-color: var(--pods-button-secondary-background-hover);
    border-color: var(--pods-button-secondary-border-color-hover);
  }

  button.disabled {
    cursor: not-allowed;
  }

  button.primary.disabled {
    background-color: var(--pods-button-primary-background-disabled);
    border: 1px solid var(--pods-button-primary-border-color-disabled);
  }

  button.default.disabled {
    border: solid 2px var(--pods-button-default-border-color-disabled);
    color: var(--pods-button-default-font-color-disabled);
    background-color: var(--pods-button-default-background-disabled);
  }

  button.secondary.disabled {
    background-color: #6e7c7f;
    border-color: #6e7c7f;
  }
`;
