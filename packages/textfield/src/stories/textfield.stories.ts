import '../textfield';
import { html } from 'lit-html';

export default {
  title: 'API/Textfield',
  component: 'ani-textfield',
  argTypes: {
    label: {
      control: 'text',
      description:
        'Rótulo. O estilo do rótulo não é tratado no componente. Temos um exemplo de como fazer essa customização no Live Demo.',
      table: {
        type: { summary: 'string' },
        category: 'Slot',
      },
    },
    value: {
      control: 'text',
      description: 'Valor do textfield.',
      table: {
        type: { summary: 'string' },
        category: 'Propriedades',
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder',
      table: {
        type: { summary: 'string' },
        category: 'Propriedades',
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Indica se o textfield está desabilitado.',
      defaultValue: 'false',
      table: {
        type: { summary: 'boolean' },
        category: 'Propriedades',
        defaultValue: { summary: false },
      },
    },
    readonly: {
      control: 'boolean',
      description: 'Indica se o textfield está readonly.',
      defaultValue: 'false',
      table: {
        type: { summary: 'boolean' },
        category: 'Propriedades',
        defaultValue: { summary: false },
      },
    },
    required: {
      control: 'boolean',
      description:
        'Indica se o textfield é do tipo obrigatório. Esta propriedade não modifica o estilo do componente, para fazer isso, pode ser utilizado as propriedades customizáveis.',
      defaultValue: 'false',
      table: {
        type: { summary: 'boolean' },
        category: 'Propriedades',
        defaultValue: { summary: false },
      },
    },
    maxlength: {
      control: 'number',
      description: 'Quantidade máxima de caracteres.',
      table: {
        type: { summary: 'number' },
        category: 'Propriedades',
      },
    },
    minlength: {
      control: 'number',
      description: 'Quantidade mínima de caracteres.',
      table: {
        type: { summary: 'number' },
        category: 'Propriedades',
      },
    },
    type: {
      control: 'text',
      description: 'Tipo de campo, por exemplo: email, text ou number',
      table: {
        type: { summary: 'string' },
        category: 'Propriedades',
        defaultValue: { summary: 'text' },
      },
    },
    getElement: {
      description: 'Retorna o elemento textfield. `HTMLInputElement`',
      table: {
        category: 'Métodos',
      },
    },
    setFocus: {
      description: 'Aciona o foco no componente.',
      table: {
        category: 'Métodos',
      },
    },
    onChange: {
      description:
        'Evento disparado ao alterar o valor do campo e sair do componente.',
      table: {
        category: 'Eventos',
      },
    },
    onInput: {
      description: 'Evento disparado ao alterar o valor do campo.',
      table: {
        category: 'Eventos',
      },
    },
    onBlur: {
      description: 'Evento disparado ao sair do campo.',
      table: {
        category: 'Eventos',
      },
    },
    onFocus: {
      description: 'Evento disparado ao entrar no campo.',
      table: {
        category: 'Eventos',
      },
    },
  },
};

const Template = ({ label, ...args }) => {
  return html`
    <ani-textfield
      placeholder="${args.placeholder}"
      maxlength="${args.maxlength}"
      minlength="${args.minlength}"
      value="${args.value}"
      type="${args.type}"
      required="${args.required}"
      readonly="${args.readonly}"
      disabled="${args.disabled}"
    >
      ${label}
    </ani-textfield>
  `;
};

export const Sample = Template.bind({});
Sample.args = {
  placeholder: '',
  maxlength: '',
  minlength: '',
  value: '',
  type: '',
  required: false,
  readonly: false,
  disabled: false,
  label: '',
};

Sample.parameters = {
  docs: {
    source: {
      code: `
<ani-textfield
  placeholder="${Sample.placeholder}"
  maxlength="${Sample.maxlength}"
  minlength="${Sample.minlength}"
  value="${Sample.value}"
  type="${Sample.type}"
  required="${Sample.required}"
  readonly="${Sample.readonly}"
  disabled="${Sample.disabled}"
>
${Sample.args.label}
</ani-textfield>`,
    },
  },
};