export const style = `
select {
    font-family: var(--font-family);
    font-size: var(--font-size);
    color: var(--text-color);
    border-color: var(--color);
    background-color: var(--background);
    padding: var(--padding-vertical) var(--padding-horizontal);

    font-weight: var(--font-weight-normal);
    border-width: var(--border-width-sm);
    border-radius: var(--border-radius-md);
    border-style: solid;
    min-height: 2.75em;

    -webkit-appearance: none;
    appearance: none;
    width: 100%;

    background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M18.707 8.29301C18.316 7.90201 17.684 7.90201 17.293 8.29301L12 13.586L6.70701 8.29301C6.31601 7.90201 5.68401 7.90201 5.29301 8.29301C4.90201 8.68401 4.90201 9.31601 5.29301 9.70701L11.293 15.707C11.488 15.902 11.744 16 12 16C12.256 16 12.512 15.902 12.707 15.707L18.707 9.70701C19.098 9.31601 19.098 8.68401 18.707 8.29301Z' fill='%23515162'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: right var(--padding-horizontal) center;
    background-size: 24px;
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
    background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M18.707 8.29301C18.316 7.90201 17.684 7.90201 17.293 8.29301L12 13.586L6.70701 8.29301C6.31601 7.90201 5.68401 7.90201 5.29301 8.29301C4.90201 8.68401 4.90201 9.31601 5.29301 9.70701L11.293 15.707C11.488 15.902 11.744 16 12 16C12.256 16 12.512 15.902 12.707 15.707L18.707 9.70701C19.098 9.31601 19.098 8.68401 18.707 8.29301Z' fill='%23B4B4C0'/%3E%3C/svg%3E%0A");

    color: var(--text-color);
    cursor: not-allowed;
}

option {
  color: var(--text-color);
}
`;
