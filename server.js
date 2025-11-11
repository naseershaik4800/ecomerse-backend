const express = require('express');
const cors = require('cors');
const db = require('./database');


const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors({ origin: '*' }));
app.use(express.json());


app.get('/products', (req, res) => {
  db.all('SELECT * FROM products', [], (err, rows) => {
    if (err) {
      console.error('Error fetching products:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.json({ products: rows });
    }
  });
});


app.get('/prime-deals', (req, res) => {
  db.all('SELECT * FROM prime_deals', [], (err, rows) => {
    if (err) {
      console.error('Error fetching prime deals:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.json({ prime_deals: rows });
    }
  });
});



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
