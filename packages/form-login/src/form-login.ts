const style = `
  * {
    font-family: 'Times New Roman';
    font-size: 1rem;
    font-color: red;
  }
`;

export default class FormLogin extends HTMLElement {
  shadow;
  contentElement;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  private onBlur(event) {
    console.log('onBlur', event);
  }

  private onFocus(event) {
    console.log('focus', event);
  }

  connectedCallback(): void {
    this.render();
    this.addEventListener('blur', this.onBlur.bind(this));
    this.addEventListener('focus', this.onFocus.bind(this));
    this.addEventListener('click', this.send.bind(this));
  }

  notify(prop): void {
    this.render();
  }

  send(event): void {
    const value = this.shadow.getElementById('form').value;
    console.group('send');
    console.log('value', value);
    console.log('event', event.target.shadow.getElementById('form').value);
    console.groupEnd();
  }

  render(): void {
    this.shadow.innerHTML = `
      <style>${style}</style>
      <form name="form" id="form">
        <label for="login">Login</label>
        <input name="login" id="login" type="text" />
        <label for="password">Senha</label>
        <input name="password" id="password" type="text" />
        <button onclick="send($event)">login</button>
      </form>
    `;
  }
}

customElements.define('pods-form-login', FormLogin);
