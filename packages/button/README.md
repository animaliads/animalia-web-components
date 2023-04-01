# `<ani-button>`

O componente `ani-button` (desenvolvido com [Web Components](https://developer.mozilla.org/pt-BR/docs/Web/Web_Components)) é usado para criar botões interativos em um aplicativo da web. Ele pode ser personalizado com diferentes propriedades para atender às necessidades do seu projeto.

## Instalação

Para instalar o componente Button, você pode usar o gerenciador de pacotes npm. Execute o seguinte comando no terminal:

```
npm i @animaliads/ani-button
```

## Como usar

Para usar o componente Button em seu projeto, importe-o no seu código:

```ts
import '@animalia-web-components/button';
```

Em seguida, você pode usar o componente em seu HTML como segue:

```html
<ani-button label="Olá mundo"></ani-button>
```

Isso criará um botão padrão com o texto "Olá mundo".

## Propriedades

O componente Button pode ser personalizado com as seguintes propriedades:

- `variant` (opcional): a variante de estilo do botão. Pode ser "primary", "secondary" ou "tertiary". O valor padrão é "primary".

- `size` (opcional): o tamanho do botão. Pode ser "small", "medium" ou "large". O valor padrão é "medium".

- `type` (opcional): o tipo de botão. Pode ser "button" (padrão), "submit" ou "reset".

- `disabled` (opcional): se o botão estiver desativado ou não. O valor padrão é `false`.

- `icon-only` (opcional): se o botão deve exibir apenas um ícone. O valor padrão é `false`.

- `href` (opcional): o link para o qual o botão deve navegar se `icon-only` for definido como `true`.

Você pode definir essas propriedades diretamente no componente Button, como segue:

```html
<ani-button variant="secondary" size="large" disabled>
  Meu botão desativado
</ani-button>
```

Isso criará um botão com a variante "secondary", o tamanho "large" e que está desativado.

## Ícones

Se você definir a propriedade `icon-only` como `true`, o botão exibirá apenas um ícone. Você deve incluir o ícone como um elemento filho do componente `Button`. Por exemplo:

```html
<ani-button icon-only href="https://www.google.com">
  <i class="material-icons">search</i>
</ani-button>
```

Isso criará um botão com apenas um ícone "search" do Material Icons. Quando o usuário clicar no botão, o navegador será redirecionado para o link especificado na propriedade `href`.

## Eventos

O componente `Button` dispara eventos quando o usuário interage com ele. Você pode ouvir esses eventos no seu código usando as funções `addEventListener` ou `onEventName`. Os eventos suportados são:

- `click`: disparado quando o usuário clica no botão.
- `focus`: disparado quando o botão recebe o foco.
- `blur`: disparado quando o botão perde o foco.
- `keydown`: disparado quando uma tecla é pressionada enquanto o botão está em foco.

## Customização

[EM BREVE]
