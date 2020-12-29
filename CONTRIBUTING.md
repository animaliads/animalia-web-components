# Contribuindo com o PODS

Os componentes do PODS são desenvolvidos com Web Components e Typescript.

## Pré requisitos

- Node (versão 10.x ou acima)

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

## Testes

Os testes são feitos utilizando o [Jest](https://jestjs.io/). Abaixo segue os comandos que você pode
estar executando durante o desenvolvimento dos testes:

| Comando              | Descrição                                                      |
| -------------------- | -------------------------------------------------------------- |
| npm run test         | Executa todos os testes e a cobertura de testes (coverage)     |
| npm run test:dev     | Executa apenas os testes criados/modificados de forma contínua |
| npm run test:dev:all | Executa todos os testes de forma contínua                      |

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

## Ambiente de produção

[EM CONSTRUÇÃO]

## Ferramentas recomendadas

- VS Code
- [Editor Config](https://editorconfig.org/) para VS Code
- [ESLint para VS Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
