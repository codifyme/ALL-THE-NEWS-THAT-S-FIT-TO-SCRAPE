//Dependencies
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');

var express = require('express');
var app = express();

app.use(logger('dev'));
app.use(
  bodyparser.urlencoded({
    extended: false
  })
);

app.use(express.static(process.cwd() + "/public"));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultlayout: 'main' }));
app.set('view engine', 'handlebars');

mongoose.connect('mongodb://localhost/ALL-THE-NEWS-THAT-S-FIT-TO-SCRAPE');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to Mongoose!');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('listening on PORT ' + port);
});
