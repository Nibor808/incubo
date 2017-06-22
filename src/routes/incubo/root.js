module.exports = (app) => {

  app.get('/', (req ,res) => {
    res.render('incubo/home',
      {
        layout: 'incubo/layouts/main',
        home: true
      });
  });

  app.get('/about', (req, res) => {
    res.render('incubo/about', {layout: 'incubo/layouts/main'});
  });

  app.get('/portfolio', (req, res) => {
    res.render('incubo/portfolio', {layout: 'incubo/layouts/main'});
  });

  app.get('/resources', (req, res) => {
    res.render('incubo/resources', {layout: 'incubo/layouts/main'});
  });

  app.get('/contact', (req, res) => {
    res.render('incubo/contact', {layout: 'incubo/layouts/main'});
  });

  app.get('/personal', (req, res) => {
    res.render('incubo/personal', {layout: 'incubo/layouts/main'});
  });

  app.get('/business', (req, res) => {
    res.render('incubo/business', {layout: 'incubo/layouts/main'});
  });

  app.get('/htmlcss', (req, res) => {
    res.render('incubo/htmlcss', {layout: 'incubo/layouts/main'});
  });

  app.get('/mysql', (req, res) => {
    res.render('incubo/mysql', {layout: 'incubo/layouts/main'});
  });

  app.get('/javascript', (req, res) => {
    res.render('incubo/javascript', {layout: 'incubo/layouts/main'});
  });

  app.get('/node', (req, res) => {
    res.render('incubo/node', {layout: 'incubo/layouts/main'});
  });

};