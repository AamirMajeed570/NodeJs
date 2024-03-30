const express = require('express')
const morgan = require('morgan')
const { router } = require('./routes/product')
const app = express()
const productRouter = express.Router()

// bodyParser
app.use(express.json())
app.use(morgan('default'))
app.use('/', router)
// console.log(products)
// Middleware
// CRUD
// API Endpoint

// Base URL,API ROOT : http://localhost:3000
// Update
// In PUT method the product will be overrided It is opposite of PATCH


// SERVER IS LISTENING
app.listen(3000, () =>
  console.log(`Server is Listening at http://localhost:${3000}`)
)
