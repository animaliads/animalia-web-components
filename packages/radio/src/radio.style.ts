import { css } from 'lit-element';

export const radioStyle = css`
  * {
    cursor: pointer;
  }

  :host {
    display: inline-block;

    --width-md: 24px;
    --width-lg: 32px;

    --offset-checked: 6px;

    --circle-width-md: calc(var(--width-md) - 12px);
    --circle-width-lg: calc(var(--width-lg) - 12px);

    --background-radial-md: radial-gradient(
      var(--circle-width-md) circle at 10px 10px,
      var(--color-selected) 50%,
      transparent 57%
    );

    --background-radial-lg: radial-gradient(
      var(--circle-width-lg) circle at 14px 14px,
      var(--color-selected) 50%,
      transparent 54.2%
    );

    --background-radial-md-disabled: radial-gradient(
      var(--circle-width-md) circle at 10px 10px,
      var(--color-disabled) 50%,
      transparent 57%
    );

    --background-radial-lg-disabled: radial-gradient(
      var(--circle-width-lg) circle at 14px 14px,
      var(--color-disabled) 50%,
      transparent 54.2%
    );
  }

  input[type='radio'] {
    background-color: var(--background);
    border-color: var(--color);

    appearance: none;
    border-width: var(--border-width-md);
    border-style: solid;
    border-radius: 100%;
    background-clip: content-box;
    margin: 0;
  }

  input[size='medium'] {
    width: var(--width-md);
    height: var(--width-md);
  }

  input[size='large'] {
    width: var(--width-lg);
    height: var(--width-lg);
  }

  input[type='radio']:hover {
    box-shadow: 0 0 0 var(--border-width-lg) var(--shadow-color-hover);
    border-color: var(--color-hover);
  }

  :host([disabled]),
  input[type='radio'][aria-disabled='true'],
  input[type='radio'][aria-disabled='true'] + slot {
    cursor: not-allowed;
  }

  input[type='radio'][aria-disabled='true'] {
    box-shadow: none;
  }

  input[type='radio']:checked {
    background: var(--background-radial-md);
    background-color: var(--background);
    border-color: var(--color-selected);
    padding: 4px;
  }

  input[type='radio'][size='large']:checked {
    background: var(--background-radial-lg);
    background-color: var(--background);
  }

  input[type='radio'][aria-disabled='true'] {
    background-color: var(--background-disabled);
    border-color: var(--color-disabled);
  }

  input[type='radio'][aria-disabled='true']:checked {
    background: var(--background-radial-md-disabled);
    background-color: var(--background-disabled);
  }

  input[type='radio'][aria-disabled='true'][size='large']:checked {
    background: var(--background-radial-lg-disabled);
    background-color: var(--background-disabled);
  }

  input[type='radio']:focus-visible {
    outline-color: var(--outline-color-focused);

    outline-width: var(--border-width-lg);
    outline-style: solid;
    outline-offset: 2px;
  }
`;
