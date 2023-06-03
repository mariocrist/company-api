const mailSender = require('../exports/mailSender');

// Actualiza un empresa por su ID
exports.sendEmail = async (req, res, next) => {
    mailSender.send(req.body.pdf, req.body.email, (resul) => {
        res.status(200).json({"status": resul ? 'ok' : 'error' });
    });
}