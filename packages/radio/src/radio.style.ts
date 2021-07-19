export const radioStyle = `
  * {
    cursor: pointer;
  }

  :host {
    display: inline-block;
  }

  input[type='radio'] {
    background-color: var(--background);
    border-color: var(--color);

    appearance: none;
    border-width: var(--border-width-md);
    border-style: solid;
    border-radius: 100%;
    background-clip: content-box;
    padding: 4px;
    margin: 0;
  }

  input[size='medium'] {
    width: 24px;
    height: 24px;
  }

  input[size='large'] {
    width: 32px;
    height: 32px;
  }

  input[type='radio']:hover {
    box-shadow: 0 0 0 var(--border-width-lg) var(--shadow-color-hover);
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
    background-color: var(--color-selected);
    border-color: var(--color-selected);
  }

  input[type='radio'][aria-disabled='true'] {
    background-color: var(--background-disabled);
    border-color: var(--color-disabled);
    padding: 0;
  }

  input[type='radio'][aria-disabled='true']:checked {
    background: radial-gradient(
      11px circle at 10px 10px,
      var(--color-disabled) 50%,
      transparent 54.2%
    );
    background-color: var(--background-disabled);
    border-color: var(--color-disabled);
    padding: 4px;
  }

  input[type='radio'][aria-disabled='true'][size='large']:checked {
    background: radial-gradient(
      19px circle at 14px 14px,
      var(--color-disabled) 50%,
      transparent 54.2%
    );
    background-color: var(--background-disabled);
  }

  input[type='radio']:focus-visible {
    outline-color: var(--outline-color-focused);

    outline-width: var(--border-width-lg);
    outline-style: solid;
    outline-offset: 2px;
  }
`;
