const mailSender = require('../exports/mailSendGrid');

// Actualiza un empresa por su ID
exports.sendEmail = async (req, res, next) => {
    mailSender.send(req.body.pdf, req.body.email, (resul) => {
        console.log(resul);
    });
    res.status(200).json({"status": "ok"})
}
