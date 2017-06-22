import express from 'express';
import exhbs from 'express-handlebars';
import bodyParser from 'body-parser';
import env from 'node-env-file';
import path from 'path';

env('./config/.env', {logger: console});

const app = express();

if (process.env.NODE_ENV !== 'production') {
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const webpackConfig = require('../config/webpack.config');
  app.use(webpackMiddleware(webpack(webpackConfig)));
  app.use(express.static(path.join(__dirname, '../public')));
}else {
  app.use(express.static(path.join(__dirname, './public')));
}

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('views', `${__dirname}/views`);
app.engine('.hbs', exhbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: `${app.get('views')}`,
  partialsDir: `${app.get('views')}`
}));
app.set('view engine', '.hbs');

require('./routes/incubo/root')(app);
require('./routes/incubo/contact')(app);
require('./routes/greenTemp/root')(app);
require('./routes/whiteTemp/root')(app);
require('./routes/house/house')(app);

app.use(function (req, res) {
  res.status(404).render('incubo/404', {layout: false});
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Listening');
});