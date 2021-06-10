import '../link';
import { html } from 'lit-html';

export default {
  title: 'API/Link',
  component: 'ani-link',
  argTypes: {
    label: {
      control: 'text',
      description: 'Rótulo',
      table: {
        category: 'Slot',
      },
    },
    url: {
      control: 'text',
      description: 'Url do link',
      table: {
        category: 'Propriedades',
      },
    },
    openNewTab: {
      control: 'boolean',
      description:
        'Indica se o link deverá ser aberta em uma nova aba. Sempre que utilizar essa propriedade, é importante informar isso ao usuário através da label. Por exemplo: Storybook (abrir em uma nova aba).',
      defaultValue: 'false',
      table: {
        category: 'Propriedades',
      },
    },
  },
};

const Template = ({ label, ...args }) => {
  return html`
    <ani-link url="${args.url}" open-new-tab="${args.openNewTab}">
      ${label}
    </ani-link>
  `;
};

export const Sample = Template.bind({});
Sample.args = {
  label: 'Link',
  url: 'https://storybook.js.org',
  openNewTab: false,
};

Sample.parameters = {
  docs: {
    source: {
      code: `
<ani-link
  url="${Sample.args.url}"
>
${Sample.args.label}
</ani-link>`,
    },
  },
};
