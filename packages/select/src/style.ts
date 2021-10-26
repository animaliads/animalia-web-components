export const style = `
select {
    font-family: var(--font-family);
    font-size: var(--font-size);
    color: var(--text-color);
    border-color: var(--color);
    background-color: var(--background);
    padding: var(--padding);

    font-weight: var(--font-weight-normal);
    border-width: var(--border-width-sm);
    border-radius: var(--border-radius-md);
    border-style: solid;
    min-height: 2.75em;
    
    appearance: none;
    padding-right: 24px;
    width: 100%;
}

select:hover {
    border-color: var(--color-hover);
    background-color: var(--background-hover);

    cursor: pointer;
}

select:focus {
    border-color: var(--color-focused);
    outline-color: var(--outline-color-focused);

    outline-width: var(--border-width-lg);
    outline-style: solid;
    outline-offset: 2px;
}

select:disabled {
    border-color: var(--color-disabled);
    background-color: var(--background-disabled);

    color: var(--text-color);
    cursor: not-allowed;
}

.container {
    position: relative;
}

svg {
    position: absolute;
    right: 0.5em;
    top: 50%;
    transform: translate(0, -50%);
}

path {
    fill: var(--color);
}

select:hover + svg path {
    fill: var(--color-hover);
}

select:focus + svg path {
    fill: var(--color-focused);
}

select:disabled + svg path {
    fill: var(--color-disabled);
}
`;
