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

    background-image: url("data:image/svg+xml,%3Csvg width='14' height='8' viewBox='0 0 14 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.707 0.293006C13.316 -0.0979941 12.684 -0.0979941 12.293 0.293006L7.00001 5.58601L1.70701 0.293006C1.31601 -0.0979941 0.684006 -0.0979941 0.293006 0.293006C-0.0979941 0.684006 -0.0979941 1.31601 0.293006 1.70701L6.29301 7.70701C6.48801 7.90201 6.74401 8.00001 7.00001 8.00001C7.25601 8.00001 7.51201 7.90201 7.70701 7.70701L13.707 1.70701C14.098 1.31601 14.098 0.684006 13.707 0.293006Z' fill='%23515162'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right var(--padding-horizontal) center;
    background-size: var(--font-size) 12px;
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
    background-image: url("data:image/svg+xml,%3Csvg width='14' height='8' viewBox='0 0 14 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.707 0.293006C13.316 -0.0979941 12.684 -0.0979941 12.293 0.293006L7.00001 5.58601L1.70701 0.293006C1.31601 -0.0979941 0.684006 -0.0979941 0.293006 0.293006C-0.0979941 0.684006 -0.0979941 1.31601 0.293006 1.70701L6.29301 7.70701C6.48801 7.90201 6.74401 8.00001 7.00001 8.00001C7.25601 8.00001 7.51201 7.90201 7.70701 7.70701L13.707 1.70701C14.098 1.31601 14.098 0.684006 13.707 0.293006Z' fill='rgb(180, 180, 192)'/%3E%3C/svg%3E");

    color: var(--text-color);
    cursor: not-allowed;
}

option {
  color: var(--text-color);
}
`;
