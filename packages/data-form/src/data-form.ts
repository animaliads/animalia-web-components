const style = `
  * {
    font-size: 1rem;
    font-family: Helvetica, sans-serif;
  }
  input, button {
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 1px solid #acacac;
    font-size: 1rem;
    font-family: Helvetica, sans-serif;
  }
  h1 {
    font-size: 2rem;
    font-weight: 900;
    border-bottom: 1px solid #cacaca;
    padding: 5px 10px;
  }
  input {
    box-shadow: inset 0 1px 8px 0 rgb(0 0 0 / 10%);
  }
  .form-control {
    display: flex;
    flex-direction: column;
    padding: 5px 10px;
    justify-content: flex-end;
  }
  .container {
    padding: 10px;
    border-radius: 8px;
    margin: 10px;
    border: 1px solid #cacaca;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  }
  .row {
    display: flex;
    flex-wrap: wrap;
  }
`;

export default class DataForm extends HTMLElement {
  shadow;
  contentElement;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback(): void {
    this.render();

    const send = this.shadow.getElementById('button-send');
    send.addEventListener('click', this.onClick.bind(this));
  }

  render(): void {
    this.shadow.innerHTML = `
      <style>${style}</style>
      <div class="container">
        <h1>Webcomponent</h1>
        <div class="row">
          <div class="form-control">
            <label for="firstName">firstName</label>
            <input name="firstName" id="firstName"></input>
          </div>
          <div class="form-control">
            <label for="lastName">lastName</label>
            <input name="lastName" id="lastName"></input>
          </div>
          <div class="form-control">
            <label for="email">email</label>
            <input name="email" id="email"></input>
          </div>
          <div class="form-control">
            <label for="phone">phone</label>
            <input name="phone" id="phone"></input>
          </div>
          <div class="form-control">
            <label for="address">address</label>
            <input name="address" id="address"></input>
          </div>
          <div class="form-control">
            <label for="quote">quote</label>
            <input name="quote" id="quote"></input>
          </div>
          <div class="form-control">
            <label for="motherName">motherName</label>
            <input name="motherName" id="motherName"></input>
          </div>
          <div class="form-control">
            <label for="fatherName">fatherName</label>
            <input name="fatherName" id="fatherName"></input>
          </div>

          <div class="form-control">
            <button id="button-send" class="button">SEND</button>
          </div>
        </div>
      </div>
    `;
  }

  sendObject(data: any) {
    const detail = [];
    Object.entries(data).map(([key, value]) => {
      const temp = {
        name: key,
        value,
        disabled: key === 'email' ? true : false
      };
      detail.push(temp);
    });

    document.dispatchEvent(
      new CustomEvent('emitValue', {
        detail
      })
    );
  }

  onClick(): void {
    console.log('Mandei dados');
    const firstName = this.shadow.getElementById('firstName').value;
    const lastName = this.shadow.getElementById('lastName').value;
    const email = this.shadow.getElementById('email').value;
    const phone = this.shadow.getElementById('phone').value;
    const address = this.shadow.getElementById('address').value;
    const quote = this.shadow.getElementById('quote').value;
    const motherName = this.shadow.getElementById('motherName').value;
    const fatherName = this.shadow.getElementById('fatherName').value;
    this.sendObject(
      {
        firstName,
        lastName,
        email,
        phone,
        address,
        quote,
        motherName,
        fatherName
      });

  }
}
customElements.define('data-form', DataForm);
