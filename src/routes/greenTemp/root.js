
module.exports = (app) => {

  app.get('/green-template', (req, res) => {
    res.render('greenTemp/home', {layout: 'greenTemp/layouts/main'});
  });
};