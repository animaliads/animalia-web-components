import '../button';
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
  title: 'API/Button',
  component: 'ani-button',
  argTypes: {
    label: {
      control: 'text',
      description: 'Rótulo',
      table: {
        type: { summary: 'string' },
        category: 'Slot',
      },
    },
    kind: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'radio' },
      description: 'Variação',
      defaultValue: 'secondary',
      table: {
        type: { summary: 'string' },
        category: 'Propriedades',
        defaultValue: { summary: 'secondary' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Indica se o botão está desabilitado',
      defaultValue: 'false',
      table: {
        type: { summary: 'boolean' },
        category: 'Propriedades',
        defaultValue: { summary: false },
      },
    },
    type: {
      control: 'text',
      description:
        'Valor para indicar o tipo do botão, por exemplo: `submit`, `reset` ou `button`. ' +
        'Ao inserir qualquer um desses valores, é importante implementar essas funcionalidades.',
      defaultValue: 'button',
      table: {
        type: { summary: 'string' },
        category: 'Propriedades',
        defaultValue: { summary: 'button' },
      },
    },
    danger: {
      control: 'boolean',
      description: 'Habilita o botão do tipo danger',
      defaultValue: 'false',
      table: {
        type: { summary: 'boolean' },
        category: 'Propriedades',
        defaultValue: { summary: false },
      },
    },
    onClick: {
      description: 'Evento disparado ao clicar no botão',
      table: {
        category: 'Eventos',
      },
    },
    ...customPropertiesArgs,
  },
};

const Template = ({ label, ...args }) => {
  return html`
    <ani-button
      kind="${args.kind}"
      type="${args.type}"
      danger="${args.danger}"
      disabled="${args.disabled}"
    >
      ${label}
    </ani-button>
  `;
};

export const Sample = Template.bind({});
Sample.args = {
  label: 'Button',
  disabled: false,
  type: 'button',
  kind: 'secondary',
  danger: false,
};

Sample.parameters = {
  docs: {
    source: {
      code: `
<ani-button
  kind="${Sample.args.kind}"
  type="${Sample.args.type}"
  danger="${Sample.args.danger}"
  disabled="${Sample.args.disabled}"
>
${Sample.args.label}
</ani-button>`,
    },
  },
};
