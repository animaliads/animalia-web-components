import { html } from 'lit-html';

export const parameters = {
  viewMode: 'docs',
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: {
      method: '',
      order: [
        'Página inicial',
        'Princípios',
        'Começando',
        'Guia de estilo',
        ['Cores', 'Tipografia'],
        ['Visão geral', 'Boas práticas', 'Design Tokens'],
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
    poui: 'https://unpkg.com/@po-ds/po-ui-brand/theme.css',
    fluig: 'https://unpkg.com/@po-ds/fluig-brand/theme.css',
  };
  return html`
    <link rel="stylesheet" href="${links[theme]}" />
    ${story()}
  `;
};
export const decorators = [decorator];
