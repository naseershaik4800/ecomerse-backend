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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
