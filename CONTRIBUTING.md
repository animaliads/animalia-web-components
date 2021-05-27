# Contribuindo com o Animalia DS

Agradecemos o seu interesse em contribuir com o Animalia Design System!

[EM BREVE]

## Pull requests

## Issues

## Criando um novo componente

Para criar um novo componente, você precisará adicionar:

1. As propriedades customizadas do novo componente no repositório do Animalia.
2. Adicionar o novo componente no repositório dos componentes.

### Adicionando o novo componente no repositório

### Adicionando as propriedades customizadas no tema

1. Baixe ou clone o repositório do tema
   1. Caso você não faça parte do Core Team, você precisará fazer esse processo através de um fork
2. Crie uma nova branch a partir na branch `next`
3. Abra o repositório utilizado um editor de código de sua preferência
4. Navegue até o diretório `animalia-brand/src/theme/components` e crie um novo diretório com o nome do novo componente, por exemplo: `button`, `link`, `radio-button`
5. Em seguida crie um arquivo .css e adicione as propriedades que você deseja customizar
   para essa marca, por exemplo:

   ```css
   ani-link {
     --font-family: var(--font-family-text);
     --text-color: var(--color-action-default);

     --text-color-hover: var(color-action-hover);

     --text-color-focus: var(--color-action-default);
     --outline-color-focused: var(--color-action-focus);

     --text-color-pressed: var(--color-action-pressed);

     --text-color-visited: var(--color-action-pressed);
   }
   ```

6. Execute o comando `npm run build` e verique se no diretório `dist` foi criado o arquivo com o tema contendo o css novo que você acabou de criar.
