/**
 * @Author: Andree Ray <andreeray>
 * @Date:   2018-01-07T12:25:11+01:00
 * @Email:  andreeray@live.com
 * @Filename: server.js
 * @Last modified by:   andreeray
 * @Last modified time: 2018-02-01T11:18:12+01:00
 */



require('dotenv').config({ silent: true });

const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

if (process.env.NODE_ENV === 'development') {
  require('./webpack-dev-middleware').init(app);
}

if (process.env.NODE_ENV === 'production') {
  app.use('/dist', express.static(path.join(__dirname, 'dist')));
}

app.use('/public', express.static(path.join(__dirname, 'public')));

let template = fs.readFileSync(path.resolve('./index.html'), 'utf-8');
app.get('/', function(req, res) {
  res.send(template);
});


app.listen(process.env.PORT, function () {
  console.log(`Server upp and listening on port ${process.env.PORT}!`);
  if (process.env.NODE_ENV === 'development') {
    require('open')(`http://localhost:${process.env.PORT}`);
  }
});
