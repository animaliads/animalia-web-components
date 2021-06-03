import '../link';
import { html } from 'lit-html';

const customProperties = [
  { name: '--font-family', description: 'nome da família de fonte' },
  { name: '--text-color', description: 'cor do texto da label' },
  { name: '--font-size', description: 'tamanho da fonte' },
  { name: '--line-height', description: 'espaçamento entre linhas' },
  { name: '--background', description: 'cor de background' },
  { name: '--border-radius', description: 'arredondamento da borda' },
  { name: '--spacing-squish', description: 'espaçamento interno (padding)' },
  {
    name: '--background-hover',
    description: 'cor de background no evento hover',
  },
  {
    name: '--outline-color-focused',
    description: 'cor da borda externa durante o focus',
  },
  {
    name: '--outline-color-pressed',
    description: 'cor da borda externa durante o pressed',
  },
  {
    name: '--outline-color-disabled',
    description: 'cor da borda externa quando o botão estiver desabilitado',
  },
  {
    name: '--background-pressed',
    description: 'cor do background durante o pressed',
  },
  {
    name: '--background-disabled',
    description: 'cor do background quando o botão estiver desabilitado',
  },
  {
    name: '--shadow',
    description: 'propriedades de sombra',
  },
];

const customPropertiesArgs = customProperties.reduce((acc, propertie) => {
  const newValue = {
    [propertie.name]: {
      description: propertie.description,
      table: {
        category: 'Propriedades customizáveis (CSS)',
      },
    },
  };

  return { ...acc, ...newValue };
}, {});

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
      description: `
      Indica se o link deverá ser aberta em uma nova aba.\n
      Sempre que utilizar essa propriedade, é importante informar isso ao usuário através da label.\n
      Por exemplo: Storybook (abrir em uma nova aba).
      `,
      defaultValue: 'false',
      table: {
        category: 'Propriedades',
      },
    },
    ...customPropertiesArgs,
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
