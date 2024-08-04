# Registration Manager

A aplicação está rodando no github pages, você pode acessar [aqui](https://vitebo.github.io/registration-manager/).

Consulte a [documentação online](https://vitebo.github.io/registration-manager/docs/)
para mais informações sobre a estrutura do projeto, decisões tomadas, problemas encontrados e como
eles foram (ou não) resolvidos.

## Desenvolvimento

Com o repositorio clonado, vamos garantir que estamos utilizando a mesma versão do `yarn` e `node` utilizando o `corepack`.

```shell
corepack enable
corepack install
```

Feito isso, vamos instalar as dependencias do projeto:
OBS: O comando `--frozen-lockfile` é para garantir que estamos utilizando a mesma versão das dependencias.

```shell
yarn --frozen-lockfile
```

### Inicializando o projeto

Para inicializar o projeto podemos rodar:

```shell
yarn dev # sobe a aplicação em modo de desenvolvimento batendo na API local
```

ou

```shell
yarn dev:e2e # sobe a aplicação em modo de desenvolvimento batendo no localstorage
```

Caso suba a aplicação batendo na API local, é necessário subir o servidor json-server para simular a API.

```shell
yarn init:db
```

Para rodar os testes:

```shell
yarn test:dev
```

Para os testes ened-to-end: você precisa primeiro instalar os browsers:

```shell
yarn playwright install --with-deps
```

Depois rodar os testes:

```shell
yarn test:e2e:ui
```

---

Se tude tiver dado certo as seguintes portas estarão disponiveis:

Aplicação http://localhost:3001/

Json Web Server http://localhost:3000/
