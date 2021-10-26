import { style } from './style';

const icon = `
<svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.707 0.293006C13.316 -0.0979941 12.684 -0.0979941 12.293 0.293006L7.00001 5.58601L1.70701 0.293006C1.31601 -0.0979941 0.684006 -0.0979941 0.293006 0.293006C-0.0979941 0.684006 -0.0979941 1.31601 0.293006 1.70701L6.29301 7.70701C6.48801 7.90201 6.74401 8.00001 7.00001 8.00001C7.25601 8.00001 7.51201 7.90201 7.70701 7.70701L13.707 1.70701C14.098 1.31601 14.098 0.684006 13.707 0.293006Z" fill="#515162"/>
</svg>`;

export default class Select extends HTMLElement {
  shadow: ShadowRoot;
  selectElement: HTMLSelectElement;

  get disabled(): string {
    const disabled = this.getAttribute('disabled');
    return transformBooleanProperties(disabled);
  }

  get items() {
    return JSON.parse(this.getAttribute('items'));
  }

  set items(value) {
    this.setAttribute('items', value);
  }

  static get observedAttributes() {
    return ['items', 'disabled'];
  }

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback(): void {
    this.render();
    this.selectElement = this.shadowRoot.querySelector('select');
  }

  attributeChangedCallback(): void {
    this.render();
  }

  render() {
    const options = this.items.reduce((acc, item) => {
      return acc + `<option value="${item.value}">${item.label}</option>`;
    }, '');

    this.shadow.innerHTML = `
      <style>${style}</style>
      
      <label>
        <div>
          <slot></slot>
        </div>
        <div class="container">
        <select
        ${this.disabled === 'true' ? 'disabled' : ''}
        >
        ${options}
        </select>
        ${icon}
        </div>
      </label>
    `;
  }
}

customElements.define('ani-select', Select);

function transformBooleanProperties(value: string) {
  if (value === '') {
    return 'true';
  } else if (value === null) {
    return 'false';
  }

  return value;
}
