export const modalStyle = `
    .ani-modal{
        display: none;
    }

    .ani-modal-overlay {
        background-color: var(--color-overlay);
        opacity: var(--opacity-overlay);

        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        overflow hidden;

    }

    .ani-modal-base {

    border-radius: var(--border-radius);
    border-width: var(--border-width);
    border-color: var(--border-color);
    background-color: var(--background);
    box-shadow: var(--shadow);

    border-style: solid;

    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    max-height: 80%;
    transform: translate(-50%, -50%);

  }


  .ani-modal-content {

    padding-left: var(--spacing-md);
    padding-right: var(--spacing-2xl);
    padding-top: var(--spacing-md);
    padding-bottom: var(--spacing-2xl);

    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: auto;

  }

  .ani-modal-header{

    padding-top: var(--spacing-sm);
    padding-right: var(--spacing-md);
    padding-bottom: var(--spacing-sm);
    padding-left: var(--spacing-md);

    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;

  }

  .ani-modal-title{
    font-family: var(--font-family-heading);
    font-weight: var(--font-weight-bold);
    color: var(--color-neutral-dark-90);
    text-align: left;

    font-size: var(--font-size-lg);
    line-height: var(--line-height-sm);
    letter-spacing: var(--letter-spacing-auto);

    padding-right: var(--spacing-md);

  }

  .ani-modal-footer{
    padding-top: var(--spacing-sm);
    padding-right: var(--spacing-md);
    padding-bottom: var(--spacing-sm);
    padding-left: var(--spacing-md);
  }

  //? MEDIA QUERIES

  @media screen and (max-width: 480px) {
    .ani-modal:is(.ani-modal--small, .ani-modal--medium, .ani-modal--large, .ani-modal--extra-large) .ani-modal-base {
        width: 90%;
    }

    .ani-modal.ani-modal--auto {
        width: auto;
        max-width: 70%;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 960px) {
    .ani-modal:is(.ani-modal--small, .ani-modal--medium, .ani-modal--large, .ani-modal--extra-large) .ani-modal-base {
        width: 80%;
    }

    .ani-modal.ani-modal--auto {
        width: auto;
        max-width: 70%;
    }
  }

  @media screen and (min-width: 961px) and (max-width: 1366px) {
    .ani-modal.ani-modal--small {
        width: 40%;
    }

    .ani-modal.ani-modal--medium {
        width: 50%;
    }

    .ani-modal.ani-modal--large {
        width: 60%;
    }

    .ani-modal.ani-modal--extra-large {
        width: 70%;
    }

    .ani-modal.ani-modal--auto {
        width: 70%;
        max-width: 70%;
    }
  }

  @media screen and (min-width: 1367px) {
    .ani-modal.ani-modal--small {
        width: 40%;
    }

    .ani-modal.ani-modal--medium {
        width: 50%;
    }

    .ani-modal.ani-modal--large {
        width: 60%;
    }

    .ani-modal.ani-modal--extra-large {
        width: 70%;
    }

    .ani-modal.ani-modal--auto {
        width: 70%;
        max-width: 70%;
    }
  }
`;
