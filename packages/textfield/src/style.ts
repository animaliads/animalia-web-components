export const style = `
input {
    font-family: var(--font-family);
    font-size: var(--font-size);

    color: var(--text-color);
    background-color: var(--background);
    padding: var(--padding);
    
    border: var(--border-width-sm) solid var(--color);
    
    font-weight: var(--font-weight-normal);
    border-radius: var(--border-radius-md);
    min-height: 2.75em;
    box-sizing: border-box;
}

input::placeholder {
    color: var(--text-color-placeholder); 
}

input:hover {
    border-color: var(--color-hover);
    background-color: var(--background-hover);
}

input:focus {
    border-color: var(--color-focused);
    outline-color: var(--outline-color-focused);

    outline-width: var(--border-width-lg);
    outline-style: solid;
    outline-offset: 2px;
}

input:read-only {
    border-color: var(--color-disabled);
    background-color: var(--background);
    color: var(--text-color-disabled);

    cursor: text;
}

input:disabled {
    border-color: var(--color-disabled);
    background-color: var(--background-disabled);
    color: var(--text-color-disabled);

    cursor: not-allowed;
}
`;
