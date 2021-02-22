var express = require('express');
var router = express.Router();
var homeController = require('../controllers/controllersGeral')
/* GET home page. */
router.get('/', homeController.home) 
var novoController = require('../controllers/home')
/* GET home page. */
router.get('/', novoController.home) 

module.exports = router;
