// index.js
const express = require('express');
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Route 1: Home
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Node.js Lab App' });
});

// Route 2: Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

// Route 3: Get all users (dummy data)
app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'Ali' },
    { id: 2, name: 'Sara' }
  ];
  res.json(users);
});

// Route 4: Add a user (POST)
app.post('/api/users', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }
  res.status(201).json({ id: Date.now(), name });
});

// Important: only auto-start the server when NOT running on Vercel.
// Vercel imports "app" and handles the listening itself.
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;
