const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors({ origin: 'https://charming-lolly-b9022c.netlify.app' }));
app.use(express.json()); 

// Dummy data
const products = [
  { id: '1', title: 'Wireless Headphones', brand: 'SoundX', price: 150, imageUrl: 'https://via.placeholder.com/150', rating: 4.5 },
  { id: '2', title: 'Smart Watch', brand: 'TimeTech', price: 200, imageUrl: 'https://via.placeholder.com/150', rating: 4.2 },
  { id: '3', title: 'Gaming Mouse', brand: 'ClickPro', price: 50, imageUrl: 'https://via.placeholder.com/150', rating: 4.8 },
  { id: '4', title: 'Bluetooth Speaker', brand: 'BeatBox', price: 120, imageUrl: 'https://via.placeholder.com/150', rating: 4.3 },
];

const primeDeals = [
  { id: '101', title: '4K LED TV', brand: 'ViewMax', price: 500, imageUrl: 'https://via.placeholder.com/150', rating: 4.7 },
  { id: '102', title: 'Laptop', brand: 'CompPro', price: 800, imageUrl: 'https://via.placeholder.com/150', rating: 4.6 },
  { id: '103', title: 'Wireless Earbuds', brand: 'SoundX', price: 100, imageUrl: 'https://via.placeholder.com/150', rating: 4.4 },
];


app.get('/', (req, res) => {
  res.send('Ecomerse backend is running');
});


app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Simple mock authentication — replace with DB later
  if (username === 'naseer' && password === 'password') {
    return res.json({ jwt_token: 'dummy-jwt-token' });
  } else {
    return res.status(401).json({ error_msg: 'Invalid credentials' });
  }
});


app.get('/products', (req, res) => {
  res.json({ products });
});


app.get('/prime-deals', (req, res) => {
  res.json({ prime_deals: primeDeals });
});


app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
