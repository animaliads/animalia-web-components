import { applyTheme } from './../css/theme';

let initialized = false;

export const Component = (prefix: string) => {
  return (target: CustomElementConstructor) => {
    if (!initialized) {
      applyTheme();
      initialized = true;
    }

    customElements.define(prefix, target);
  };
};
