import './avatar';

describe('Avatar:', () => {
  let avatar: HTMLElement;
  const avatarTagName = 'ani-avatar';

  const getShadowRoot = (tagName: string): ShadowRoot => {
    return document.querySelector(tagName).shadowRoot;
  };

  /**
   * A cada testes irá criar um elemento do tipo ani-avatar no Document
   */
  beforeEach(() => {
    avatar = document.createElement(avatarTagName) as HTMLElement;
  });

  /**
   * Remove o elemento ani-avatar do Document, para não ter problema no próximo teste
   */
  afterEach(() => {
    document.getElementsByTagName(avatarTagName)[0]?.remove();
  });

  /**
   * Nessa abordagem iremos utilizar a constante "avatar" criada no beforeEach
   * para inserir as propriedades do componente dinâmicamente
   */
  test('should ...', () => {
    document.body.appendChild(avatar);
    avatar.setAttribute('image', 'http://test.com');

    const avatarSelector = getShadowRoot(avatarTagName);

    // aqui iria um expect
  });

  /**
   * Com essa outra abordagem estamos inserindo no document um elemento
   * avatar com uma propriedade image e depois podemos usar a função getShadowRoot para buscar esse elemento
   * e fazer as validações necessárias
   */
  test('should ...', () => {
    document.body.innerHTML = `
      <ani-avatar image="http://test.com"></ani-avatar>
    `;

    const avatarSelector = getShadowRoot(avatarTagName);

    // aqui iria um expect
  });
});
