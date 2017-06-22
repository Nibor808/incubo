'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mail;

var _nodemailer = require('nodemailer');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mail(mailData) {

  var smtpConfig = {
    service: 'gmail',
    auth: {
      user: 're@incubo.ca',
      pass: process.env.MAILPASS
    }
  };

  var trans = _nodemailer2.default.createTransport(smtpConfig);

  return new Promise(function (resolve, reject) {
    trans.sendMail(mailData, function (err) {
      if (err) return reject(err);else return resolve();
    });
  });
}
//# sourceMappingURL=sendmail.js.map