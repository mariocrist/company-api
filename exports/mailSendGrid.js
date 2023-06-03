const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


exports.send = function  (data, email, callback){

  const msg = {
    to: email,
    from: process.env.EMAIL_FROM,
    subject: 'Lista de productos',
    text: 'Envio de lista',
    attachments: [
      {
        content: data,
        filename: "attachment.pdf",
        type: "application/pdf",
        disposition: "attachment"
      }
    ]
  };
  try {
    sgMail.send(msg).catch(err => {
      console.log(err);
    });
  } catch (error) {
    console.log(error);
    callback(false);
    return;
  }
  callback(true);
}
