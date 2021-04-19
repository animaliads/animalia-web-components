# Desenvolvimento

Agradecemos o seu interesse em contribuir com o PO Design System!

Os nossos componentes são desenvolvidos utilizando Web Components e Typescript.
Para aprender sobre essas tecnologias você pode iniciar pelos seguintes links:

- [TypeScript for JavaScript Programmers](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Web Components - Getting Started](https://www.webcomponents.org/introduction)
- [Usando custom elements](https://developer.mozilla.org/pt-BR/docs/Web/Web_Components/Usando_custom_elements)
- [Using shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)

## Índice

- [Desenvolvimento](#desenvolvimento)
  - [Índice](#índice)
  - [Pré requisitos](#pré-requisitos)
  - [Ambiente de desenvolvimento](#ambiente-de-desenvolvimento)
  - [Testes](#testes)
  - [Formatadores e validadores de código](#formatadores-e-validadores-de-código)
  - [Ambiente de produção](#ambiente-de-produção)
  - [Ferramentas recomendadas](#ferramentas-recomendadas)

<a id="prerequisites"></a>

## Pré requisitos

- Node (versão 10.x ou acima)

<a id="development-environment"></a>

## Ambiente de desenvolvimento

Para distribuir os componentes em ambiente de desenvolvimento execute o comando abaixo:

```
npm run dev
```

Este comando deverá continuar executando enquanto estiver desenvolvendo. Dentro da pasta `demo`

contém um arquivo chamado `index.html`, dentro dele já contém algumas configurações iniciais pré-configuradas

para começar a testar os componentes.

Para executá-lo, utilizamos o servidor de desenvolvimento `live-server`, para isso execute o seguinte comando abaixo:

```
npm run start
```

Você também pode fazer essas duas ações juntas através do seguinte comando:

```
npm run start:dev
```

<a id="tests"></a>

## Testes

Os testes são feitos utilizando o [Jest](https://jestjs.io/). Abaixo segue os comandos que você pode estar executando durante o desenvolvimento dos testes:

| Comando              | Descrição                                                      |
| -------------------- | -------------------------------------------------------------- |
| npm run test         | Executa todos os testes e a cobertura de testes (coverage)     |
| npm run test:dev     | Executa apenas os testes criados/modificados de forma contínua |
| npm run test:dev:all | Executa todos os testes de forma contínua                      |

<a id="formatters-validators"></a>

## Formatadores e validadores de código

Para formatar os códigos de forma automática utilizamos o [Prettier](https://prettier.io/). Dessa forma, dentro

dele já contém todo o nosso estilo de código. E para validar se o estilo está correto, você pode executar o comando:

```
npm run prettier:check
```

E para executar o formatador e deixar o código no padrão:

```
npm run prettier
```

Também utilizamos validadores para prevenir erros no código, para isso utilizamos o [ESLint](https://eslint.org/).

| Comando          | Descrição                                                |
| ---------------- | -------------------------------------------------------- |
| npm run lint     | Valida o código e retorna quais arquivos estão com erro. |
| npm run lint:fix | Valida o código e corrige os erros.                      |

<a id="production-environment"></a>

## Ambiente de produção

Para gerar os pacotes, execute o seguinte comando:

```
npm run build
```

Ao executá-lo, ele irá gerar um diretório `dist/packages` e dentro dele terá todos os componentes

como um pacote e também será gerado um pacote geral contendo todos os pacotes dentro, por exemplo:

```
dist/

--| packages/

----| button/

----| link/

----| animalia-web-components/
```

Esses pacotes possibilitam ao usuário utilizar apenas um componentes isolado ou utilizar a biblioteca inteira.

<a id="tools"></a>

## Ferramentas recomendadas

- VS Code

- [Editor Config](https://editorconfig.org/) para VS Code

- [ESLint para VS Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
