var express = require('express');
var router = express.Router();
var myKafka =require('../method/kafka');
router.get('/', function (req, res, next) {
    // console.log(req.query);
    let jsonMessage = JSON.stringify(req.query);
    myKafka.sendMessage(res,'localhost:2181','testtopic',jsonMessage);
});
module.exports = router;
