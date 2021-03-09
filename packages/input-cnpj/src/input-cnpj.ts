const style = `
  input {
    border-radius: 3px;
    border-radius: 3px;
    display: inline-block;
    height: 44px;
    padding: 0 16px;
    cursor: pointer;

    font-family: Roboto, Arial;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;

    transition: all 0.1s ease;
  }

`;
export default class InputCnpj extends HTMLElement {
  shadow;
  show;
  contentElement;
  placeholder = '';

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.show = false;
    this.setupCNPJ();
  }

  private setupCNPJ() {
    this.placeholder = 'CNPJ';
  }

  private setupCPF() {
    this.placeholder = 'CPF';
  }

  connectedCallback(): void {
    this.render();
  }

  notify(prop) {
    const { personType } = prop;

    if (personType === 'CPF') {
      this.setupCPF();
    } else {
      this.setupCNPJ();
    }
    this.render();
  }

  render(): void {
    this.shadow.innerHTML = `
            <style>${style}</style>
            <input placeholder=${this.placeholder}>
            </input>
        `;
  }
}

customElements.define('pods-input-cnpj', InputCnpj);
