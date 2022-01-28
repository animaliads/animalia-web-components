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
  },
};

const Template = ({ ...args }) => {
  return html` <ani-icon name="${args.name}"> </ani-icon> `;
};

export const Sample = Template.bind({});
Sample.args = {
  name: 'user',
};

Sample.parameters = {
  docs: {
    source: {
      code: `
<ani-icon
  name="${Sample.args.name}"
>
</ani-icon>`,
    },
  },
};
