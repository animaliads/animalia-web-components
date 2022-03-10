import '../tooltip';
import { html } from 'lit-html';

export default {
  title: 'API/Tooltip',
  component: 'ani-tooltip',
  argTypes: {
    id: {
      control: 'text',
      description:
        'Rótulo. O estilo do rótulo não é tratado no componente. Temos um exemplo de como fazer essa customização no Live Demo.',
      table: {
        type: { summary: 'string' },
        category: 'Slot',
      },
    },
    tip: {
      control: 'text',
      description:
        'Rótulo. O estilo do rótulo não é tratado no componente. Temos um exemplo de como fazer essa customização no Live Demo.',
      table: {
        type: { summary: 'string' },
        category: 'Slot',
      },
    },
    position: {
      control: 'text',
      description:
        'Rótulo. O estilo do rótulo não é tratado no componente. Temos um exemplo de como fazer essa customização no Live Demo.',
      table: {
        type: { summary: 'string' },
        category: 'Slot',
      },
    },
    direction: {
      control: 'text',
      description:
        'Rótulo. O estilo do rótulo não é tratado no componente. Temos um exemplo de como fazer essa customização no Live Demo.',
      table: {
        type: { summary: 'string' },
        category: 'Slot',
      },
    },
  },
};

const Template = ({ label, ...args }) => {
  return html`
    <ani-tooltip
      id="${args.tip}"
      tip="${args.tip}"
      position="${args.position}"
      direction="${args.direction}"
    >
    </ani-tooltip>
  `;
};

export const Sample = Template.bind({});
Sample.args = {
  id: '',
  tip: 'Tooltip',
  position: 'bottom',
  direction: 'center',
};

Sample.parameters = {
  docs: {
    source: {
      code: `
<ani-tooltip
  checked="${Sample.args.checked}"
  disabled="${Sample.args.disabled}"
>
${Sample.args.label}
</ani-tooltip>`,
    },
  },
};
