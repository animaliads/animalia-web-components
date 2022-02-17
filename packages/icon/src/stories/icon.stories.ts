import '../icon';
import { html } from 'lit-html';
import { svgs } from '../svg';

const names = Object.keys(svgs);

export default {
  title: 'API/Icon',
  component: 'ani-icon',
  argTypes: {
    name: {
      options: names,
      control: { type: 'select' },
      description: 'Nome do ícone',
      table: {
        type: { summary: 'string' },
        category: 'Propriedades',
      },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      description: 'Tamanhos do ícone.',
      defaultValue: 'button',
      table: {
        type: { summary: 'string' },
        category: 'Propriedades',
        defaultValue: { summary: 'medium' },
      },
    },
  },
};

const Template = ({ ...args }) => {
  return html` <ani-icon name="${args.name}" size="${args.size}"> </ani-icon> `;
};

export const Sample = Template.bind({});
Sample.args = {
  name: 'user',
  size: 'medium',
};

Sample.parameters = {
  docs: {
    source: {
      code: `
<ani-icon
  name="${Sample.args.name}"
  size="${Sample.args.size}"
>
</ani-icon>`,
    },
  },
};
