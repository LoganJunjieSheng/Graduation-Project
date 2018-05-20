let myFile = {
    readFile: (res) => {
        console.log('开始读取文件')
        const fs = require('fs');
        const path = require('path');
        fs.readFile(path.join('/Users/junjiesheng/Desktop/', 'test.js'),{encoding:'utf-8'}, function (err,data) {
            if (err) throw err;
            res.json({
                status: '0',
                data: data,
                time:Date.parse(new Date()),
            });
        });
    }

};
module.exports = myFile;