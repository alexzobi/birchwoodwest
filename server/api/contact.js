const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

module.exports = router;

// /contact
router.get('/', function (req, res, next) {
  res.render('contact')
});

router.post('/', function (req, res, next) {
  const name = `${String(req.body.name)}` || ""
  const email = `${String(req.body.email)}` || "" 
  const details = `${String(req.body.details)}`
  const response = req.body.verification
  const mailer = process.env.SEND_EMAIL;
  const recipient = process.env.RECEIVE_EMAIL;
  const password = process.env.PASSWORD;

  const transporter = nodemailer.createTransport({
    service: 'yahoo',
    auth: {
      user: mailer,
      pass: password
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const mailOptions = {
    from: mailer,
    to: recipient,
    subject: 'Birchwood West Website Visitor',
    text: 
      `From: ${name}\nEmail: ${email}\nDetails: ${details}`
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});