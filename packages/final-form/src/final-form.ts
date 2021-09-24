const style = `
  input {
    font-family: Roboto,sans-serif;
    font-size: 16px;
    line-height: 24px;
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
    background-color: #fff;
    border: 1px solid #b6bdbf;
    border-radius: 3px;
    box-shadow: inset 0 1px 8px 0 rgb(0 0 0 / 10%);
    height: 44px;
    padding: 0 16px;
    margin: 16px 0;
    width: 100%;
  }

  button {
    background-color: #ffd464;
    border-radius: 3px;
    border: 1px solid #ffd464;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 15%);
    color: #1d2426;
    cursor: pointer;
    display: inline-block;
    font-family: Roboto-Bold,sans-serif;
    font-size: 16px;
    height: 44px;
    line-height: 24px;
    padding: 0 16px;
    margin: 16px 0;
    text-align: center;
  }
  label {
    font-family: Roboto-Bold,sans-serif;
    font-size: 14px;
    line-height: 24px;
    color: #4a5c60;
    display: table-cell;
    vertical-align: sub;
    margin: 16px 0;
    width: 100%;
  }
`;

export default class FinalForm extends HTMLElement {
  shadow;
  contentElement;
  input = '';
  inputLabel = '';
  placeholder = '';
  returnProps = '';
  inputHtml = '';

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });

    this.setCPF();
  }

  connectedCallback(): void {
    this.render();
  }

  private setCPF() {
    this.input = 'cpf';
    this.inputHtml = `
      <label for="cpf">CPF</label>
      <input id="cpf" name="cpf" placeholder="Set your CPF"></input>
      <label for="email">E-mail</label>
      <input id="email" name="email" placeholder="Set your email"></input>
    `;
  }

  private setCNPJ() {
    this.input = 'cnpj';
    this.inputHtml = `
      <label for="cnpj">CNPJ</label>
      <input id="cnpj" name="cnpj" placeholder="Set your CNPJ"></input>
      <label for="corporate">Corporate Name</label>
      <input id="corporate" name="corporate" placeholder="Set your corporate name"></input>
      <label for="email">E-mail</label>
      <input id="email" name="email" placeholder="Set your email"></input>
      <label for="registration">State Registration</label>
      <input id="registration" name="registration" placeholder="Set your state registration"></input>
    `;
  }

  private defineButton() {
    const button = this.shadow.getElementById('button-send');
    button.addEventListener('click', this.prepareData.bind(this));
  }

  render(): void {
    this.shadow.innerHTML = `
      <style>${style}</style>
      ${this.inputHtml}
      <button id="button-send">Send Data</button>
      ${this.returnProps}
    `;
    // <label for="${this.input}">${this.inputLabel}</label>
    //       <input id="${this.input}" placeholder="${this.placeholder}"></input>
    this.defineButton();
  }

  notify(prop, model): void {
    const { personType } = model;
    // eslint-disable-next-line no-console
    if (prop) {
      let document = '';
      if (prop?.email) {
        document = `<p><strong>CPF:</strong> ${prop.cpf}</p>`;
      }
      if (prop?.corporate) {
        document = `
          <p><strong>Corporate Name:</strong> ${prop.corporate}</p>
          <p><strong>State Registration:</strong> ${prop.registration}</p>
          `;
      }
      this.returnProps = `
        <hr />
        <h3>Saved Data</h3>
        <p><strong>Name:</strong> ${prop.name}</p>
        <p><strong>Age:</strong> ${prop.age}</p>
        <p><strong>Email:</strong> ${prop.email}</p>
        ${document}
        `;
    }

    if (personType === 'CPF') {
      this.setCPF();
    } else {
      this.setCNPJ();
    }

    this.render();
  }

  getInputName() {
    return this.input;
  }

  prepareData(event): void {
    let email, corporate, cpf, cnpj, registration;
    if (this.input === 'cpf') {
      cpf = this.shadow.getElementById('cpf').value;
      email = this.shadow.getElementById('email').value;
      this.sendData({ cpf, email });
    }
    if (this.input === 'cnpj') {
      corporate = this.shadow.getElementById('corporate').value;
      cnpj = this.shadow.getElementById('cnpj').value;
      email = this.shadow.getElementById('email').value;
      registration = this.shadow.getElementById('registration').value;
      this.sendData({ corporate, cnpj, email, registration });
    }
  }

  sendData(data: any) {
    // eslint-disable-next-line no-console
    console.log(data);
    const detail = [];
    Object.entries(data).map(([key, value]) => {
      let corporate;
      if (key === 'cpf') {
        corporate = {
          name: 'corporate',
          value: '',
          disabled: true,
        };
        detail.push(corporate);
      }
      const temp = {
        name: key,
        value,
        visible: true,
        disabled: key === 'corporate' ? false : true,
      };
      detail.push(temp);
    });

    document.dispatchEvent(
      new CustomEvent('emitValue', {
        detail,
      })
    );
  }
}

customElements.define('final-form', FinalForm);
