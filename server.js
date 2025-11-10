const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5000

// Allow requests from your Netlify frontend
app.use(cors({ origin: 'https://charming-lolly-b9022c.netlify.app' }))

const products = [
  { id: '1', title: 'Wireless Headphones', brand: 'SoundX', price: 150, image_url: 'https://via.placeholder.com/150', rating: 4.5 },
  { id: '2', title: 'Smart Watch', brand: 'TimeTech', price: 200, image_url: 'https://via.placeholder.com/150', rating: 4.2 },
  { id: '3', title: 'Gaming Mouse', brand: 'ClickPro', price: 50, image_url: 'https://via.placeholder.com/150', rating: 4.8 },
  { id: '4', title: 'Bluetooth Speaker', brand: 'BeatBox', price: 120, image_url: 'https://via.placeholder.com/150', rating: 4.3 },
]

const primeDeals = [
  { id: '101', title: '4K LED TV', brand: 'ViewMax', price: 500, image_url: 'https://via.placeholder.com/150', rating: 4.7 },
  { id: '102', title: 'Laptop', brand: 'CompPro', price: 800, image_url: 'https://via.placeholder.com/150', rating: 4.6 },
  { id: '103', title: 'Wireless Earbuds', brand: 'SoundX', price: 100, image_url: 'https://via.placeholder.com/150', rating: 4.4 },
]

app.get('/products', (req, res) => {
  res.json({ products })
})

app.get('/prime-deals', (req, res) => {
  res.json({ prime_deals: primeDeals })
})

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`))
