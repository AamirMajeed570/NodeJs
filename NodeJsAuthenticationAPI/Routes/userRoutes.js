const express = require('express')
const { userCtrlRegistration } = require('../controller/user')
const router = express.Router()

router.post('/api/users/register',userCtrlRegistration)

module.exports = router;