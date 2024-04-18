const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../model/User')

const userCtrlRegistration = async (req, res) => {
  const { username, email, password } = req.body
  if (!username || !email || !password) {
    throw new Error('All Fields are Required')
  }
  const userExists = await User.findOne({ email })
  if (userExists) {
    throw new Error('User Already Exists')
  }
  // !Hash Password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)
  // !Create A User
  const userCreate = await User.create({
    username,
    email,
    password: hashedPassword
  })
  // console.log(req.body)
  // ! Send The Response
  res.json({
    username: userCreate.username,
    email: userCreate.email,
    id: userCreate.id
  })
}
const userCtrlLogin = async (req, res) => {
    // ! Check If User Exists

    // ! Check If Password is Valid

    // ! Generate The Token
    
    // ! Send the response
}

const userCtrlProfile = async (req, res) => {}

module.exports = {
  userCtrlRegistration
}
