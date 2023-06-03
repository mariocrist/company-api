const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    requireTLS: true,
    auth: {
        user: process.env.EMAIL_USER ,
        pass: process.env.EMAIL_PASS
    }
});


exports.send = function  (data, email, callback){
    let mailOptions = {
        from: process.env.EMAIL_FROM,
        to: email,
        subject: "Lista de productos Attachment",
        text: "Envio de lista",
        attachments: [
            {
                filename: 'attachment.pdf',
                content: data,
                contentType: 'application/pdf',
                encoding: 'base64'    //this line!!!!
            }
        ]
    };

    try {
        transporter.sendMail(mailOptions, (error, info) => {
            console.log(info);
            if (error) {
                console.log(error);
                callback(false);
            }
            callback(true);
        });
    } catch (error) {
        console.log(error);
    } 
    
}
