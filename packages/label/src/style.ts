export const style = `
  label {
    // font-family: var(--font-family, --font-family-text);
    // font-size: var(--font-size, --font-size-default);
    // line-height: var(--line-height, --line-height-md);
    // color: var(--text-color-disabled, --color-neutral-mid-60);

    font-family: var(--font-family-text);
    font-size: var(--font-size-default);
    line-height: var(--line-height-md);
    color: var(--color-neutral-mid-60);
  }

  label slot {
    // color: var(--text-color, --color-neutral-dark-90);
    color: var(--color-neutral-dark-90);
  }

  label[disabled] {
    // color: var(--text-color-disabled, --color-neutral-mid-60);
    color: var(--color-neutral-mid-60);
  }
`;
