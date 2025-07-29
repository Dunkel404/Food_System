const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Endpoint registro
app.post('/register', async (req, res) => {
  const { user, password } = req.body;
  if (!(user && password)) {
    return res.status(400).json({ message: 'User and password are required' });
  }
  try {
    const query = 'INSERT INTO usuarios (user, password) VALUES (?, ?)';
    db.run(query, [user, password], function(err) {
      if (err) {
        if (err.message.includes('UNIQUE constraint failed')) {
          return res.status(409).json({ message: 'User already exists' });
        }
        return res.status(500).json({ message: 'Database error' });
      }
      res.status(201).json({ message: 'User registered successfully' });
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Endpoint login
app.post('/login', (req, res) => {
  const { user, password } = req.body;
  console.log('Login attempt:', { user, password });
  if (!(user && password)) {
    return res.status(400).json({ message: 'User and password are required' });
  }
  const query = 'SELECT * FROM usuarios WHERE user = ?';
  db.get(query, [user], (err, row) => {
    if (err) {
      console.log('Database error:', err);
      return res.status(500).json({ message: 'Database error' });
    }
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
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
