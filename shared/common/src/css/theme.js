import theme from '@animaliads/animalia-brand';
import tokens from '@animaliads/css-tokens';

export function applyTheme() {
  addStyle(tokens);
  addStyle(theme);
}

function addStyle(style, id) {
  const head = document.getElementsByTagName('head')[0];
  const css = document.createElement('style');

  css.appendChild(document.createTextNode(style));
  head.insertBefore(css, head.firstChild);
}
