import express from 'express';
import cors from 'cors';
import db from './database.js'; 

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5050;

console.log('Connected to SQLite database.');


app.get('/', (req, res) => {
  res.send('Backend server is running successfully 🚀');
});


app.get('/products', (req, res) => {
  const products = db.prepare('SELECT * FROM products').all();
  res.json(products);
});


app.get('/prime-deals', (req, res) => {
  const primeDeals = db.prepare('SELECT * FROM prime_deals').all();
  res.json(primeDeals);
});


app.post('/login', (req, res) => {
  const { username, password } = req.body;

  
  const VALID_USERNAME = 'naseer';
  const VALID_PASSWORD = 'password'; 

  if (username === VALID_USERNAME && password === VALID_PASSWORD) {
    res.json({ jwt_token: 'dummy_jwt_token_123456' });
  } else {
    res.status(401).json({ error_msg: 'Invalid username or password' });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
