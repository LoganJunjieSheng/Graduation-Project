var express = require('express');
var router = express.Router();
var myFile =require('../method/file');
router.get('/', function (req, res, next) {
    myFile.readFile(res,req);
});
module.exports = router;
