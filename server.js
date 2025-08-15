// const express = require('express');
// const cors = require('cors');
// const { Pool } = require('pg');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// const app = express();
// const port = process.env.PORT || 3000;

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.static('public'));

// // Database connection
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false,
//     sslmode: 'require'
//   }
// });

// // Test database connection
// pool.query('SELECT NOW()', (err, res) => {
//   if (err) {
//     console.error('❌ Erro ao conectar ao banco:', err);
//   } else {
//     console.log('✅ Conectado ao PostgreSQL:', res.rows[0].now);
//   }
// });

// // Login endpoint
// app.post('/api/auth/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({ 
//         success: false, 
//         message: 'Email e senha são obrigatórios' 
//       });
//     }

//     // Buscar usuário
//     const result = await pool.query(
//       'SELECT * FROM pizzaria WHERE email = $1',
//       [email.toLowerCase()]
//     );

//     if (result.rows.length === 0) {
//       return res.status(401).json({ 
//         success: false, 
//         message: 'Email ou senha inválidos' 
//       });
//     }

//     const user = result.rows[0];

//     // Verificar senha
//     const isValidPassword = password === user.password;
    
//     if (!isValidPassword) {
//       return res.status(401).json({ 
//         success: false, 
//         message: 'Email ou senha inválidos' 
//       });
//     }

//     // Gerar token JWT
//     const token = jwt.sign(
//       { 
//         userId: user.id, 
//         email: user.email, 
//         role: user.role 
//       },
//       process.env.JWT_SECRET || 'default-secret',
//       { expiresIn: '24h' }
//     );

//     res.json({
//       success: true,
//       message: 'Login realizado com sucesso',
//       token,
//       user: {
//         id: user.id,
//         email: user.email,
//         name: user.name,
//         role: user.role
//       }
//     });

//   } catch (error) {
//     console.error('❌ Erro no login:', error);
//     res.status(500).json({ 
//       success: false, 
//       message: 'Erro interno do servidor' 
//     });
//   }
// });

// // Verificar token
// app.post('/api/auth/verify', async (req, res) => {
//   try {
//     const token = req.headers.authorization?.split(' ')[1];

//     if (!token) {
//       return res.status(401).json({ 
//         success: false, 
//         message: 'Token não fornecido' 
//       });
//     }

//     const decoded = jwt.verify(token, process.env.JWT_SECRET || 'default-secret');
    
//     // Buscar usuário atualizado
//     const result = await pool.query(
//       'SELECT id, email, name, role FROM pizzaria WHERE id = $1',
//       [decoded.userId]
//     );

//     if (result.rows.length === 0) {
//       return res.status(401).json({ 
//         success: false, 
//         message: 'Usuário não encontrado' 
//       });
//     }

//     res.json({
//       success: true,
//       user: result.rows[0]
//     });

//   } catch (error) {
//     res.status(401).json({ 
//       success: false, 
//       message: 'Token inválido' 
//     });
//   }
// });

// // Error handling
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ 
//     success: false, 
//     message: 'Algo deu errado!' 
//   });
// });

// // Serve login page
// app.get('/login', (req, res) => {
//   res.send(`
//     <!DOCTYPE html>
//     <html>
//       <head>
//         <title>Food System - Login</title>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <script src="https://cdn.tailwindcss.com"></script>
//       </head>
//       <body>
//         <div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
//           <div class="max-w-md w-full space-y-8">
//             <div>
//               <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
//                 Entrar no Food System
//               </h2>
//             </div>
//             <form class="mt-8 space-y-6" action="/api/auth/login" method="POST">
//               <div class="rounded-md shadow-sm -space-y-px">
//                 <div>
//                   <input
//                     name="email"
//                     type="email"
//                     required
//                     class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
//                     placeholder="Email"
//                   />
//                 </div>
//                 <div>
//                   <input
//                     name="password"
//                     type="password"
//                     required
//                     class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
//                     placeholder="Senha"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <button
//                   type="submit"
//                   class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//                 >
//                   Entrar
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </body>
//     </html>
//   `);
// });

// // Start server
// app.listen(port, () => {
//   console.log(`🚀 Servidor rodando na porta ${port}`);
//   console.log(`📱 Frontend disponível em: http://localhost:${port}`);
//   console.log(`🔐 Página de login: http://localhost:${port}/login`);
//   console.log(`📊 API Health Check: http://localhost:${port}/api/health`);
// });