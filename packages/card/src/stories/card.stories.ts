import '../card';
import { html } from 'lit-html';

export default {
  title: 'API/Card',
  component: 'ani-card',
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
    <ani-card
      type="${args.type}"
      selected="${args.selected}"
      href="${args.href}"
    >
      ${content}
    </ani-card>
  `;
};

export const Sample = Template.bind({});
Sample.args = {
  content: 'Card',
  type: 'read-only',
  selected: false,
  href: 'https://www.google.com/',
};

Sample.parameters = {
  docs: {
    source: {
      code: `
      <ani-card
      type="${Sample.args.type}"
      selected="${Sample.args.selected}"
      href="${Sample.args.href}"
    >
    ${Sample.args.content}
    </ani-card>`,
    },
  },
};
