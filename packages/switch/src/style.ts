export const style = `
  .container {
    height: 1.5rem;
    position: relative;
    width: 3rem;
  }

  .track {
    background-color: var(--track-unchecked);

    height: 1rem;
    width: 3rem;
    border-radius: 400px;
    position: absolute;
    top: 50%;
    transform: translate(0%, -50%);
    cursor: pointer;
  }

  .label {
    cursor: pointer;
  }

  .toggle {
    background-color: var(--color-unchecked);
    border: var(--border-width-md) solid var(--border-color);

    border-radius: 100%;
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    top: -0.25rem;
    box-sizing: border-box;
  }

  .toggle:hover {
    background-color: var(--color-unchecked-hover);

    border-color: var(--color-checked-hover);
  }
  
  [aria-checked='true'] .toggle:hover {
    background-color: var(--color-checked-hover);
  }

  [aria-checked='true'] .track{
    background-color: var(--track-checked);
  }

  [aria-checked='true'] .toggle {
    background-color: var(--color-checked);
    border-color: transparent;
    left: 1.5rem;
  }

  [aria-disabled='true'] .track, :host([disabled]) .label {
    cursor: not-allowed;
  }

  :host([disabled='false'])  {
    cursor: pointer;
  }

  [aria-disabled='true'] .toggle {
    background: var(--color-unchecked-disabled);

    border-color: var(--color-checked-disabled);
  }
  
  [aria-checked='true'][aria-disabled='true'] .toggle {
    background: var(--color-checked-disabled);
  }

  [aria-checked='true'][aria-disabled='true'] .track{
    background-color: var(--track-unchecked);
  }

  .container:focus-visible {
    outline-color: var(--outline-color-focused);

    outline-width: var(--border-width-lg);
    outline-style: solid;
    outline-offset: 2px;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  path {
    fill: var(--color-unchecked);
  }

  [aria-checked='false'] path {
    fill: transparent;
  }
`;
