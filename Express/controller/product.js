const fs = require('fs')
const index = fs.readFileSync('index.html', 'utf-8')
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'))
const products = data.products;
const getAllProduct = (req, res) => {
    res.json(products)
  }
  
  const getProduct = (req, res) => {
    const id = Number(req.params.id)
    const product = products.find(p => p.id === id)
    res.json(product)
  }
  
  const createProduct = (req, res) => {
    try {
      console.log(req.body)
      // Your code to handle the POST request
      products.push(req.body)
      res.json({ status: 'Success' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  }
  const replaceProduct = (req, res) => {
    const id = Number(req.params.id)
    const productIndex = products.findIndex(p => p.id === id)
    products.splice(productIndex, 1, { ...req.body, id: id })
    res.json({ message: 'Product Updated', status: 200 })
  }
  
  const updateProduct = (req, res) => {
    const id = Number(req.params.id)
    const productIndex = products.findIndex(p => p.id === id)
    const product = products[productIndex]
    products.splice(productIndex, 1, { ...product, ...req.body })
    res.json({ message: 'Product Updated', status: 200 })
  }
  
  const deleteProduct = (req, res) => {
    const id = Number(req.params.id)
    const productIndex = products.findIndex(p => p.id === id)
    const product = products[productIndex]
    products.splice(productIndex, 1)
    res.json({ product })
  }

  module.exports = {
    getProduct,
    getAllProduct,
    createProduct,
    replaceProduct,
    updateProduct,
    deleteProduct
  }