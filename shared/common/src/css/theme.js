import theme from '@animaliads/animalia-brand';
import tokens from '@animaliads/css-tokens';

let initialized = false;

/**
 * Aplica o tema do Animalia brand e os Global tokens de forma automatizada
 * na aplicação apenas uma única vez.
 */
export const applyGlobalTheme = () => {
  if (!initialized) {
    addStyle(tokens);
    addStyle(theme);

    initialized = true;
  }
};

function addStyle(style, id) {
  const head = document.getElementsByTagName('head')[0];
  const css = document.createElement('style');

  css.appendChild(document.createTextNode(style));
  head.insertBefore(css, head.firstChild);
}
