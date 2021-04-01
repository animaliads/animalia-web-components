const style = `
  p,
  label {
    font-family: Roboto, Arial;
    font-size: 16px;
  }

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
export default class CheckboxAproves extends HTMLElement {
  shadow;
  contentElement;
  placeholder = '';

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });

    this.setCheckbox();
  }

  private setCheckbox() {
    this.placeholder = 'Gaio de pau quebrando, vaca entrando no meio de roça!, engastiando na boca estaca de pau e quebrando os dente tudo. Globo da morte trabaiando, cambio de trator engastaindo, engastiando na boca estaca de pau e quebrando os dente tudo.';
  }

  connectedCallback(): void {
    this.render();
    console.log('connectedCallback');
    this.addEventListener('click', this.onClick.bind(this));
  }

  render(): void {
    this.shadow.innerHTML = `
      <p>${this.placeholder}</p>
      <style>${style}</style>
      <div>
        <input type="checkbox" id="checkbox" name="checkbox">
        <label for="checkbox">placeholder</label>
      </div>
    `;
  }

  notify(prop): void {
    console.log('prop', prop);
    this.setCheckbox();
    this.render();
  }

  onClick(event): void {
    const value = event.target.shadow.getElementById('checkbox').value;
    console.log('click', value);
    this.dispatchEvent(
      new CustomEvent('emitValue', {
        detail: {
          value
        },
      })
    );
    console.log('oh loco clicou aqui');
  }
}

customElements.define('pods-checkbox-aproves', CheckboxAproves);
