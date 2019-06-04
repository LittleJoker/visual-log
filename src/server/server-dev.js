import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import connect from '../data_base/connect';
import config from '../../webpack.dev.config.js';
import fs from 'fs';
import 'babel-polyfill';

const app = express(),
  DIST_DIR = __dirname,
  HTML_FILE = path.join(DIST_DIR, '../../public/index.html'),
  compiler = webpack(config);
  console.log(HTML_FILE);

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.get('/platform/*', (req, res, next) => {
  // console.log(HTML_FILE);

  res.set('content-type', 'text/html');

  fs.readFile(HTML_FILE, (error, content) => {
    if (error) {
      res.writeHead(404);
      res.write('content not found');
    } else {
      res.writeHead(200);
      res.write(content);
    }

    res.end();
  });
});

app.get('/api/select-all', function (req, res, next) {
  connect.selectAllQuery((results) => {
    res.set('content-type', 'application/json');
    res.send(results);
    res.end();
  });
});

app.post('/api/query', function ( req, res) {
  if (req.body.data) {
    const sqlQuery = req.body.data.sql;
    connect.executeQuery(sqlQuery, (results) => {
      res.set('content-type', 'application/json');
      res.send(results);
      res.end();
    });
  }
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
  console.log('Press Ctrl+C to quit.')
});
