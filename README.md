# Food System - Sistema de Login

Sistema de login simples com Node.js, PostgreSQL e Vercel.

## 🚀 Tecnologias

- **Backend**: Node.js + Express
- **Banco de Dados**: PostgreSQL
- **Frontend**: React (Next.js)
- **Deploy**: Vercel

## 📋 Pré-requisitos

- Node.js 16+
- PostgreSQL
- Conta na Vercel

## 🔧 Instalação Local

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   ```bash
   cp .env.example .env
   ```
   Edite o arquivo `.env` com suas credenciais do PostgreSQL.

4. Execute as migrações:
   ```bash
   npm run migrate
   ```

5. Inicie o servidor:
   ```bash
   npm run dev
   ```
   ## 🔐 Credenciais Padrão

- **Email**: admin@foodsystem.com
- **Senha**: admin123

## 🚀 Deploy na Vercel

1. Faça login na Vercel:
   ```bash
   npm i -g vercel
   vercel login
   ```

2. Faça o deploy:
   ```bash
   vercel --prod
   ```

3. Configure as variáveis de ambiente no painel da Vercel:
   - `DATABASE_URL`: URL do PostgreSQL
   - `JWT_SECRET`: Chave secreta para JWT

## 📁 Estrutura do Projeto

```
Food_System/
├── server.js          # Servidor Express
├── migrate.js         # Migrações do banco
├── vercel.json        # Configuração do Vercel
├── .env.example       # Exemplo de variáveis
├── package.json       # Dependências
└── src/
    └── app/
        └── auth/
            └── login/
                └── page.jsx  # Página de login
```

## 🔒 Segurança

- Senhas hasheadas com bcrypt
- Tokens JWT com expiração de 24h
- CORS configurado
- Validação de entrada

## 📝 API Endpoints

- `POST /api/auth/login` - Fazer login
- `POST /api/auth/verify` - Verificar token
- `GET /api/health` - Health check

