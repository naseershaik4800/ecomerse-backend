
const sqlite3 = require('sqlite3').verbose()


const db = new sqlite3.Database('./ecomerse.db', err => {
  if (err) {
    console.error('Error connecting to database:', err.message)
  } else {
    console.log('Connected to the SQLite database.')
  }
})


db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    brand TEXT,
    price REAL,
    imageUrl TEXT,
    rating REAL
  )`)

  db.run(`CREATE TABLE IF NOT EXISTS prime_deals (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    brand TEXT,
    price REAL,
    imageUrl TEXT,
    rating REAL
  )`)
})

module.exports = db
