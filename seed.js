const db = require('./database');

const products = [
  ['Wireless Headphones', 'SoundX', 150, 'https://via.placeholder.com/150', 4.5],
  ['Smart Watch', 'TimeTech', 200, 'https://via.placeholder.com/150', 4.2],
  ['Gaming Mouse', 'ClickPro', 50, 'https://via.placeholder.com/150', 4.8],
  ['Bluetooth Speaker', 'BeatBox', 120, 'https://via.placeholder.com/150', 4.3],
];

const primeDeals = [
  ['4K LED TV', 'ViewMax', 500, 'https://via.placeholder.com/150', 4.7],
  ['Laptop', 'CompPro', 800, 'https://via.placeholder.com/150', 4.6],
  ['Wireless Earbuds', 'SoundX', 100, 'https://via.placeholder.com/150', 4.4],
];

db.serialize(() => {
  const insertProduct = db.prepare(
    'INSERT INTO products (title, brand, price, imageUrl, rating) VALUES (?, ?, ?, ?, ?)'
  );
  products.forEach(p => insertProduct.run(p));
  insertProduct.finalize();

  const insertPrime = db.prepare(
    'INSERT INTO prime_deals (title, brand, price, imageUrl, rating) VALUES (?, ?, ?, ?, ?)'
  );
  primeDeals.forEach(p => insertPrime.run(p));
  insertPrime.finalize();

  console.log('Sample data inserted');
});

db.close();
