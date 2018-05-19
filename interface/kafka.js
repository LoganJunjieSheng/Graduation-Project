var express = require('express');
var router = express.Router();
let kafka = require('kafka-node');
router.get('/', function (req, res, next) {
    let Producer = kafka.Producer;
    let KeyedMessage = kafka.KeyedMessage;
    let client = new kafka.Client('localhost:2181');
    let producer = new Producer(client);
    let payloads = [{
        topic: 'testtopic',
        messages: ['success'],
    }];
    producer.on('ready', function () {
        console.log('连接成功')
        producer.send(payloads, function (err, data) {
            // if (err === null) {
            //
            // } else {
            //     res.json({
            //         type: 'defeat',
            //         data: err,
            //     });
            //
            // }

        });
    });
    producer.on('error', function (err) {
       console.log(err);
    });

    res.json({type: 'noPermission'});
});
module.exports = router;
