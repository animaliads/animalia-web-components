import '../tooltip';
import { html } from 'lit-html';

export default {
  title: 'API/Tooltip',
  component: 'ani-tooltip',
  argTypes: {
    label: {
      control: 'text',
      description: 'Rótulo',
      table: {
        type: { summary: 'string' },
        category: 'Slot',
      },
    },
    content: {
      control: 'text',
      description: 'Conteúdo do tooltip',
      table: {
        type: { summary: 'string' },
        category: 'Properties',
      },
    },
    position: {
      control: 'inline-radio',
      description: 'Posição do tooltip',
      options: [
        'top',
        'right',
        'bottom',
        'left',
        'top-left',
        'top-right',
        'bottom-left',
        'bottom-right',
        'left-top',
        'left-bottom',
        'right-top',
        'right-bottom',
      ],
      table: {
        type: { summary: 'string' },
        category: 'Properties',
      },
    },
  },
};

const Template = ({ label, content, position }) => {
  return html`
    <ani-tooltip content="${content}" position="${position}">
      ${label}
    </ani-tooltip>
  `;
};

export const Sample = Template.bind({});
Sample.args = {
  label: 'Tooltip',
  content: 'Conteúdo do tooltip',
  position: 'top',
};

Sample.parameters = {
  docs: {
    source: {
      code: `
<ani-tooltip
  content="${Sample.args.content}"
  position="${Sample.args.position}"
>
${Sample.args.label}
</ani-tooltip>`,
    },
  },
};
