const express=  require('express')
const router = express.Router()

const clientController = require('../controllers/client.controller');

// get all user lst
// router.get('/',userController.getallusers);

// get clients lst
 router.get('/status',clientController.getClientInfo);

// get all data from clients lst
 router.get('/details',clientController.getDetails);

// get all data from clients lst
 router.get('/:id',clientController.getClientById);



module.exports = router