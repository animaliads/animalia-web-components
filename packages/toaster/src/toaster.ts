import {
  transformBooleanProperties,
  Component,
  isBlankString,
} from '@animaliads/common';
import { iconByToasterKind, ToasterKind } from './toaster.model';
import { style } from './toaster.style';

const defaultKind = ToasterKind.SUCCESS;

const template = document.createElement('template');
template.innerHTML = `
  <style>${style}</style>
  <output role="status" class="toaster__container">
    <div class="toaster__icon-wrapper">
      <ani-icon id="toaster_icon"></ani-icon>
    </div>
    <div class="toaster__body">
      <p class="toaster__message"></p>
      <div class="toaster__action-wrapper">
        <ani-button id="toaster_action_btn" kind="tertiary"></ani-button>
      </div>
    </div>
    <div class="toaster__close-action-wrapper">
      <ani-button id="toaster_close_btn" kind="tertiary">
        <ani-icon name="close"></ani-icon>
      </ani-button>
    </div>
  </output>
`;

@Component('ani-toaster')
export class Toaster extends HTMLElement {
  public shadow: ShadowRoot;
  public closeEvent: Event;
  public actionEvent: Event;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.closeEvent = document.createEvent('Event');
    this.closeEvent.initEvent('on-toaster-close', true, true);

    this.actionEvent = document.createEvent('Event');
    this.actionEvent.initEvent('on-toaster-action', true, true);

    this.shadow
      .getElementById('toaster_close_btn')
      .addEventListener('onClick', this.onCloseClick.bind(this));
    this.shadow
      .getElementById('toaster_action_btn')
      .addEventListener('onClick', this.onActionClick.bind(this));
  }

  static get observedAttributes(): Array<string> {
    return ['kind', 'message', 'action-label'];
  }

  get open(): boolean {
    return this.hasAttribute('open');
  }

  set open(val) {
    if (val) {
      this.setAttribute('open', '');
    } else {
      this.removeAttribute('open');
    }
  }

  get kind(): ToasterKind {
    return <ToasterKind>this.getAttribute('kind');
  }

  set kind(kind: ToasterKind) {
    this.setAttribute('kind', kind);
  }

  get message(): string {
    return this.getAttribute('message');
  }

  set message(label: string) {
    this.setAttribute('message', label);
  }

  get actionLabel(): string {
    return this.getAttribute('action-label');
  }

  set actionLabel(label: string) {
    this.setAttribute('action-label', label);
  }

  connectedCallback(): void {
    if (!this.kind) {
      this.setDefaultKind();
    }

    if (!this.open) {
      this.setDefaultOpen();
    }
  }

  attributeChangedCallback(name, oldValue, newValue): void {
    if (oldValue !== newValue) {
      switch (name) {
        case 'kind':
          this.handleKindUpdate(newValue);
          break;
        case 'message':
          this.handleMessageUpdate(newValue);
          break;
        case 'action-label':
          this.handleActionLabelUpdate(newValue);
          break;
      }
    }
  }

  private setDefaultKind(): void {
    this.kind = defaultKind;
  }

  private setDefaultOpen(): void {
    this.open = true;
  }

  private handleKindUpdate(value: string): void {
    this.shadow
      .getElementById('toaster_icon')
      .setAttribute('name', iconByToasterKind[value]);
  }

  private handleMessageUpdate(value: string): void {
    this.shadow.querySelector('.toaster__message').textContent = value;
  }

  private handleActionLabelUpdate(value: string): void {
    this.shadow.getElementById('toaster_action_btn').textContent = value;

    const actionWrapper = this.shadow.querySelector('.toaster__action-wrapper');
    actionWrapper.setAttribute('aria-hidden', `${isBlankString(value)}`);

    if (isBlankString(value)) {
      actionWrapper.setAttribute('style', 'display: none');
      return;
    }

    if (actionWrapper.hasAttribute('style')) {
      actionWrapper.removeAttribute('style');
    }
  }

  private onCloseClick(): void {
    this.open = false;
    this.dispatchEvent(this.closeEvent);
  }

  private onActionClick(): void {
    this.dispatchEvent(this.actionEvent);
  }
}
