const style = `
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
input, button {
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #acacac;
  font-size: 1rem;
  font-family: Helvetica, sans-serif;
}

.container {
  padding: 10px;
  border-radius: 8px;
  margin: 10px;
  border: 1px solid #cacaca;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}
`;

export default class Calculator extends HTMLElement {
  shadow;
  contentElement;
  result;
  resultElement;
  click;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });

    this.click = document.createEvent('Event');
    this.click.initEvent('clickButton', true, true);
  }

  connectedCallback(): void {
    this.render();

    const bSoma = this.shadow.getElementById('button-soma');
    const bMultiplica = this.shadow.getElementById('button-multiplica');
    const bDimunui = this.shadow.getElementById('button-diminui');
    const bDivide = this.shadow.getElementById('button-divide');

    bSoma.addEventListener('click', this.soma.bind(this));
    bMultiplica.addEventListener('click', this.multiplica.bind(this));
    bDimunui.addEventListener('click', this.diminui.bind(this));
    bDivide.addEventListener('click', this.divide.bind(this));
  }

  onClick(): void {
    console.log('Vai blaze!');
    console.log('this', this);

    // const value = this.soma(firstNumber, secondNumber);

    this.mandaValor();
  }

  private mandaValor() {
    const value = this.result;

    const objeto = {
      name: 'nome',
      disable: false
    };

    document.dispatchEvent(
      new CustomEvent('emitValue', {
        detail: [
          {
            value,
            name: 'result',
            disabled: false,
            label: 'Resultadinho',
            action: () => {
              const element = document.getElementById('resultado');
              console.log({element});
            }
          },
          {
            value,
            name: 'address',
            disabled: false,
            label: 'Enderecinho',
            action: () => {
              const element = document.getElementById('resultado');
              console.log({element});
            }
          },
          {
            value,
            name: 'local',
            disabled: true,
            label: 'Localzinho',
            action: () => {
              const element = document.getElementById('resultado');
              console.log({element});
            }
          },

        ]
      })
    );
  }

  soma() {
    console.log('soma');
    const a = this.shadow.getElementById('firstNumber').value;
    const b = this.shadow.getElementById('secondNumber').value;

    if (a && b) {
      this.result = Number(a) + Number(b);
      this.mandaValor();

    } else {
      console.error('Dados Inválidos');
    }
  }

  multiplica() {
    console.log('multiplica');
    const a = this.shadow.getElementById('firstNumber').value;
    const b = this.shadow.getElementById('secondNumber').value;

    if (a && b) {
      this.result = Number(a) * Number(b);
      this.mandaValor();
    } else {
      console.error('Dados Inválidos');
    }
  }

  divide() {
    console.log('divide');
    const a = this.shadow.getElementById('firstNumber').value;
    const b = this.shadow.getElementById('secondNumber').value;

    if (a && b && Number(b) !== 0) {
      this.result = Number(a) / Number(b);
      this.mandaValor();
    } else {
      console.error('Dados Inválidos');
    }
  }

  diminui() {
    console.log('diminui');
    const a = this.shadow.getElementById('firstNumber').value;
    const b = this.shadow.getElementById('secondNumber').value;

    if (a && b) {
      this.result = Number(a) - Number(b);
      this.mandaValor();
    } else {
      console.error('Dados Inválidos');
    }
  }

  render(): void {
    this.shadow.innerHTML = `
      <style>${style}</style>
      <div class="container">
      <h3>Calculator</h3>
      <input id="firstNumber" name="firstNumber" type="number"></input>
      <input id="secondNumber" name="secondNumber" type="number"></input>
      <hr>
      <button id="button-soma" class="button">Somar</button>
      <button id="button-diminui" class="button">Subtrair</button>
      <button id="button-divide" class="button">Dividir</button>
      <button id="button-multiplica" class="button">Multiplicar</button>
      </div>
    `;
  }
}
customElements.define('pods-calculator', Calculator);
