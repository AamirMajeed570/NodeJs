const express = require('express')
const { userCtrlRegistration, userCtrlLogin, userCtrlProfile } = require('../controller/user');
const isAuthenticated = require('../middlewares/isAuth');
const router = express.Router()

router.post('/api/users/register',userCtrlRegistration)
router.post('/api/users/login',userCtrlLogin);
router.get('/api/users/profile',isAuthenticated,userCtrlProfile);
module.exports = router;