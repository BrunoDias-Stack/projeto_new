var express = require('express');
var router = express.Router();
var cadastrosController = require('../controllers/controllersGeral')

router.get('/', cadastrosController.cadastros) 

module.exports = router;