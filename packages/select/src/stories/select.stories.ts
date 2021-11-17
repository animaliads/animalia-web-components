import '../select';
import { html } from 'lit-html';

export default {
  title: 'API/Select',
  component: 'ani-select',
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
    items: {
      control: 'text',
      description:
        'Opção do select. Espera uma lista de objetos contendo as propriedades label e value',
      table: {
        type: { summary: 'string' },
        category: 'Propriedades',
      },
    },
    value: {
      control: 'text',
      description: 'Valor do select.',
      table: {
        type: { summary: 'string' },
        category: 'Propriedades',
      },
    },
    labelChooseOption: {
      control: 'text',
      description:
        'Texto da opção para criar uma opção do tipo "Escolha uma opção"',
      table: {
        type: { summary: 'string' },
        category: 'Propriedades',
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Indica se o select está desabilitado.',
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
        'Indica se o select é do tipo obrigatório. Esta propriedade não modifica o estilo do componente, para fazer isso, pode ser utilizado as propriedades customizáveis.',
      defaultValue: 'false',
      table: {
        type: { summary: 'boolean' },
        category: 'Propriedades',
        defaultValue: { summary: false },
      },
    },
    getElement: {
      description: 'Retorna o elemento select. `HTMLInputElement`',
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
    <ani-select
      label-choose-option="${args.labelChooseOption}"
      value="${args.value}"
      required="${args.required}"
      disabled="${args.disabled}"
      items="${args.items}"
    >
      ${label}
    </ani-select>
  `;
};

export const Sample = Template.bind({});
Sample.args = {
  labelChooseOption: '',
  value: '',
  required: false,
  disabled: false,
  label: '',
  items: '[{"label": "item 1", "value": 1}, {"label": "item 2", "value": 2}]',
};

Sample.parameters = {
  docs: {
    source: {
      code: `
<ani-select
  label-choose-option="${Sample.labelChooseOption}"
  value="${Sample.value}"
  required="${Sample.required}"
  disabled="${Sample.disabled}"
  items='${Sample.items}'
>
${Sample.args.label}
</ani-select>`,
    },
  },
};
