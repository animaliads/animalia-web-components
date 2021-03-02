import '../button';
import { html } from 'lit-html';

export default {
  title: 'API/Button',
  description: '**Descrição do compoent**',
  component: 'pods-button',
  argTypes: {
    label: {
      control: 'text',
      description: 'Rótulo',
    },
    type: {
      control: { type: 'select', options: ['primary', 'secondary', 'default'] },
      description: 'Tipo',
    },
    disabled: {
      control: 'boolean',
      description: 'Indica se o botão está desabilitado',
      default: false,
    },
    onClick: { action: 'clicked' },
  },
};

const Template = ({ label, ...args }) => {
  return html`
    <pods-button
      label="${label}"
      type="${args.type}"
      disabled="${args.disabled}"
    >
    </pods-button>
    <script>
      function teste() {
        console.log('função de fora');
      }

      const buttons = document.querySelectorAll('pods-button');
      buttons.forEach(button => button.addEventListener('onClick', teste));
    </script>
  `;
};

export const Sample = Template.bind({});
Sample.args = {
  type: 'primary',
  label: 'Button',
  disabled: false,
};

Sample.parameters = {
  docs: {
    source: {
      code: `
<pods-button
  label="${Sample.args.label}"
  type="${Sample.args.type}"
  disabled="${Sample.args.disabled}"
>
</pods-button>`,
    },
  },
};
