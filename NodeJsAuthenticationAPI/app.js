const express = require('express')
const app = express()
const mongoose = require('mongoose')
const router = require('./Routes/userRoutes')
const PORT = 3000

mongoose.connect("mongodb://localhost:27017/auth-api")
.then(()=>console.log("DB connected Successfully"))
.catch((e)=>console.log("Some Error Occurred",e))

app.use(express.json())

// !TEST API
app.use('/',router);

app.listen(PORT,()=>{
    console.log(`Server is Listening at http://localhost:${PORT}`)
})