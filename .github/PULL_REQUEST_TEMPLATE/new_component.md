## `<< NOME-DO-COMPONENTE >>` - novo componente
  
Novo componente do tipo `<< NOME-DO-COMPONENTE >>`

### Como revisar

- Testar no labs do storybook `<< adicione o link do labs do storybook >>`

#### Para os devs

- Clonar o repositório
- `npm i`
- `npx lerna bootstrap`
- `npx lerna run build`


Adicionar o seletor do componente no arquivo `animalia-web-components/demo/app/index.html`, da seguinte forma:

```
<< coloque aqui a forma de testar o componente, exemplo: <ani-button>Label</ani-button> >>
```

Depois execute o comando:

```
npx lerna run start
```

Que irá abrir uma janela no seu navegador com o app de demonstração do componente. 


PR animalia brand: `<< colocar o link da pr do animalia-brand >>`
