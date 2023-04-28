# `<ani-textfield>`

O componente `ani-textfield` (desenvolvido com [Web Components](https://developer.mozilla.org/pt-BR/docs/Web/Web_Components)) é usado para criar campos de texto interativos em um aplicativo da web. Ele pode ser personalizado com diferentes propriedades para atender às necessidades do seu projeto.

## Instalação

Para instalar o componente Textfield, você pode usar o gerenciador de pacotes npm. Execute o seguinte comando no terminal:

```
npm i @animaliads/ani-textfield
```

## Como usar

Para usar o componente Textfield em seu projeto, importe-o no seu código:

```ts
import '@animalia-web-components/textfield';
```

Em seguida, você pode usar o componente em seu HTML como segue:

```html
<ani-textfield label="Nome" placeholder="Digite seu nome"></ani-textfield>
```

Isso criará um campo de texto com o rótulo "Nome" e uma dica "Digite seu nome".

## Propriedades

O componente Textfield pode ser personalizado com as seguintes propriedades:

- `label` (obrigatório): o rótulo do campo de texto. Deve ser fornecido como um atributo HTML.

- `placeholder` (opcional): uma dica para o usuário. Pode ser usado para fornecer informações adicionais sobre o campo de texto.

- `value` (opcional): o valor atual do campo de texto.

- `disabled` (opcional): se o campo de texto estiver desativado ou não. O valor padrão é `false`.

- `readonly` (opcional): se o campo de texto for somente leitura ou não. O valor padrão é `false`.

- `required` (opcional): se o campo de texto for obrigatório ou não. O valor padrão é `false`.

- `pattern` (opcional): uma expressão regular que o valor do campo de texto deve corresponder.

- `type` (opcional): o tipo do campo de texto. Pode ser "text" (padrão), "email", "password" ou "number".

- `error` (opcional): texto de erro exibido quando houver algum erro no campo.

Você pode definir essas propriedades diretamente no componente Textfield, como segue:

```html
<ani-textfield label="Senha" type="password" required></ani-textfield>
```

Isso criará um campo de texto do tipo "password" com o rótulo "Senha" e que é obrigatório.

## Eventos

O componente `ani-textfield` dispara eventos quando o usuário interage com ele. Você pode ouvir esses eventos no seu código usando as funções `addEventListener` ou `onEventName`. Os eventos suportados são:

- `change`: disparado quando o valor do campo de texto é alterado.

- `focus`: disparado quando o campo de texto recebe o foco.

- `blur`: disparado quando o campo de texto perde o foco.

- `keydown`: disparado quando uma tecla é pressionada enquanto o campo de texto está em foco.

## Customização

[EM BREVE]
