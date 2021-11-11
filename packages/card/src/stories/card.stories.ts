import '../card';
import { html } from 'lit-html';

export default {
  title: 'API/Card',
  component: 'ani-card',
  argTypes: {
    content: {
      control: 'text',
      description: 'Rótulo',
      table: {
        category: 'Slot',
      },
    },
  },
};

const Template = ({ content }) => {
  return html` <ani-card> ${content} </ani-card> `;
};

export const Sample = Template.bind({});
Sample.args = {
  content: 'Card',
};

Sample.parameters = {
  docs: {
    source: {
      code: `
<ani-card>
${Sample.args.content}
</ani-card>`,
    },
  },
};
