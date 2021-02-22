var express = require('express');
var router = express.Router();
var passarosController = require('../controllers/controllersGeral')

router.get('/', passarosController.passaros) 

module.exports = router;