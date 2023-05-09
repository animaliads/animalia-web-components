# `<ani-tooltip>`

O componente `ani-tooltip` (desenvolvido com [Web Components](https://developer.mozilla.org/pt-BR/docs/Web/Web_Components)) é usado para criar tooltipes interativos em um aplicativo da web. Ele pode ser personalizado com diferentes propriedades para atender às necessidades do seu projeto.

## Instalação

Para instalar o componente Tooltip, você pode usar o gerenciador de pacotes npm. Execute o seguinte comando no terminal:

```
npm i @animaliads/ani-tooltip
```

## Como usar

Para usar o componente Tooltip em seu projeto, importe-o no seu código:

```ts
import '@animalia-web-components/tooltip';
```

Em seguida, você pode usar o componente em seu HTML como segue:

```html
<ani-tooltip content="Olá mundo" position="top">
  <ani-button>Hover me</ani-button>
</ani-tooltip>
```

No exemplo acima, um tooltip será exibido quando o usuário passar o mouse sobre o botão "Hover me". O conteúdo do tooltip é definido pelo atributo `content`. O atributo `position` define a posição em que o tooltip será exibido em relação ao elemento.

## Propriedades

O componente Tooltip pode ser personalizado com as seguintes propriedades:

- `content`: Conteúdo do tooltip.

- `position`: Posição em que o tooltip será exibido (`top`, `top-left`, `top-right`, `right`, `right-top`, `right-bottom`, `bottom`, `bottom-left`, `bottom-right`, `left`, `left-top`, `left-bottom`)

Você pode definir essas propriedades diretamente no componente Tooltip, como segue:

```html
<ani-tooltip content="Olá mundo" position="top-right">
  <ani-button>Hover me</ani-button>
</ani-tooltip>
```

## Customização

[EM BREVE]
