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
    this.placeholder = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam facilisis urna at varius. Nunc rutrum tortor ac ultricies euismod. Sed a aliquam lorem. Cras euismod magna eu augue ultricies, sed laoreet tortor gravida. Phasellus in mi vel risus iaculis sodales. Sed nec molestie sem. Nam finibus, nibh id efficitur bibendum, dolor lorem bibendum ex, nec euismod orci ipsum vel ligula. Curabitur sit amet enim nec diam ullamcorper rutrum quis ut nunc. Praesent elementum velit diam, placerat consectetur metus vulputate nec. Fusce id quam mi. Nunc gravida neque vitae interdum interdum. Donec dignissim gravida ex, vitae fringilla magna laoreet sit amet. Vestibulum orci odio, viverra quis diam eget, suscipit faucibus tortor.';
  }

  connectedCallback(): void {
    this.render();

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
  }
}

customElements.define('pods-checkbox-aproves', CheckboxAproves);
