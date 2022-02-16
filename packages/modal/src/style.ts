export const modalStyle = `
  :host {
    display: block;
  }

  :host * {
    box-sizing: border-box;
  }

  .modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
  }

  .modal-overlay {
    background-color: var(--color-overlay);
    opacity: var(--opacity-overlay);

    position: absolute;
    width: 100%;
    height: 100%;
  }

  .modal-dialog {
    border-radius: var(--border-radius);
    border-width: var(--border-width);
    border-color: var(--border-color);
    background-color: var(--background);
    box-shadow: var(--shadow);

    border-style: solid;

    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    max-height: 80%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
  }

  .modal-dialog:focus {
    outline-color: var(--outline-color-focused);

    outline-width: var(--border-width-lg);
    outline-style: solid;
    outline-offset: 2px;
  }

  .modal-header {
    padding-top: var(--spacing-sm);
    padding-right: var(--spacing-md);
    padding-bottom: var(--spacing-sm);
    padding-left: var(--spacing-md);

    border-bottom-color: var(--color-divider);
    border-bottom-width: var(--border-width-sm);
    border-bottom-style: solid;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .modal-title {
    font-family: var(--font-family-heading);
    font-weight: var(--font-weight-bold);
    color: var(--color-neutral-dark-90);
    text-align: left;

    font-size: var(--font-size-lg);
    line-height: var(--line-height-sm);
    letter-spacing: var(--letter-spacing-auto);

    padding-right: var(--spacing-md);

    margin: 0;
  }

  .modal-close {
    align-self: flex-start;
  }

  .modal-body {
    padding-left: var(--spacing-md);
    padding-right: var(--spacing-2xl);
    padding-top: var(--spacing-md);
    padding-bottom: var(--spacing-2xl);

    overflow-y: auto;
  }

  .modal-footer {
    padding-top: var(--spacing-sm);
    padding-right: var(--spacing-md);
    padding-bottom: var(--spacing-sm);
    padding-left: var(--spacing-md);

    border-top-color: var(--color-divider);
    border-top-width: var(--border-width-sm);
    border-top-style: solid;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }

  @media screen and (max-width: 480px) {
    .modal:is([size="small"], [size="medium"], [size="large"], [size="extra-large"]) .modal-dialog {
      width: 90%;
    }

    .modal[size="auto"] .modal-dialog {
      width: auto;
      max-width: 70%;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 960px) {
    .modal:is([size="small"], [size="medium"], [size="large"], [size="extra-large"]) .modal-dialog {
      width: 80%;
    }

    .modal[size="auto"] .modal-dialog {
      width: auto;
      max-width: 70%;
    }
  }

  @media screen and (min-width: 961px) and (max-width: 1366px) {
    .modal[size="small"] .modal-dialog {
      width: 40%;
    }

    .modal[size="medium"] .modal-dialog {
      width: 50%;
    }

    .modal[size="large"] .modal-dialog {
      width: 60%;
    }

    .modal[size="extra-large"] .modal-dialog {
      width: 70%;
    }

    .modal[size="auto"] .modal-dialog {
      width: 70%;
      max-width: 70%;
    }
  }

  @media screen and (min-width: 1367px) {
    .modal[size="small"] .modal-dialog {
      width: 40%;
    }

    .modal[size="medium"] .modal-dialog {
      width: 50%;
    }

    .modal[size="large"] .modal-dialog {
      width: 60%;
    }

    .modal[size="extra-large"] .modal-dialog {
      width: 70%;
    }

    .modal[size="auto"] .modal-dialog {
      width: 70%;
      max-width: 70%;
    }
  }
`;
