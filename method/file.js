let myFile = {
    readFile: (res, req) => {
        const fs = require('fs');
        const path = require('path');
        const myMail = require('./mail');
        fs.readFile(path.join('/Users/junjiesheng/Desktop/', 'test.js'), {encoding: 'utf-8'}, function (err, data) {
            if (err) throw err;
            //提取数据
            const idStart = data.indexOf('id:\'') + 4;
            const idEnd = data.indexOf('\',');
            const id = data.substring(idStart, idEnd);
            // console.log(idStart);
            // console.log(idEnd);
            // console.log(id);
            const valueStart = data.indexOf('value:\'') + 7;
            const valueEnd = data.indexOf('\',', idEnd + 2);
            const value = parseInt(data.substring(valueStart, valueEnd));
            // console.log(valueStart);
            // console.log(valueEnd);
            // console.log(value);
            const maxStart = data.indexOf('max:\'') + 5;
            const maxEnd = data.indexOf('\',', valueEnd + 2);
            const max = parseInt(data.substring(maxStart, maxEnd));
            // console.log(valueStart);
            // console.log(valueEnd);
            // console.log(max);
            //读取req
            // let over=req.query.over;
            let preValue = parseInt(req.query.preValue);
            if (value > max) {
                console.log('超过阈值');
                // console.log(value);
                // console.log(preValue);
                if (value !== preValue) {
                    let html = '<div>' +
                        '<div>id:'+id+'</div>'+
                        '<div>value:'+value+'</div>'+
                        '<div>max:'+max+'</div>'+
                        '</div>';
                    myMail.send('logan_junjiesheng@163.com',
                        'Edison数据警报',
                        'text',
                        html);
                    preValue = value;
                } else {
                    // preValue=NaN;
                }
            } else {

            }
            const resData = {
                id: id,
                value: value,
                max: max,
            };

            res.json({
                status: '0',
                data: resData,
                time: Date.parse(new Date()),
                preValue: preValue,
            });
        });
    }

};
module.exports = myFile;