import '../tooltip';
import { html } from 'lit-html';

export default {
  title: 'API/Tooltip',
  component: 'ani-tooltip',
  argTypes: {
    tip: {
      control: 'text',
      description:
        'Rótulo. Define qual será o texto exibido no tooltip. Temos um exemplo de como fazer essa customização no Live Demo.',
      table: {
        type: { summary: 'string' },
        category: 'Slot',
      },
    },
    position: {
      options: ['bottom', 'top', 'left', 'right'],
      control: { type: 'radio' },
      description:
        'Rótulo. Define o posicionamento do tooltip em relação ao componente ancorado. Temos um exemplo de como fazer essa customização no Live Demo.',
      table: {
        type: { summary: 'string' },
        category: 'Propriedades',
        defaultValue: { summary: 'bottom' },
      },
      defaultValue: 'radio',
    },
    direction: {
      options: ['start', 'center', 'end'],
      control: { type: 'radio' },
      description:
        'Rótulo. Define qual será o direcionamento da seta do tooltip em relação ao componente ancorado.Temos um exemplo de como fazer essa customização no Live Demo.',
      table: {
        type: { summary: 'string' },
        category: 'Propriedades',
        defaultValue: { summary: 'center' },
      },
      defaultValue: 'radio',
    },
  },
};

const Template = ({ label, ...args }) => {
  return html`
    <ani-tooltip
      id="tooltip2"
      tip="${args.tip}"
      position="${args.position}"
      direction="${args.direction}"
    >
      <ani-button aria-describedby="tooltip2"> Button 2 </ani-button>
    </ani-tooltip>
  `;
};

export const Sample = Template.bind({});
Sample.args = {
  tip: 'Tooltip',
  position: 'bottom',
  direction: 'center',
};

Sample.parameters = {
  docs: {
    source: {
      code: `
<ani-tooltip
  tip="${Sample.args.tip}"
  position="${Sample.args.position}"
  direction="${Sample.args.direction}"
>
</ani-tooltip>`,
    },
  },
};
