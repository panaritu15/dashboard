const express=  require('express')
const router = express.Router()

const userRoleController = require('../controllers/user-role.controller');

// get all user lst
// router.get('/',userController.getallusers);

// get id user lst
 router.get('/',userRoleController.getUserRoleInfo);



module.exports = router