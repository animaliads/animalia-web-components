export const style = `
:host {
    display: inline-block;
    height: var(--size, 24px);
}
svg {
    width: var(--size);
    height: var(--size);
}
path, rect {
    fill: var(--color);
}
`;
