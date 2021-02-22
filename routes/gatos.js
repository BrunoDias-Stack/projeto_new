var express = require('express');
var router = express.Router();
var gatosController = require('../controllers/controllersGeral')

router.get('/', gatosController.gatos) 

module.exports = router;