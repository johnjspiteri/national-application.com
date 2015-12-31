/*jslint node: true */
'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

   var express = require('express'),
       // favicon = require('serve-favicon'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    path = require('path'),
    methodOverride = require('method-override'),
    compression = require('compression'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    errorHandler = require('errorhandler'),
    app = express(),
    ip = 'localhost',
    port = 8080,
    connection =  'mongodb://127.0.0.1:27017/national',
    server = require('http').createServer(app),
    seedDB = true,
    env = app.get('env');

app.set('views', __dirname + '/public/html');
app.set('view engine', 'jade');
app.use(morgan('dev'));
app.use(compression());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(methodOverride());
app.use(cookieParser());

mongoose.connect(connection);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));
db.once('open', function callback () {
    console.log('Connected to MongoDB');
});
mongoose
    .set('debug', false);

if (seedDB) {
  require('./server/config/seed');
}

if ('production' === env) {
    app.use(express.static(__dirname + '/client'));
    app.use(express.static(__dirname + '/client/html'));
    app.use(express.static(__dirname + '/client/css'));
    app.use(express.static(__dirname + '/client/js'));
    // app.use(favicon(__dirname + '/client/img/favicon/favicon.ico'));
}
if ('development' === env || 'test' === env) {
    app.use(express.static(__dirname + '/client'));
    app.use(express.static(__dirname + '/client/html'));
    app.use(express.static(__dirname + '/client/css'));
    app.use(express.static(__dirname + '/client/js'));
}

app.use('/api/mail', require('./server/api/mail'));
app.use('/api/text', require('./server/api/text'));
app.use('/api/client', require('./server/api/client'));

app.all('/*', function(req, res, next) {
    res.sendFile('client/html/index.html', { root: __dirname });
});

app.use(errorHandler({ dumpExceptions: true, showStack: true }));

server.listen(port, ip, function () {
    console.log('Express server listening on %d, in %s mode', port, app.get('env'));
});

exports = module.exports = app;
