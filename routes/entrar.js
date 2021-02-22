var express = require('express');
var router = express.Router();
var entrarController = require('../controllers/controllersGeral')

router.get('/', entrarController.entrar) 

module.exports = router;