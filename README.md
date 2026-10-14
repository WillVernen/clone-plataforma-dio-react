# DIO — Plataforma de cursos de tecnologia

Projeto de uma plataforma de cursos de tecnologia com página inicial, feed, login e cadastro, desenvolvido com React.

## Demonstração

Acesse a demonstração visual publicada no GitHub Pages:

**[Abrir demonstração](https://willvernen.github.io/clone-plataforma-dio-react/)**

O GitHub Pages hospeda a interface estática. As funções de login e cadastro dependem da API JSON Server, que roda localmente durante o desenvolvimento e não está hospedada na demonstração.

## Tecnologias

- React
- React Router
- Styled Components
- React Hook Form e Yup
- Axios
- JSON Server para a API local de demonstração

## Como executar localmente

Requisitos: Node.js e npm.

1. Instale as dependências:

   ```sh
   npm install
   ```

2. Inicie a API em um terminal:

   ```sh
   npm run api
   ```

3. Em outro terminal, inicie a aplicação:

   ```sh
   npm start
   ```

A aplicação estará em `http://localhost:3000` e a API em `http://localhost:8001`.

## Conta de demonstração local

- E-mail: `will@email.com`
- Senha: `123456`

Também existe a conta `vernen@email.com`, com a mesma senha. Novos cadastros são gravados no arquivo local `db.json`.

## Publicação no GitHub Pages

Para ativar a publicação automática, no repositório abra **Settings → Pages → Build and deployment** e selecione **GitHub Actions** como origem. Depois que o workflow concluir com sucesso, o GitHub Pages estará disponível em [willvernen.github.io/clone-plataforma-dio-react](https://willvernen.github.io/clone-plataforma-dio-react/). A cada push na branch `main`, o GitHub Actions publicará a versão atualizada.

## Autoria e licença

Projeto desenvolvido por **Will Vernen**. Distribuído sob a licença [MIT](./LICENSE).

## Aviso sobre autenticação

O JSON Server é usado apenas para demonstração local. Ele armazena senhas em texto puro e não fornece autenticação segura. Não use esse mecanismo em produção; uma aplicação real deve validar credenciais no servidor, armazenar senhas com hash seguro e gerenciar sessões ou tokens.
