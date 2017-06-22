import rp from 'request-promise';
import mail from '../../utils/sendmail';

module.exports = (app) => {

  app.post('/contact-submit', (req, res) => {

    const data = {
      fname: req.body.quote.fname,
      lname: req.body.quote.lname,
      email: req.body.quote.email,
      desc: req.body.quote.desc
    };

    if (data.fname === '' ||
      data.lname === '' ||
      data.email === '' ||
      data.desc === '') {
      res.render('incubo/contact', {
        layout: 'incubo/layouts/main',
        error: 'Please complete all fields',
        data
      });
    }else if(req.body['g-recaptcha-response'] === undefined ||
    req.body['g-recaptcha-response'] === '' ||
    req.body['g-recaptcha-response'] === null) {
      res.render('incubo/contact', {
        layout: 'incubo/layouts/main',
        error: 'Please select the captcha',
        data
      });
    }else {
      const opts = {
        method: 'POST',
        uri: 'https://www.google.com/recaptcha/api/siteverify?secret=' + process.env.RECAPTCHA_SECRET + '&response=' + req.body['g-recaptcha-response'],
      };

      rp(opts)
        .then((response) => {
          const msg = JSON.parse(response);

          if (msg.success === true) {
            const mailData = {
              to: 'development@incubo.ca',
              subject: `Development Request: ${data.fname} ${data.lname} ${data.email}`,
              text: data.desc
            };

            mail(mailData)
              .then(() => {
                res.render('incubo/contact', {
                  layout: 'incubo/layouts/main',
                  success: 'Your email was sent successfully',
                });
              })
              .catch((err) => {
                console.log('err', err);
                res.render('incubo/contact', {
                  layout: 'incubo/layouts/main',
                  error: 'There was a problem sending your email. Please try again.',
                  data
                });
              });
          }else {
            res.render('incubo/contact', {
              layout: 'incubo/layouts/main',
              error: 'There was a problem with the captcha. Please try again.',
              data
            });
          }
        })
        .catch((err) => {
          console.log(err);
          res.render('incubo/contact', {
            layout: 'incubo/layouts/main',
            error: 'We are unable to reach google at this time for captcha. Please try again.',
            data
          });
        });
    }
  });
};