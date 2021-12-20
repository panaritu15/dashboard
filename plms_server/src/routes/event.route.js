const express=  require('express')
const router = express.Router()

const eventController = require('../controllers/event.controller');

// get all user lst
// router.get('/',userController.getallusers);

// get id user lst
 router.get('/',eventController.getEventInfo);



module.exports = router