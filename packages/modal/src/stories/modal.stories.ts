import '../modal';
import { html } from 'lit-html';

export default {
  title: 'API/Modal',
  component: 'ani-modal',
  argTypes: {
    content: {
      control: 'text',
      description: 'Rótulo',
      table: {
        category: 'Slot',
      },
    },
    type: {
      options: ['read-only', 'link', 'selectable'],
      control: { type: 'radio' },
      description: 'Valor para indicar o tipo do card.',
      defaultValue: 'read-only',
      table: {
        type: { summary: 'string' },
        category: 'Propriedades',
        defaultValue: { summary: 'read-only' },
      },
    },
    selected: {
      control: 'boolean',
      description: 'Indica se o card está selecionado.',
      defaultValue: 'false',
      table: {
        type: { summary: 'boolean' },
        category: 'Propriedades',
        defaultValue: { summary: false },
      },
    },
    href: {
      control: 'text',
      description:
        'Indica para qual endereço/URL o card do tipo link irá redirecionar.',
      defaultValue: 'https://www.google.com/',
      table: {
        type: { summary: 'string' },
        category: 'Propriedades',
        defaultValue: { summary: 'https://www.google.com/' },
      },
    },
  },
};

const Template = ({ content, ...args }) => {
  return html`
    <ani-modal
      type="${args.type}"
      selected="${args.selected}"
      href="${args.href}"
    >
      ${content}
    </ani-modal>
  `;
};

export const Sample = Template.bind({});
Sample.args = {
  content: 'Modal',
  type: 'read-only',
  selected: false,
  href: 'https://www.google.com/',
};

Sample.parameters = {
  docs: {
    source: {
      code: `
      <ani-modal
      type="${Sample.args.type}"
      selected="${Sample.args.selected}"
      href="${Sample.args.href}"
    >
    ${Sample.args.content}
    </ani-modal>`,
    },
  },
};
