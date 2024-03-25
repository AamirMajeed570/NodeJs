const express = require('express')
const fs = require('fs')
const morgan = require('morgan')
const app = express()
const index = fs.readFileSync('index.html', 'utf-8')
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'))
const products = data.products
// bodyParser
app.use(express.json())
app.use(morgan('default'))
// console.log(products)
// Middleware

// API Endpoint
// Base URL,API ROOT : http://localhost:3000
app.get('/products/', (req, res) => {
  res.json(products)
})

app.get('/products/:id', (req, res) => {
  const id = Number(req.params.id)
  const product = products.find(p => p.id === id)
  res.json(product)
})

app.post('/products/', (req, res) => {
  try {
    console.log(req.body)
    // Your code to handle the POST request
    products.push(req.body)
    res.json({ status: 'Success' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

// Update
// In PUT method the product will be overrided It is opposite of PATCH
app.put('/products/:id', (req, res) => {
  const id = Number(req.params.id)
  const productIndex = products.findIndex(p => p.id === id)
  products.splice(productIndex, 1, { ...req.body, id: id })
  res.json({ message: 'Product Updated', status: 200 })
})
// Update 
app.patch('/products/:id', (req, res) => {
  const id = Number(req.params.id)
  const productIndex = products.findIndex(p => p.id === id)
  const product = products[productIndex];
  products.splice(productIndex, 1, {...product, ...req.body})
  res.json({ message: 'Product Updated', status: 200 })
})
// Delete
app.delete('/products/:id', (req, res) => {
    const id = Number(req.params.id)
    const productIndex = products.findIndex(p => p.id === id)
    const product = products[productIndex];
    products.splice(productIndex, 1)
    res.json({product})
  })
// SERVER IS LISTENING 
app.listen(3000, () =>
  console.log(`Server is Listening at http://localhost:${3000}`)
)
