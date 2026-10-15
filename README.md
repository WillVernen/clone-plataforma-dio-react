# DIO — Plataforma de cursos de tecnologia

Projeto de uma plataforma de cursos de tecnologia com página inicial, feed, login e cadastro, desenvolvido com React e TypeScript.

## Tecnologias

- React
- TypeScript
- React Router
- Styled Components
- React Hook Form e Yup
- Axios
- JSON Server para a API local

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

## Credenciais para teste local

- E-mail: `will@email.com`
- Senha: `123456`

Também existe a conta `vernen@email.com`, com a mesma senha. Novos cadastros são gravados no arquivo local `db.json`.

## Autoria e licença

Projeto desenvolvido por **Will Vernen**. Distribuído sob a licença [MIT](./LICENSE).

## Aviso sobre autenticação

O JSON Server é usado apenas para testes locais. Ele armazena senhas em texto puro e não fornece autenticação segura. Não use esse mecanismo em produção; uma aplicação real deve validar credenciais no servidor, armazenar senhas com hash seguro e gerenciar sessões ou tokens.
