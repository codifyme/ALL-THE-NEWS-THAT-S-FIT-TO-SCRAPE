var express = require('express');
var exphbs = require('express-handlebars');

var axios = express.Router();
var axios = express();

axios.get('/', (req, res) => {
  res.render('index');
});

axios.get('/saved', (req, res) => {
  res.render('saved');
});

module.exports = axios;
