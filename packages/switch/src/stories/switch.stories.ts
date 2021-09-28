import '../switch';
import { html } from 'lit-html';

export default {
  title: 'API/Switch',
  component: 'ani-switch',
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
      description: 'Indica se o switch está desabilitado.',
      defaultValue: 'false',
      table: {
        type: { summary: 'boolean' },
        category: 'Propriedades',
        defaultValue: { summary: false },
      },
    },
    checked: {
      control: 'boolean',
      description: 'Marca e desmarca o switch',
      defaultValue: 'false',
      table: {
        type: { summary: 'boolean' },
        category: 'Propriedades',
        defaultValue: { summary: false },
      },
    },
  },
};

const Template = ({ label, ...args }) => {
  return html`
    <ani-switch checked="${args.checked}" disabled="${args.disabled}">
      ${label}
    </ani-switch>
  `;
};

export const Sample = Template.bind({});
Sample.args = {
  label: '',
  checked: false,
  disabled: false,
};

Sample.parameters = {
  docs: {
    source: {
      code: `
<ani-switch
  checked="${Sample.args.checked}"
  disabled="${Sample.args.disabled}"
>
${Sample.args.label}
</ani-switch>`,
    },
  },
};
