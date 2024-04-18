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
  // ! console.log(req.body)
  // ! Send The Response
  res.json({
    username: userCreate.username,
    email: userCreate.email,
    id: userCreate.id
  })
}
const userCtrlLogin = async (req, res) => {
    // ! Check If User Exists
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        throw new Error("Invalid  Credentials")
    }
    // ! Check If Password is Valid
    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
        throw new Error("Invalid  Credentials")
    }
    // ! Generate The Token
    const token = jwt.sign({id:user._id},"anyKey",{expiresIn:"30d"});
    // ! Send the response
    res.json({
        message:"Login Success",
        token,
        id:user._id,
        email:user.email,
        username:user.username,
    })
}

const userCtrlProfile = async (req, res) => {
    try {
        // Find the user by ID, excluding the password field
        const user = await User.findById(req.user).select("-password");
        
        // Send the user object as a JSON response
        res.json({ user });
    } catch (error) {
        // Handle any errors that occur during database operations
        res.status(500).json({ error: "Internal Server Error" });
    }
}


module.exports = {
  userCtrlRegistration,
  userCtrlLogin,
  userCtrlProfile
}
