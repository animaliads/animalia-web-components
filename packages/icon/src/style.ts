export const style = `
  :host {
      display: inline-block;
  }

  :host([size="small"]), :host([size="small"]) svg {
      width: 1rem;
      height: 1rem;
  }

  :host([size="medium"]), :host([size="medium"]) svg {
      width: 1.5rem;
      height: 1.5rem;
  }

  :host([size="large"]), :host([size="large"]) svg {
      width: 2rem;
      height: 2rem;
  }

  path, rect {
      fill: var(--color);
  }
`;
