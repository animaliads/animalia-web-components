# Contribuindo com o Animalia DS

Agradecemos o seu interesse em contribuir com o Animalia Design System!

## Código de conduta

Primeiramente, pedimos para que leiam com atenção nosso [Código de Conduta](https://github.com/animaliads/animalia-web-components/blob/next/CODE_OF_CONDUCT.md) para se inteirarem sobre nossas regras.

## Fluxo

Este guia tem por objetivo definir as regras para criação de _Issues_ relacionadas à melhorias ou defeitos na biblioteca, assim como orientar no interesse em colaborar com o Animalia DS, definindo premissas para criação de novas _Branchs_, _Pull Requests_ e _Commits_ no projeto Animalia.

### Criando uma issue no GitHub

- Antes de tudo, se você possui alguma questão relacionada ao uso do _design system_, bem como dúvidas relacionadas a componentes, por favor pergunte nos nossos canais de comunicação.

- A lista de _issues_ do repositório Animalia DS é de uso exclusivo para informe de bugs e requisições de melhorias. _Issues_ que não se enquadrarem nisso serão fechadas imediatamente.

- Se você tem uma nova _feature_ para nos sugerir ou então deseja reportar um bug, por favor avalie se nas [_Pull Requests_ do Animalia DS](https://github.com/animaliads/animalia-web-components/pulls) não tem nenhuma submissão anterior que resolva o problema, eliminando assim a eventual hipótese de duplicidade.

- É requerido que você descreva de maneira clara os passos necessários para reproduzir a _issue_ reportada. Entenda que, apesar de sermos sempre solícitos e darmos o pronto-apoio em nossos canais, reproduzir erros sem evidências diretas tomam um grande tempo da equipe.

- As issues que não tiverem uma descrição detalhada e um passo-a-passo para reprodução terão menor prioridade. Se em caso de solicitação do _core team_ por maiores evidências, o autor da _issue_ terá 30 dias para resposta. Se neste período não houver qualquer resposta, então a _issue_ será fechada.

### Criando reprodução de código para nova _issue_

- Crie uma nova aplicação em _TypeScript_ incluindo o componente e o comportamento reportado para nossa análise.

- Adicione o mínimo de código necessário para reprodução do _bug_, facilitando assim a verificação da situação.

- Publique a aplicação no GitHub e inclua o link ao criar a _issue_.

- Certifique-se de incluir os passos para reprodução da _issue_. Estes passos devem ser claros e simples de seguir.

### Colaborando com o Animalia DS

Mais uma vez agradecemos por dedicar seu tempo para contribuir com o Animalia DS! Antes de submeter uma _pull request_, pedimos pra que você crie uma _issue_ reportando uma eventual sugestão de melhoria, nova funcionalidade ou correção de _bug_ e nos deixe ciente de que deseja criar uma _pull request_ para isso. Caso se trate de uma _issue_ já existente, por favor comente na _issue_. Isso nos ajuda a acompanhar as _pull requests_ e também evitar duplicidades.

## Setup Inicial

Este projeto usa o gerenciador de pacotes NPM e a ferramenta Lerna para instalar e gerenciar suas dependências. Para começar, siga as instruções abaixo:

1. Certifique-se de ter o Node.js e o NPM instalados em sua máquina. Você pode instalá-los a partir do site oficial: [nodejs.org](https://https://nodejs.org/en/download/)

2. Clone o nosso repositório em sua máquina por meio do link: https://github.com/animaliads/animalia-web-components

saiba mais em [como clonar um repositório do Github](https://docs.github.com/pt/desktop/contributing-and-collaborating-using-github-desktop/adding-and-cloning-repositories/cloning-a-repository-from-github-to-github-desktop).

3. Uma vez clonado o projeto, abra um terminal na raiz do projeto e execute o comando:

```
npm install
```

Este comando instalará todas as dependências do projeto listadas no arquivo package.json.

4. Em seguida, instale a ferramenta Lerna globalmente usando o comando:

```
npm install -g lerna
```

5. Agora, execute o seguinte comando para inicializar o ambiente de desenvolvimento e instalar as dependências em todos os pacotes do projeto:

```
lerna bootstrap
```

6. Após a instalação das dependências, execute o seguinte comando para compilar o código:

```
lerna run buid
```

Este comando compilará o código em todos os pacotes do projeto.

7. Por fim, execute o seguinte comando para iniciar o Storybook:

```
npm run storybook
```

Este comando iniciará o Storybook em seu navegador para visualizar e testar os componentes do projeto.

Com esses passos, você terá instalado todas as dependências e configurado o ambiente de desenvolvimento para trabalhar no projeto.

## Estrutura do Repositório

Aqui está uma visão geral da estrutura do repositório:

```javascript
├── assets/
│   └── ...
├── components/
│   ├── src/
│   │   ├── components/
│   │   │   ├── accordion/
│   │   │   │   ├── ...
│   │   │   ├── button/
│   │   │   │   ├── ...
│   │   │   └── ...
│   ├── dist/
│   │   ├── accordion/
│   │   │   ├── ...
│   │   ├── button/
│   │   │   ├── ...
│   │   └── ...
│   ├── README.md
│   └── ...
├── docs/
│   ├── README.md
│   └── ...
├── scripts/
│   ├── build.js
│   ├── publish.js
│   └── ...
├── tests/
│   ├── components/
│   │   ├── accordion/
│   │   │   ├── ...
│   │   ├── button/
│   │   │   ├── ...
│   │   └── ...
│   ├── utils/
│   │   ├── ...
│   ├── jest.config.js
│   └── ...
├── .babelrc.js
├── .eslintrc.js
├── .gitignore
├── LICENSE
├── package.json
├── README.md
├── tsconfig.json
└── webpack.config.js
```

### Descrição da Estrutura

| Pasta/Arquivo          | Descrição                                                                                                                          |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `assets/`              | Contém arquivos de imagem e outros ativos utilizados pelos componentes.                                                            |
| `components/`          | Contém todo o código fonte para cada componente do projeto, organizado por tipo de componente (ex. accordion, button, card, etc.). |
| `components/src/`      | Contém o código fonte dos componentes em si.                                                                                       |
| `components/dist/`     | Contém as versões compiladas dos componentes, prontas para uso em um projeto.                                                      |
| `components/README.md` | Contém informações sobre como utilizar os componentes.                                                                             |
| `docs/`                | Contém a documentação do projeto.                                                                                                  |
| `docs/README.md`       | Contém informações gerais sobre o projeto, incluindo uma introdução, instruções de instalação e uso, etc.                          |
| `scripts/`             | Contém scripts para construir e publicar o projeto.                                                                                |
| `tests/`               | Contém os testes automatizados do projeto.                                                                                         |
| `tests/components/`    | Contém os testes unitários para cada componente.                                                                                   |
| `tests/utils/`         | Contém funções utilitárias compartilhadas pelos testes.                                                                            |
| `tests/jest.config.js` | Contém as configurações para o framework de testes Jest.                                                                           |
| `.babelrc.js`          | Arquivo de configuração do Babel.                                                                                                  |
| `.eslintrc.js`         | Arquivo de configuração do ESLint.                                                                                                 |
| `.gitignore`           | Arquivo de configuração do Git para ignorar certos arquivos/diretórios.                                                            |
| `LICENSE`              | Arquivo de licença do projeto.                                                                                                     |
| `package.json`         | Arquivo de metadados do projeto, incluindo as dependências, scripts de build, etc.                                                 |
| `README.md`            | Arquivo principal com informações gerais sobre o projeto.                                                                          |
| `tsconfig.json`        | Arquivo de configuração do TypeScript.                                                                                             |
| `webpack.config.js`    | Arquivo de configuração do Webpack.                                                                                                |

## Link úteis

- [Documentação da instalação do projeto no Github](https://github.com/animaliads/animalia-web-components#instala%C3%A7%C3%A3o)
- [Nodejs.org](https://https://nodejs.org/en/download/)
- [Como clonar um repositório do Github](https://docs.github.com/pt/desktop/contributing-and-collaborating-using-github-desktop/adding-and-cloning-repositories/cloning-a-repository-from-github-to-github-desktop)
- [Angular elements](https://angular.io/guide/elements)
- [Usando Web Components no React](https://pt-br.reactjs.org/docs/web-components.html)
