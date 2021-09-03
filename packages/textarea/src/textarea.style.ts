export const style = `
  textarea {
    font-family: var(--font-family);
    font-size: var(--font-size);
    border-color: var(--color);
    background: var(--background);
    color: var(--text-color);

    font-weight: var(--font-weight-normal);
    line-height: var(--line-height-md);
    padding: var(--spacing-squish-sm);
    border-radius: var(--border-radius-md);
    border-width: var(--border-width-sm);
    border-style: solid;
    width: 100%;
    box-sizing: border-box;
    resize: both;
  }

  textarea::placeholder {
    color: var(--text-color-placeholder);
  }

  textarea:hover {
    border-color: var(--color-hover);
    background: var(--background-hover);
  }

  textarea:focus-visible {
    border-color: var(--color-focused);
    outline-color: var(--outline-color-focused);

    outline-width: var(--border-width-lg);
    outline-style: solid;
    outline-offset: 2px;
  }

  textarea:read-only {
    border-color: var(--color-disabled);
    background: var(--background);
    color: var(--text-color-disabled);
  }

  textarea:disabled {
    border-color: var(--color-disabled);
    background: var(--background-disabled);
    color: var(--text-color-disabled);

    cursor: not-allowed;
  }
`;
