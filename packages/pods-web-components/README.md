# Biblioteca de componentes do PODS

<p  align="center">

<img  width="250"  src="./docs/assets/pods-dark.png"  alt="">

</p>

Biblioteca de componentes do design system PODS baseada em Web Components.

## Índice

- [Como usar](#how-to-use)
  - [Angular](#angular)
- [Changelog](#changelog)
- [Navegadores suportados](#browser-support)
- [Polyfills](#polyfills)
- [Licença](#license)

<a id="how-to-use"></a>

## Como usar

Instale o pacote via npm:

```
npm install @po-ds/pods-web-components
```

Ou se preferir, você também pode instalar o componente de forma individual, por exemplo:

```
npm install @po-ds/pods-button
```

Adicione o arquivo instalado no seu arquivo `html` :

```
<script type="module" src="./node_modules/@po-ds/pods-button/index.js"></script>
```

<a id="angular"></a>

### Angular

Para utilizar o web component, você precisará adicionar o `CUSTOM_ELEMENTS_SCHEMA` no módulo da sua aplicação.

```
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [CommonModule],
  declarations: [PageComponent],
  exports: [PageComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

export class PageModule {}
```

Você também precisará importar o pacote dentro do seu componente:

```
import '@po-ds/pods-button';
```

<a id="changelog"></a>

## Changelog

Saiba mais sobre as [últimas correções e melhorias](CHANGELOG.md).

<a id="browser-support"></a>

## Navegadores suportados (Browser Support)

| Chrome   | Firefox  | Safari   | Edge     | IE   |
| -------- | -------- | -------- | -------- | ---- |
| Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11\* |

*IE 11 necessita de *polyfills\* para funcionar e não tem a funcionalidade de troca de tema.

<a id="polyfills"></a>

## Polyfills

[EM BREVE]

<a id="license"></a>

## Licença

[MIT](LICENSE)
