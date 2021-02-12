var express = require('express');
var router = express.Router();
var novoController = require('../controllers/home')
/* GET home page. */
router.get('/', novoController.home) 

module.exports = router;
