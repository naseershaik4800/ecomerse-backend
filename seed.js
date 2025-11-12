import db from './database.js';

db.prepare('DELETE FROM products').run();
db.prepare('DELETE FROM prime_deals').run();

const products = [
  { title: "iPhone 15 Pro", brand: "Apple", price: 1299, imageUrl: "/images/iphone15pro.jpg", rating: 4.8 },
  { title: "Galaxy S24 Ultra", brand: "Samsung", price: 1199, imageUrl: "/images/galaxy-s24-ultra.jpg", rating: 4.7 },
  { title: "Pixel 9 Pro", brand: "Google", price: 1099, imageUrl: "/images/pixel9pro.jpg", rating: 4.6 },
  { title: "OnePlus 12", brand: "OnePlus", price: 899, imageUrl: "/images/oneplus12.jpg", rating: 4.5 },
  { title: "Sony Xperia 1 VI", brand: "Sony", price: 999, imageUrl: "/images/sony-xperia1vi.jpg", rating: 4.3 },
  { title: "Nothing Phone 2", brand: "Nothing", price: 799, imageUrl: "/images/nothing2.jpg", rating: 4.4 },
  { title: "iPad Pro M4", brand: "Apple", price: 1599, imageUrl: "/images/ipad-prom4.jpg", rating: 4.9 },
  { title: "MacBook Air M3", brand: "Apple", price: 1399, imageUrl: "/images/macbook-air-m3.jpg", rating: 4.8 },
  { title: "Dell XPS 15", brand: "Dell", price: 1899, imageUrl: "/images/dell-xps15.jpg", rating: 4.7 },
  { title: "Asus ROG Strix", brand: "Asus", price: 1999, imageUrl: "/images/asus-rog-strix.jpg", rating: 4.6 }
];

const primeDeals = [
  { title: "Amazon Echo Dot", brand: "Amazon", price: 49, imageUrl: "/images/echo-dot.jpg", rating: 4.4 },
  { title: "Fire TV Stick 4K", brand: "Amazon", price: 39, imageUrl: "/images/fire-tv-stick.jpg", rating: 4.5 },
  { title: "Sony WH-1000XM5", brand: "Sony", price: 349, imageUrl: "/images/sony-wh1000xm5.jpg", rating: 4.9 },
  { title: "Apple Watch Ultra 2", brand: "Apple", price: 799, imageUrl: "/images/apple-watch-ultra2.jpg", rating: 4.8 },
  { title: "Kindle Paperwhite", brand: "Amazon", price: 129, imageUrl: "/images/kindle-paperwhite.jpg", rating: 4.7 }
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

console.log('Sample data inserted successfully with local images.');
