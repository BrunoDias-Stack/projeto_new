var express = require('express');
var router = express.Router();
var novoController = require('../controllers/novo')
/* GET home page. */
router.get('/', novoController.novo) 

module.exports = router;
