const express=  require('express')
const router = express.Router()

const courseController = require('../controllers/course.controller');

// get all user lst
// router.get('/',userController.getallusers);

// get id user lst
 router.get('/',courseController.getCourseInfo);



module.exports = router