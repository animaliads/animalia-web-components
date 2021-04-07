import '../button';
import { html } from 'lit-html';

export default {
  title: 'API/Button',
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
    <pods-button type="${args.type}" disabled="${args.disabled}">
      ${label}
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

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  label: 'Button',
  disabled: false,
};

Primary.parameters = {
  docs: {
    source: {
      code: `
<pods-button
  label="${Primary.args.label}"
  type="${Primary.args.type}"
  disabled="${Primary.args.disabled}"
>
</pods-button>`,
    },
  },
};
