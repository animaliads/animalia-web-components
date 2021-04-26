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
        category: 'Slot',
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Indica se o botão está desabilitado',
      defaultValue: 'false',
      table: {
        category: 'Propriedades',
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
    <ani-button disabled="${args.disabled}"> ${label} </ani-button>
  `;
};

export const Sample = Template.bind({});
Sample.args = {
  label: 'Button',
  disabled: false,
};

Sample.parameters = {
  docs: {
    source: {
      code: `
<ani-button
  disabled="${Sample.args.disabled}"
>
${Sample.args.label}
</ani-button>`,
    },
  },
};
