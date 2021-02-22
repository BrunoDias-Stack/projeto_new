var express = require('express');
var router = express.Router();
var caesController = require('../controllers/controllersGeral')

router.get('/', caesController.caes) 

module.exports = router;