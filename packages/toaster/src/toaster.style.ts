import { ToasterKind } from './toaster.model';

export const style = `
  ani-button{--font-family:var(--font-family-text);--font-size:var(--font-size-default);--font-weight:var(--font-weight-bold);--line-height:var(--line-height-none);--border-radius:var(--border-radius-md);--border-width:var(--border-width-md);--padding:0 1em;--text-color-danger:var(--color-neutral-light-00);--color-danger:var(--color-feedback-negative-dark);--color-danger-hover:var(--color-feedback-negative-darker);--color-danger-pressed:var(--color-feedback-negative-darkest);--background-danger-hover:var(--color-feedback-negative-lighter);--border-color-danger-hover:var(--color-feedback-negative-darkest);--background-danger-pressed:var(--color-feedback-negative-light);--text-color:var(--color-neutral-light-00);--color:var(--color-action-default);--shadow:var(--shadow-none);--color-hover:var(--color-action-hover);--outline-color-focused:var(--color-action-focus);--color-pressed:var(--color-action-pressed);--text-color-disabled:var(--color-neutral-dark-70);--color-disabled:var(--color-action-disabled)}ani-button[kind=secondary],ani-button[kind=tertiary]{--background-hover:var(--color-brand-01-lighter);--border-color-hover:var(--color-brand-01-darkest);--background-pressed:var(--color-brand-01-light)}ani-button[size=small]{--font-size:var(--font-size-sm);--line-height:var(--line-height-none);--padding:0 0.5em}ani-button[size=large]{--font-size:var(--font-size-default);--line-height:var(--line-height-none);--padding:0 1.5em}

  :host {
    /* Custom */
    --border-radius: var(--border-radius-md);
    --shadow: var(--shadow-lg);
    --color-icon: var(--color-neutral-light-00);
    --color-success: var(--color-feedback-positive-base);
    --background-success: var(--color-feedback-positive-lightest);
    --border-color-success: var(--color-feedback-positive-lighter);
    --color-error: var(--color-feedback-negative-base);
    --background-error: var(--color-feedback-negative-lightest);
    --border-color-error: var(--color-feedback-negative-lighter);
    --color-icon-warning: var(--color-neutral-dark-90);
    --color-warning: var(--color-feedback-warning-base);
    --background-warning: var(--color-feedback-warning-lightest);
    --border-color-warning: var(--color-feedback-warning-lighter);
    --color-info: var(--color-feedback-info-base);
    --background-info: var(--color-feedback-info-lightest);
    --border-color-info: var(--color-feedback-info-lighter);

    display: block;
    max-width: 50vw;
    min-width: 20rem;

    font-family: var(--font-family-text);

    border-radius: var(--border-radius);
  }

  .toaster__container {
    display: flex;
    flex-flow: row nowrap;

    box-shadow: var(--shadow);
    border-radius: var(--border-radius);
  }

  .toaster__icon-wrapper {
    padding: var(--spacing-sm);

    border-top-left-radius: var(--border-radius);
    border-bottom-left-radius: var(--border-radius);
  }

  .toaster__icon-wrapper ani-icon {
    --color: var(--color-icon);
  }

  .toaster__body {
    display: flex;
    flex-flow: row nowrap;
    flex-grow: 1;
    justify-content: space-between;
  }

  .toaster__body,
  .toaster__close-action-wrapper {
    box-sizing: border-box;
  }

  .toaster__message {
    all: unset;

    line-height: var(--line-height-md);
    font-size: var(--font-size-default);

    padding: calc(var(--spacing-sm) - var(--border-width-sm));
  }

  .toaster__action-wrapper,
  .toaster__close-action-wrapper {
    display: flex;
    flex-flow: row nowrap;
    padding: calc(var(--spacing-xs) - var(--border-width-sm)) 0;
  }

  .toaster__action-wrapper {
    z-index: 1;
  }

  .toaster__close-action-wrapper::before {
    content: '';
    display: inline-block;
    height: 100%;
    width: 0;
    margin: 0 0.25rem;
  }

  .toaster__close-action-wrapper {
    padding-right: var(--spacing-xs);

    border-top-right-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
  }

  .toaster__body,
  .toaster__close-action-wrapper {
    border-top-style: solid;
    border-bottom-style: solid;
    border-top-width: var(--border-width-sm);
    border-bottom-width: var(--border-width-sm);
  }

  .toaster__close-action-wrapper,
  .toaster__close-action-wrapper::before {
    border-right-style: solid;
    border-right-width: var(--border-width-sm);
  }

  /* Success */
  :host([kind="${ToasterKind.SUCCESS}"]) {
    background-color: var(--background-success);
  }

  :host([kind="${ToasterKind.SUCCESS}"]) .toaster__icon-wrapper {
    background-color: var(--color-success);
  }

  :host([kind="${ToasterKind.SUCCESS}"]) .toaster__body,
  :host([kind="${ToasterKind.SUCCESS}"]) .toaster__close-action-wrapper {
    border-top-color: var(--border-color-success);
    border-bottom-color: var(--border-color-success);
  }

  :host([kind="${ToasterKind.SUCCESS}"]) .toaster__close-action-wrapper,
  :host([kind="${ToasterKind.SUCCESS}"]) .toaster__close-action-wrapper::before {
    border-right-color: var(--border-color-success);
  }

  /* Error */
  :host([kind="${ToasterKind.ERROR}"]) {
    background-color: var(--background-error);
  }

  :host([kind="${ToasterKind.ERROR}"]) .toaster__icon-wrapper {
    background-color: var(--color-error);
  }

  :host([kind="${ToasterKind.ERROR}"]) .toaster__body,
  :host([kind="${ToasterKind.ERROR}"]) .toaster__close-action-wrapper {
    border-top-color: var(--border-color-error);
    border-bottom-color: var(--border-color-error);
  }

  :host([kind="${ToasterKind.ERROR}"]) .toaster__close-action-wrapper,
  :host([kind="${ToasterKind.ERROR}"]) .toaster__close-action-wrapper::before {
    border-right-color: var(--border-color-error);
  }

  /* Warning */
  :host([kind="${ToasterKind.WARNING}"]) {
    background-color: var(--background-warning);
  }

  :host([kind="${ToasterKind.WARNING}"]) .toaster__icon-wrapper ani-icon {
    --color: var(--color-icon-warning);
  }

  :host([kind="${ToasterKind.WARNING}"]) .toaster__icon-wrapper {
    background-color: var(--color-warning);
  }

  :host([kind="${ToasterKind.WARNING}"]) .toaster__body,
  :host([kind="${ToasterKind.WARNING}"]) .toaster__close-action-wrapper {
    border-top-color: var(--border-color-warning);
    border-bottom-color: var(--border-color-warning);
  }

  :host([kind="${ToasterKind.WARNING}"]) .toaster__close-action-wrapper,
  :host([kind="${ToasterKind.WARNING}"]) .toaster__close-action-wrapper::before {
    border-right-color: var(--border-color-warning);
  }

  /* Info */
  :host([kind="${ToasterKind.INFO}"]) {
    background-color: var(--background-info);
  }

  :host([kind="${ToasterKind.INFO}"]) .toaster__icon-wrapper {
    background-color: var(--color-info);
  }

  :host([kind="${ToasterKind.INFO}"]) .toaster__body,
  :host([kind="${ToasterKind.INFO}"]) .toaster__close-action-wrapper {
    border-top-color: var(--border-color-info);
    border-bottom-color: var(--border-color-info);
  }

  :host([kind="${ToasterKind.INFO}"]) .toaster__close-action-wrapper,
  :host([kind="${ToasterKind.INFO}"]) .toaster__close-action-wrapper::before {
    border-right-color: var(--border-color-info);
  }
`;
