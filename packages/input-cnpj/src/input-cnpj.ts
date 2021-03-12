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
  value;
  contentElement;
  placeholder = '';

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.value = '';
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
    this.addEventListener('blur', this.onBlur);
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
    console.log('render input');
    this.shadow.innerHTML = `
            <style>${style}</style>
            <input id="input-cnpj" placeholder=${this.placeholder}>
            </input>
        `;
  }

  onBlur(event): void {
    const value = document.querySelector('input');
    console.log(value);
    console.log(event.target);
    this.dispatchEvent(
      new CustomEvent('emitValue', {
        detail: {
          value: this.value,
        },
      })
    );
  }
}

customElements.define('pods-input-cnpj', InputCnpj);
