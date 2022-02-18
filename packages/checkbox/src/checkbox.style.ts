export const checkboxStyle = `
  :host {
    display: inline-block;
    cursor: pointer;

    --width-md: 24px;
    --width-lg: 32px;
  }

  .checkbox {
    width: var(--width-md);
    height: var(--width-md);
    box-sizing: border-box;
    display: inline-block;
    background-color: var(--color-unchecked);
    border-color: var(--border-color);

    border-width: var(--border-width-md);
    border-style: solid;
    border-radius: var(--border-radius-md);

    position: relative;
  }

  .checkbox:hover {
    border-color: var(--color-hover);
    box-shadow: 0 0 0 var(--border-width-lg) var(--shadow-color-hover);
  }

  [aria-disabled='true'].checkbox:focus {
    outline: none;
  }

  .checkbox:focus-visible {
    outline-color: var(--outline-color-focused);

    outline-width: var(--border-width-lg);
    outline-style: solid;
    outline-offset: 2px;
  }

  [aria-checked='true'],
  [aria-checked='mixed'] {
    background-color: var(--color-checked);

    border-color: transparent;
  }

  [aria-checked='true']:hover,
  [aria-checked='mixed']:hover {
    background-color: var(--color-hover);
  }
  .checkbox[aria-disabled='true'] {
    background-color: var(--color-unchecked-disabled);
    border-color: var(--color-checked-disabled);

    box-shadow: none;
  }

  [aria-checked='true'][aria-disabled='true'],
  [aria-checked='mixed'][aria-disabled='true'] {
    background-color: var(--color-checked-disabled);
  }

  :host([disabled])  {
    cursor: not-allowed;
  }

  :host([disabled='false'])  {
    cursor: pointer;
  }

  [size='large'] {
    width: var(--width-lg);
    height: var(--width-lg);
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  path,
  rect {
    fill: var(--color-unchecked);
  }
`;
