import theme from '@animaliads/animalia-brand';
import tokens from '@animaliads/css-tokens';

export function applyTheme() {
  addStyle(tokens);
  addStyle(theme);
}

function addStyle(style) {
  const css = document.createElement('style');
  const head = document.getElementsByTagName('head')[0];

  css.appendChild(document.createTextNode(style));
  head.insertBefore(css, head.firstChild);
}
