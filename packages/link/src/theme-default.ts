export function addCss(fileName: string): void {
  const head = document.head;
  const link = document.createElement('link');

  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = fileName;

  head.insertBefore(link, head.firstChild);
}

addCss('./node_modules/@animaliads/animalia-brand/theme.css');
addCss('./node_modules/@animaliads/css-tokens/global-tokens.css');
