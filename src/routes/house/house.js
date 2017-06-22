
module.exports = (app) => {

  app.get('/ignace-house', (req, res) => {
    res.render('ignaceHouse/home', {layout: 'ignaceHouse/layouts/main'});
  });
};