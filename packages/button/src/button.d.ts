export declare class Button extends HTMLElement {
  shadow: ShadowRoot;
  clickEvent: Event;
  constructor();
  get label(): string;
  set label(value: string);
  get type(): string;
  set type(value: string);
  get disabled(): string;
  set disabled(value: string);
  static get observedAttributes(): Array<string>;
  connectedCallback(): void;
  onClick(): void;
  attributeChangedCallback(): void;
  render(): void;
}
//# sourceMappingURL=button.d.ts.map
