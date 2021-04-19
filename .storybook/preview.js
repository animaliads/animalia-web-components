import { html } from 'lit-html';

export const parameters = {
  viewMode: 'docs',
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      order: [
        'Página inicial',
        'Princípios de design',
        'Começando',
        'Guia de estilo',
        'Componentes',
        'API',
        'Changelog',
      ],
    },
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'poui',
    toolbar: {
      icon: 'circle',
      items: [
        { value: 'poui', title: 'PO UI' },
        { value: 'fluig', title: 'Fluig' },
      ],
    },
  },
};

const decorator = (story, context) => {
  const theme = context.globals.theme;
  const links = {
    poui: 'https://unpkg.com/@animaliads/po-ui-brand@dev/theme.css',
    fluig: 'https://unpkg.com/@animaliads/fluig-brand@dev/theme.css',
  };
  return html`
    <link rel="stylesheet" href="${links[theme]}" />
    ${story()}
  `;
};
export const decorators = [decorator];
