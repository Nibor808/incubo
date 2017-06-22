
module.exports = (app) => {

  app.get('/white-template', (req, res) => {
    res.render('whiteTemp/home', {layout:'whiteTemp/layouts/main'});
  });
};