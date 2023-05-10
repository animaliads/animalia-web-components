export const style = `
  label {
    font-family: var(--font-family);
    font-size: var(--font-size);
    line-height: var(--line-height);
    
    color: var(--text-color-disabled);
  }

  label slot {
    color: var(--text-color);
  }

  label[disabled] {
    color: var(--text-color-disabled);
  }
`;
