var express = require('express');
var router = express.Router();
var pedidosController = require('../controllers/controllersGeral')

router.get('/', pedidosController.pedidos) 

module.exports = router;