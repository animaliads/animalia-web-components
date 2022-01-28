import { applyGlobalTheme } from './../css/theme';

/**
 * Decorator para poder colocar as funcionalidades em comum dos componentes
 * Neste caso, ele aplica o tema global no componente.
 * @param prefix seletor do componente
 * @returns Classe do componente
 */
export const Component = (prefix: string) => {
  return (target: CustomElementConstructor) => {
    applyGlobalTheme();

    if (!customElements.get(prefix)) {
      customElements.define(prefix, target);
    }
  };
};
