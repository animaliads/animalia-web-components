import '../checkbox';
import { html } from 'lit-html';

export default {
  title: 'API/Checkbox',
  component: 'ani-checkbox',
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
      description: 'Indica se o checkbox está desabilitado.',
      defaultValue: 'false',
      table: {
        type: { summary: 'boolean' },
        category: 'Propriedades',
        defaultValue: { summary: false },
      },
    },
    checked: {
      options: ['true', 'false', 'mixed'],
      control: { type: 'radio' },
      description: 'Habilita/Desabilita o checkbox',
      defaultValue: 'false',
      table: {
        type: { summary: 'string' },
        category: 'Propriedades',
        defaultValue: { summary: false },
      },
    },
    size: {
      options: ['medium', 'large'],
      control: { type: 'radio' },
      description: 'Tamanhos do checkbox.',
      defaultValue: 'checkbox',
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
    <ani-checkbox
      checked="${args.checked}"
      size="${args.size}"
      disabled="${args.disabled}"
    >
      ${label}
    </ani-checkbox>
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
<ani-checkbox
  checked="${Sample.args.checked}"
  size="${Sample.args.size}"
  disabled="${Sample.args.disabled}"
>
${Sample.args.label}
</ani-checkbox>`,
    },
  },
};
