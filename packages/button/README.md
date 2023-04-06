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

- `icon` (opcional): o nome do ícone a ser exibido no botão. O componente `ani-icon` deve ser importado e configurado separadamente para que o ícone seja exibido.

Você pode definir essas propriedades diretamente no componente Button, como segue:

```html
<ani-button variant="secondary" size="large" disabled icon="arrow-right">
  Meu botão desativado
</ani-button>
```

Isso criará um botão com a variante "secondary", o tamanho "large" e que está desativado.

## Ícones

Além de texto, o botão também pode exibir em seu conteúdo texto e ícone ou apenas um ícone. Para isso você deve incluir o ícone como um valor da propriedade `icon` do componente `ani-button`. Por exemplo:

```html
<ani-button icon="arrow-right"></ani-button>
```

Isso criará um botão com apenas um ícone "arrow-right".

Você pode usar qualquer ícone suportado pelo componente `ani-icon`, basta especificar o nome do ícone na propriedade `icon`.

## Eventos

O componente `Button` dispara eventos quando o usuário interage com ele. Você pode ouvir esses eventos no seu código usando as funções `addEventListener` ou `onEventName`. Os eventos suportados são:

- `click`: disparado quando o usuário clica no botão.
- `focus`: disparado quando o botão recebe o foco.
- `blur`: disparado quando o botão perde o foco.
- `keydown`: disparado quando uma tecla é pressionada enquanto o botão está em foco.

## Customização

[EM BREVE]
