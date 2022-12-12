var express = require('express');
var router = express.Router();

const { Home } = require('../controllers/indexController')
router.get('/', Home) 
module.exports = router;
