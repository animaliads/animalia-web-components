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

  a:visited {
    color: var(--text-color-visited);
  }

  a:hover {
    color: var(--text-color-hover);

    cursor: pointer;
  }

  a:focus {
    color: var(--text-color-focus);
    outline-color: var(--outline-color-focused);

    outline-width: var(--border-width-lg);
    outline-style: solid;
    outline-offset: 2px;
  }

  a:active {
    color: var(--text-color-pressed);
    outline-color: var(--outline-color-focused);

    outline-width: var(--border-width-lg);
    outline-style: solid;
    outline-offset: 2px;
    cursor: pointer;
  }
`;
