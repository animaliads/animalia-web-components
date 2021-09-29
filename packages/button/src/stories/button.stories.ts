import '../button';
import { html } from 'lit-html';

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
      description: 'Indica se o botão está desabilitado.',
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
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      description: 'Tamanhos do botão.',
      defaultValue: 'button',
      table: {
        type: { summary: 'string' },
        category: 'Propriedades',
        defaultValue: { summary: 'medium' },
      },
    },
    danger: {
      control: 'boolean',
      description:
        'Habilita o botão do tipo danger. Essa propriedade é válida apenas para os tipos `primary` e `secondary`.',
      defaultValue: 'false',
      table: {
        type: { summary: 'boolean' },
        category: 'Propriedades',
        defaultValue: { summary: false },
      },
    },
    onClick: {
      description: 'Evento disparado ao clicar no botão.',
      table: {
        category: 'Eventos',
      },
    },
    setFocus: {
      description: 'Aciona o foco no componente.',
      table: {
        category: 'Métodos',
      },
    }
  },
};

const Template = ({ label, ...args }) => {
  return html`
    <ani-button
      kind="${args.kind}"
      type="${args.type}"
      danger="${args.danger}"
      size="${args.size}"
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
  size: 'medium',
  danger: false,
};

Sample.parameters = {
  docs: {
    source: {
      code: `
<ani-button
  kind="${Sample.args.kind}"
  type="${Sample.args.type}"
  size="${Sample.args.size}"
  danger="${Sample.args.danger}"
  disabled="${Sample.args.disabled}"
>
${Sample.args.label}
</ani-button>`,
    },
  },
};
