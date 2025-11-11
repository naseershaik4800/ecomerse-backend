import Database from 'better-sqlite3';


const db = new Database('./ecommerce.db');


db.prepare(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    brand TEXT,
    price REAL,
    imageUrl TEXT,
    rating REAL
  )
`).run();

db.prepare(`
  CREATE TABLE IF NOT EXISTS prime_deals (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    brand TEXT,
    price REAL,
    imageUrl TEXT,
    rating REAL
  )
`).run();


console.log(' SQLite database initialized successfully.');

export default db;
