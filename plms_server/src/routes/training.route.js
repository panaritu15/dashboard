const express=  require('express')
const router = express.Router()

const trainingController = require('../controllers/training.controller');

// get all user lst
// router.get('/',userController.getallusers);

// get id user lst
 router.get('/',trainingController.getTrainingInfo);



module.exports = router