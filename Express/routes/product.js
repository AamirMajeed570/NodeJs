const express = require('express')
const {
  getAllProduct,
  getProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
  createProduct
} = require('../controller/product')
const router = express.Router()

router
  .get('/products/', getAllProduct)
  .get('/products/:id', getProduct)
  .post('/products/', createProduct)
  .put('/products/:id', replaceProduct)
  .patch('/products/:id', updateProduct)
  .delete('/products/:id', deleteProduct);

module.exports = {router};


