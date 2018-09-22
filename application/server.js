'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var connection = '';

var express = require('express'),
    location = require('./development.json'),
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

app.use('/auth/login', require('./server/auth/login'));
app.use('/auth/register', require('./server/auth/register'));
app.use('/api/mail', require('./server/api/mail'));
app.use('/api/text', require('./server/api/text'));
app.use('/api/zip', require('./server/api/zip'));
app.use('/api/location', require('./server/api/location'));
app.use('/api/contact', require('./server/api/contact'));
app.use('/api/account', require('./server/api/account'));
app.use('/api/index', require('./server/api/index'));
app.use('/api/member', require('./server/api/member'));

// app.all('/*', function(req, res, next) {
//     res.sendFile('client/html/index.html', { root: __dirname });
// });

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
