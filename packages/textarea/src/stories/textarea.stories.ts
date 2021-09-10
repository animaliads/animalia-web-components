import '../textarea';
import { html } from 'lit-html';

export default {
  title: 'API/Textarea',
  component: 'ani-textarea',
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
      description: 'Valor do textarea.',
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
      description: 'Indica se o textarea está desabilitado.',
      defaultValue: 'false',
      table: {
        type: { summary: 'boolean' },
        category: 'Propriedades',
        defaultValue: { summary: false },
      },
    },
    readonly: {
      control: 'boolean',
      description: 'Indica se o textarea está readonly.',
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
        'Indica se o textarea é do tipo obrigatório. Esta propriedade não modifica o estilo do componente, para fazer isso, pode ser utilizado as propriedades customizáveis.',
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
    rows: {
      control: 'number',
      description: 'Quantidade de linhas.',
      table: {
        type: { summary: 'number' },
        category: 'Propriedades',
        defaultValue: { summary: 3 },
      },
    },
    getElement: {
      description: 'Retorna o elemento textarea. `HTMLTextAreaElement`',
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
    <ani-textarea
      placeholder="${args.placeholder}"
      maxlength="${args.maxlength}"
      minlength="${args.minlength}"
      value="${args.value}"
      rows="${args.rows}"
      required="${args.required}"
      readonly="${args.readonly}"
      disabled="${args.disabled}"
    >
      ${label}
    </ani-textarea>
  `;
};

export const Sample = Template.bind({});
Sample.args = {
  placeholder: '',
  maxlength: '',
  minlength: '',
  value: '',
  rows: '',
  required: false,
  readonly: false,
  disabled: false,
  label: '',
};

Sample.parameters = {
  docs: {
    source: {
      code: `
<ani-textarea
  placeholder="${Sample.placeholder}"
  maxlength="${Sample.maxlength}"
  minlength="${Sample.minlength}"
  value="${Sample.value}"
  rows="${Sample.rows}"
  required="${Sample.required}"
  readonly="${Sample.readonly}"
  disabled="${Sample.disabled}"
>
${Sample.args.label}
</ani-textarea>`,
    },
  },
};
