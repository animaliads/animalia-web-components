const style = `
  input {
    border-radius: 3px;
    border-radius: 3px;
    display: inline-block;
    height: 44px;
    padding: 0 16px;
    cursor: pointer;
    width: 50%;

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
export default class PocForm extends HTMLElement {
  shadow;
  contentElement;
  url = '';

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });

    this.setUrl('https://po-sample-api.herokuapp.com/v1/people');
  }

  private setUrl(url: string) {
    this.url = url;
  }

  connectedCallback(): void {
    this.render();
    this.addEventListener('blur', this.onBlur.bind(this));
  }

  notify(prop, model): void {
    const { url } = model;
    this.setUrl(url);
  }

  render(): void {
    this.shadow.innerHTML = `
      <style>${style}</style>
      <input id="url" value="${this.url}" name="url"></input>
    `;
  }

  onBlur(event): void {
    const url = event.target.shadow.getElementById('url').value;
    this.dispatchEvent(
      new CustomEvent('emitValue', {
        detail: {
          url,
        },
      })
    );
  }
}

customElements.define('po-poc-form', PocForm);
