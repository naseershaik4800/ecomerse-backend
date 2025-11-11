import db from './database.js';


db.prepare('DELETE FROM products').run();
db.prepare('DELETE FROM prime_deals').run();


const products = [
  {
    title: 'Apple iPhone 15',
    brand: 'Apple',
    price: 999.99,
    imageUrl: 'https://via.placeholder.com/150',
    rating: 4.8
  },
  {
    title: 'Samsung Galaxy S23',
    brand: 'Samsung',
    price: 899.99,
    imageUrl: 'https://via.placeholder.com/150',
    rating: 4.6
  }
];


const primeDeals = [
  {
    title: 'OnePlus 12',
    brand: 'OnePlus',
    price: 799.99,
    imageUrl: 'https://via.placeholder.com/150',
    rating: 4.5
  },
  {
    title: 'Google Pixel 8',
    brand: 'Google',
    price: 899.99,
    imageUrl: 'https://via.placeholder.com/150',
    rating: 4.7
  }
];


const insertProduct = db.prepare(`
  INSERT INTO products (title, brand, price, imageUrl, rating)
  VALUES (@title, @brand, @price, @imageUrl, @rating)
`);
products.forEach(product => insertProduct.run(product));


const insertPrime = db.prepare(`
  INSERT INTO prime_deals (title, brand, price, imageUrl, rating)
  VALUES (@title, @brand, @price, @imageUrl, @rating)
`);
primeDeals.forEach(deal => insertPrime.run(deal));

console.log(' Sample data inserted successfully.');
