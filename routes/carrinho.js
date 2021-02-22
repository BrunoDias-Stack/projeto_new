var express = require('express');
var router = express.Router();
var carrinho_de_comprasController = require('../controllers/controllersGeral')

router.get('/', carrinho_de_comprasController.carrinho) 

module.exports = router;