import './toaster';
import { html } from 'lit-html';
import { ToasterKind } from './toaster.model';
import { ifDefined } from 'lit-html/directives/if-defined';

export default {
  title: 'API/Toaster',
  component: 'ani-toaster',
  argTypes: {
    open: {
      name: 'open',
      control: 'boolean',
      description: 'Estado',
      defaultValue: true,
      table: {
        type: { summary: 'boolean' },
        category: 'Propriedades',
        defaultValue: { summary: true },
      },
    },
    kind: {
      name: 'kind',
      options: Object.values(ToasterKind),
      control: { type: 'radio' },
      description: 'Variação',
      defaultValue: ToasterKind.SUCCESS,
      table: {
        type: { summary: 'ToasterKind' },
        category: 'Propriedades',
        defaultValue: { summary: ToasterKind.SUCCESS },
      },
    },
    message: {
      name: 'message',
      control: 'text',
      description: 'Mensagem',
      table: {
        type: { summary: 'string' },
        category: 'Propriedades',
      },
    },
    actionLabel: {
      name: 'actionLabel',
      control: 'text',
      description: 'Rótulo da ação',
      table: {
        type: { summary: 'string' },
        category: 'Propriedades',
      },
    },
    actionLabelAttr: {
      name: 'action-label',
      control: false,
      description: 'Rótulo da ação',
      table: {
        type: { summary: 'string' },
        category: 'Atributos',
      },
    },
    onToasterClose: {
      name: 'on-toaster-close',
      action: 'on-toaster-close',
      description: 'Evento disparado ao clicar no botão de fechar.',
      table: {
        category: 'Eventos',
      },
    },
    onToasterAction: {
      name: 'on-toaster-action',
      action: 'on-toaster-action',
      description:
        'Evento disparado ao clicar no botão referente a ação do toaster.',
      table: {
        category: 'Eventos',
      },
    },
  },
};

const Template = ({ ...args }) => {
  return html`
    <ani-toaster
      kind=${args.kind}
      message=${args.message}
      action-label=${args.actionLabel}
      ?open=${args.open}
      @on-toaster-close=${args.onToasterClose}
      @on-toaster-action=${args.onToasterAction}
    ></ani-toaster>
  `;
};

export const Sample = Template.bind({});
Sample.args = {
  kind: 'success',
  message: 'Mensagem aqui',
  open: true,
};
