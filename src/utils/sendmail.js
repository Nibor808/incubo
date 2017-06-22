import nodemailer from 'nodemailer';

export default function mail(mailData) {

  const smtpConfig = {
    service: 'gmail',
    auth: {
      user: 're@incubo.ca',
      pass: process.env.MAILPASS
    }
  };

  const trans = nodemailer.createTransport(smtpConfig);

  return new Promise((resolve, reject) => {
    trans.sendMail(mailData, (err) => {
      if (err) return reject(err);
      else return resolve();
    });
  });
}