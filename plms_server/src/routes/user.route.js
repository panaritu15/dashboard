const express=  require('express')
const router = express.Router()

const userController = require('../controllers/user.controller');

// get all user lst
router.get('/status',userController.getUserInfo);

// Login 'user
router.get('/login',userController.loginUser);



module.exports = router