require('dotenv').config();
const sql = require('mssql');

const config = {
  user: process.env.DB_USER || '',
  password: process.env.DB_PASSWORD || '',
  server: process.env.DB_SERVER || 'localhost',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 1433,
  database: process.env.DB_DATABASE || 'food_system',
  options: {
    encrypt: false, 
    trustServerCertificate: true,
  },
  pool: {
    max: 10,
    idleTimeoutMillis: 30000,
  },
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL');
    return pool;
  })
  .catch(err => {
    console.log('Database Connection Failed! Bad Config: ', err);
  });

module.exports = {
  query: async (query, params) => {
    const pool = await poolPromise;
    try {
      const request = pool.request();
      if (params && params.length) {
        params.forEach((param, index) => {
          request.input('param' + index, param);
        });
      }
      const result = await request.query(query);
      return result;
    } catch (err) {
      throw err;
    }
  },
  sql,
};
