const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
const db = require('./db');



const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());


app.post('/register', async (req, res) => {
  const { user, password } = req.body;
  if (!(user && password)) {
    return res.status(400).json({ message: 'User and password are required' });
  }
  try {
    const query = 'INSERT INTO usuarios (user, password) VALUES (@param0, @param1)';
    await db.query(query, [user, password]);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    if (err.number === 2627) { // E
      return res.status(409).json({ message: 'User already exists' });
    }
    return res.status(500).json({ message: 'Database error' });
  }
});


app.post('/login', async (req, res) => {
  const { user, password } = req.body;
  console.log('Login attempt:', { user, password });
  if (!(user && password)) {
    return res.status(400).json({ message: 'User and password are required' });
  }
  const query = 'SELECT * FROM usuarios WHERE user = @param0';
  try {
    const result = await db.query(query, [user]);
    const rows = result.recordset;
    const row = rows[0];
    if (!row) {
      console.log('No user found with user:', user);
      return res.status(401).json({ message: 'Invalid user or password' });
    }
    console.log('User found:', { dbUser: row.user, dbPassword: row.password });
    if (password === row.password) {
      console.log('Password match');
      res.json({ message: 'Login successful' });
    } else {
      console.log('Password mismatch');
      res.status(401).json({ message: 'Invalid user or password' });
    }
  } catch (err) {
    console.log('Database error:', err);
    return res.status(500).json({ message: 'Database error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
