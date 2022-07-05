import './toaster';
import { html } from 'lit-html';
import { ToasterKind } from './toaster.model';

export default {
  title: 'API/Toaster',
  component: 'ani-toaster',
  argTypes: {
    kind: {
      options: Object.values(ToasterKind),
      control: { type: 'radio' },
      description: 'Variação',
      defaultValue: ToasterKind.SUCCESS,
      table: {
        type: { summary: 'TOASTER_KIND' },
        category: 'Propriedades',
        defaultValue: { summary: ToasterKind.SUCCESS },
      },
    },
    message: {
      control: 'text',
      description: 'Mensagem',
      table: {
        type: { summary: 'string' },
        category: 'Propriedades',
      },
    },
    actionLabel: {
      control: 'text',
      description: 'Rótulo da ação',
      table: {
        type: { summary: 'string' },
        category: 'Propriedades',
      },
    },
  },
};

const Template = ({ ...args }) => {
  return html`
    <ani-toaster
      kind="${args.kind}"
      message="${args.message}"
      action-label="${args.actionLabel}"
    ></ani-toaster>
  `;
};

export const Sample = Template.bind({});
Sample.args = {
  kind: 'success',
  actionLabel: '',
  message: 'Mensagem aqui',
};

Sample.parameters = {
  docs: {
    source: {
      code: `
        <ani-toaster
          kind="${Sample.args.kind}"
          message="${Sample.args.message}"
          action-label="${Sample.args.actionLabel}"
        ></ani-toaster>
      `,
    },
  },
};
