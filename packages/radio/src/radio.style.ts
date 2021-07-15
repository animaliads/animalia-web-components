import { css } from 'lit-element';

export const radioStyle = css`
  :host {
    display: inline-block;
  }

  input[type='radio'] {
    background-color: var(--background);
    border-color: var(--border-color);

    appearance: none;
    border-width: var(--border-width-md);
    border-style: solid;
    border-radius: 100%;
    background-clip: content-box;
    padding: 4px;
    margin: 0;

    cursor: pointer;
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
    box-shadow: var(--shadow-color-hover);
  }

  input[type='radio'][disabled='true'] {
    cursor: not-allowed;
    box-shadow: none;
  }

  input[type='radio'][checked='true'] {
    background-color: var(--fill-color-selected);
    border-color: var(--border-color-selected);
  }

  input[type='radio'][disabled='true'][checked='false'] {
    background-color: var(--background-disabled);
    border-color: var(--border-color-disabled);
    padding: 0;
  }

  input[type='radio'][disabled='true'][checked='true'] {
    background: radial-gradient(
      11px circle at 10px 10px,
      var(--fill-color-disabled) 50%,
      transparent 54.2%
    );
    background-color: var(--background-disabled);
    border-color: var(--border-color-disabled);
    padding: 4px;
  }

  input[type='radio'][disabled='true'][checked='true'][size='large'] {
    background: radial-gradient(
      19px circle at 14px 14px,
      var(--fill-color-disabled) 50%,
      transparent 54.2%
    );
    background-color: var(--background-disabled);
  }

  input[type='radio']:focus {
    outline-color: var(--outline-color-focused);

    outline-width: var(--border-width-lg);
    outline-style: solid;
    outline-offset: 2px;
  }
`;
