import '../label';
import { html } from 'lit-html';

export default {
  title: 'API/Label',
  component: 'ani-label',
  argTypes: {
    text: {
      control: 'text',
      description: 'Rótulo.',
      table: {
        type: { summary: 'string' },
        category: 'Slot',
      },
    },
    required: {
      control: 'boolean',
      description:
        'Indica se o campo referente ao label é obrigatório ou opcional.',
      defaultValue: 'false',
      table: {
        type: { summary: 'boolean' },
        category: 'Propriedades',
        defaultValue: { summary: false },
      },
    },
    requiredText: {
      control: 'boolean',
      description:
        'Mostra visualmente se o campo é obrigatório com "(obrigatório)" ou opcional com "(opcional)".',
      defaultValue: 'false',
      table: {
        type: { summary: 'boolean' },
        category: 'Propriedades',
        defaultValue: { summary: false },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Indica se o campo referente ao label está desabilitado.',
      defaultValue: 'false',
      table: {
        type: { summary: 'boolean' },
        category: 'Propriedades',
        defaultValue: { summary: false },
      },
    },
  },
};

const Template = ({ text, ...args }) => {
  return html`
    <ani-label
      required="${args.required}"
      required-text="${args.requiredText}"
      disabled="${args.disabled}"
    >
      ${text}
    </ani-label>
  `;
};

export const Sample = Template.bind({});
Sample.args = {
  text: 'Label',
  required: false,
};

Sample.parameters = {
  docs: {
    source: {
      code: `
<ani-label
  required="${Sample.args.required}"
  required-text="${Sample.args.required}"
  disabled="${Sample.args.disabled}"
>
  ${Sample.args.text} 
</ani-label>`,
    },
  },
};
