# `<ani-label>`

O componente `ani-label` (desenvolvido com [Web Components](https://developer.mozilla.org/pt-BR/docs/Web/Web_Components)) é usado para criar rótulos/labels em um aplicativo da web. Ele pode ser personalizado com diferentes propriedades para atender às necessidades do seu projeto.

## Instalação

Para instalar o componente Label, você pode usar o gerenciador de pacotes npm. Execute o seguinte comando no terminal:

```
npm i @animaliads/ani-label
```

## Como usar

Para usar o componente Label em seu projeto, importe-o no seu código:

```ts
import '@animalia-web-components/label';
```

Em seguida, você pode usar o componente em seu HTML como segue:

```html
<ani-label>Label</ani-label>
```

Isso criará um label padrão com o texto "Label".

## Propriedades

O componente Label pode ser personalizado com as seguintes propriedades:

- `required` (opcional): indica se o campo referente ao label é obrigatório ou opcional. O valor padrão é `false`.

- `required-text` (opcional): mostra visualmente se o campo é obrigatório com "(obrigatório)" ou opcional com "(opcional)". O valor padrão é `false`.

- `disabled` (opcional): mostra visualmente se o label estiver desativado ou não. O valor padrão é `false`.

Você pode definir essas propriedades diretamente no componente Label, como segue:

```html
<ani-label required required-text> Label obrigatório </ani-label>
```

Isso criará um label com a variante `required` que mostrará `"(obrigatório)"` na frente do conteúdo "Label obrigatório", ficando "Label obrigatório (obrigatório)".

## Customização

[EM BREVE]
