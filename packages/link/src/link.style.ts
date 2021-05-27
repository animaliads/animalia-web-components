export const linkStyle = `
  a {
    font-family: var(--font-family);
    color: var(--text-color);

    font-weight: var(--font-weight-bold);
    letter-spacing: var(--letter-spacing-auto);
    text-decoration: underline;
    font-size: inherit;
    line-height: inherit;
  }

  a:hover {
    color: var(--text-color-hover);

    cursor: pointer;
  }

  a:focus-visible {
    color: var(--text-color-focus);
    outline-color: var(--outline-color-focused);

    outline-width: var(--border-width-lg);
  }

  a:active {
    color: var(--text-color-pressed);
    outline-color: var(--outline-color-focused);

    outline-width: var(--border-width-lg);
    cursor: pointer;
  }

  a:visited {
    color: var(--text-color-visited);
  }
`;
