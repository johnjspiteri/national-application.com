'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express'),
    connection = '',
    mongoose = require('mongoose'),
    colors = require('colors'),
    logger = require('morgan'),
    morgan = require('morgan'),
    path = require('path'),
    qs = require('querystring'),
    async = require('async'),
    methodOverride = require('method-override'),
    compression = require('compression'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    errorHandler = require('errorhandler'),
    app = express(),
    server = require('http').createServer(app),
    env = app.get('env');

if (process.env.NODE_ENV === 'development') {
    var location = require('./development.json');
    connection = '127.0.0.1:27017/card';
    var location = require('./development.json');
    server = app.listen(location.port, location.ip);
}

if (process.env.NODE_ENV === 'production') {
    connection = 'database:27017/card';
    server = app.listen(80, '0.0.0.0');
}

app.use(morgan('dev'));
app.use(compression());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(methodOverride());
app.use(cookieParser());

mongoose.connect(connection);

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// mongoose.set('debug', false);

if ('production' === env) {
    app.use(express.static('./'));
    // app.use(favicon(__dirname + '/client/img/favicon/favicon.ico'));
}
if ('development' === env || 'test' === env) {
    app.use(express.static('./'));
}

app.use('/login', require('./api/login'));
app.use('/register', require('./api/register'));
app.use('/api/mail', require('./api/mail'));
app.use('/api/text', require('./api/text'));
app.use('/api/zip', require('./api/zip'));
app.use('/api/location', require('./api/location'));
app.use('/api/contact', require('./api/contact'));
app.use('/api/account', require('./api/account'));
app.use('/api/index', require('./api/index'));
app.use('/api/member', require('./api/member'));

if (process.env.NODE_ENV === 'production') {
    app.get('*', function(req, res) {
        res.sendFile(__dirname + '/public/html/index.html');
    });
}

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
    app.get('*', function(req, res) {
        res.sendFile(__dirname + '/public/html/development.html');
    });
}

app.use(errorHandler({ dumpExceptions: true, showStack: true }));

// exports = module.exports = app;
