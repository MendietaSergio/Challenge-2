var express = require('express');
var router = express.Router();

const { List, Add } = require('../controllers/apiController')

router
    .get('/list', List)
    .post('/new-questions', Add)


module.exports = router;
