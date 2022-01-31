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

    font-size: var(--font-size-lg);
    line-height: var(--line-height-sm);
    letter-spacing: var(--letter-spacing-auto);

    padding-right: var(--spacing-md);

  }

  .ani-modal-close{
   
  }

  .ani-modal-divider{

  }

  .ani-modal-footer{
      
  }

  //? MEDIA QUERIES

  @media screen and (max-width: 480px) {
    .ani-modal-base:is(.ani-modal-base-sm, .ani-modal-base-md, .ani-modal-base-lg, .ani-modal-base-xl) {
        width: 90%;
    }

    .ani-modal-base.ani-modal-base-auto {
        width: auto;
        max-width: 70%;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 960px) {
    .ani-modal-base:is(.ani-modal-base-sm, .ani-modal-base-md, .ani-modal-base-lg, .ani-modal-base-xl) {
        width: 80%;
    }

    .ani-modal-base.ani-modal-base-auto {
        width: auto;
        max-width: 70%;
    }
  }

  @media screen and (min-width: 961px) and (max-width: 1366px) {
    .ani-modal-base.ani-modal-base-sm {
        width: 40%;
    }

    .ani-modal-base.ani-modal-base-md {
        width: 50%;
    }

    .ani-modal-base.ani-modal-base-lg {
        width: 60%;
    }

    .ani-modal-base.ani-modal-base-xl {
        width: 70%;
    }

    .ani-modal-base.ani-modal-base-auto {
        width: 70%;
        max-width: 70%;
    }
  }

  @media screen and (min-width: 1367px) {
    .ani-modal-base.ani-modal-base-sm {
        width: 40%;
    }

    .ani-modal-base.ani-modal-base-md {
        width: 50%;
    }

    .ani-modal-base.ani-modal-base-lg {
        width: 60%;
    }

    .ani-modal-base.ani-modal-base-xl {
        width: 70%;
    }

    .ani-modal-base.ani-modal-base-auto {
        width: 70%;
        max-width: 70%;
    }
  }

`;
