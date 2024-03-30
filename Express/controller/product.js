const fs = require('fs')
const { Product } = require('../model/product')
const createProduct = (req, res) => {
  const product = new Product()
}
const getAllProduct = (req, res) => {
    res.json(products)
  }
  
  const getProduct = (req, res) => {
    const id = Number(req.params.id)
    const product = products.find(p => p.id === id)
    res.json(product)
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