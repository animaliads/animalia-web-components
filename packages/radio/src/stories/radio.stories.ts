import '../radio';
import { html } from 'lit-html';

export default {
  title: 'API/Radio',
  component: 'ani-radio',
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
    disabled: {
      control: 'boolean',
      description: 'Indica se o radio está desabilitado.',
      defaultValue: 'false',
      table: {
        type: { summary: 'boolean' },
        category: 'Propriedades',
        defaultValue: { summary: false },
      },
    },
    checked: {
      control: 'boolean',
      description: 'Habilita/Desabilita o radio',
      defaultValue: 'false',
      table: {
        type: { summary: 'boolean' },
        category: 'Propriedades',
        defaultValue: { summary: false },
      },
    },
    size: {
      options: ['medium', 'large'],
      control: { type: 'radio' },
      description: 'Tamanhos do radio.',
      defaultValue: 'radio',
      table: {
        type: { summary: 'string' },
        category: 'Propriedades',
        defaultValue: { summary: 'medium' },
      },
    },
  },
};

const Template = ({ label, ...args }) => {
  return html`
    <ani-radio
      checked="${args.checked}"
      size="${args.size}"
      disabled="${args.disabled}"
    >
      ${label}
    </ani-radio>
  `;
};

export const Sample = Template.bind({});
Sample.args = {
  label: '',
  checked: false,
  disabled: false,
  size: 'medium',
};

Sample.parameters = {
  docs: {
    source: {
      code: `
<ani-radio
  checked="${Sample.args.checked}"
  size="${Sample.args.size}"
  disabled="${Sample.args.disabled}"
>
${Sample.args.label}
</ani-radio>`,
    },
  },
};
