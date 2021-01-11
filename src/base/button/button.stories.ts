import './../../../dist/index';

export default {
  title: 'Componentes/PODS BUTTON',
  argTypes: {
    clickButton: { action: 'clicou em mim' },
  },
};

const Template = args => `
<pods-button type="${args.type}" label="${args.label}"></pods-button>
`;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  label: 'Botão',
};

Primary.parameters = { docs: { page: null } };

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  label: 'Botão',
};

export const Default = Template.bind({});
Default.args = {
  type: 'default',
  label: 'Botão',
};
