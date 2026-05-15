# Farmácia API - NestJS

API adaptada para o projeto de Frontend React da Farmácia.

Ela possui CRUD completo do recurso **Categoria**, com documentação no Swagger.

## Rotas principais

- `GET /categorias` - listar categorias
- `GET /categorias/:id` - buscar categoria por ID
- `POST /categorias` - cadastrar categoria
- `PUT /categorias` - atualizar categoria
- `DELETE /categorias/:id` - deletar categoria

## Swagger

Depois de rodar o projeto, acesse:

```txt
http://localhost:3000/swagger
```

No Render, depois do deploy, acesse:

```txt
https://SEU-LINK-DO-RENDER.onrender.com/swagger
```

## Rodar localmente

```bash
npm install
npm run start:dev
```

## Rodar os testes

```bash
npm run test
npm run test:e2e
```

## Deploy no Render

Use as configurações abaixo:

```txt
Build Command: npm install && npm run build
Start Command: npm run start:prod
```

O projeto já possui `render.yaml`, então o Render também pode identificar as configurações automaticamente.

## Observação importante

Esta versão usa armazenamento em memória para facilitar o deploy e o teste no Swagger. Ou seja, os dados criados ficam disponíveis enquanto a aplicação estiver rodando, mas podem ser resetados quando o Render reiniciar o serviço.
