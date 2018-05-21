const nodemailer = require('nodemailer');
let myMail = {
    send: (to, subject, text, html) => {
        console.log('开始发送邮件');
        let mailTransport = nodemailer.createTransport({
            host: 'smtp.qq.com',
            port: 465,
            secureConnection: true, // 使用SSL方式（安全方式，防止被窃取信息）
            auth: {
                user: '1716855757@qq.com',
                pass: 'mmnncwftvuqqccba',
            },
        });
        let mailOptions = {
            from: '"sheng" <1716855757@qq.com>',
            to: to,
            subject: subject, // Subject line
            text: text, // plain text body
            html: html // html body
        };

        mailTransport.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        });
    }
};
module.exports = myMail;