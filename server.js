// Babel ES6/JSX Compiler
require('babel-register');

var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var compression = require('compression');
var favicon = require('serve-favicon');
var logger = require('morgan');
var async = require('async');
var colors = require('colors');
// var mongoose = require('mongoose');
var request = require('request');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var swig  = require('swig');
var xml2js = require('xml2js');
var _ = require('underscore');

// var config = require('./config');
var routes = require('./app/routes');
// var Character = require('./models/character');

var app = express();

// mongoose.connect(config.database);
// mongoose.connection.on('error', function() {
//   console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?'.red);
// });

app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(express.static(path.join(__dirname, 'public')));



// 获取银行贷款套餐
app.get('/getBankLoans', function(req, res, next){
    var apiUrl = 'http://125.35.5.37:8081/seentao/spring/getBankLoans';
    //加上超时参数
    request.get(apiUrl, {timeout: 1500}, function(err, response, body){
        console.log('err  = ' + err);

        if (err) {
            return next(err); 
        }

        res.send(body);
        return;

    });
});
//获取代工厂
app.get('/api/getOEMFactories', function(req, res, next){
    var apiUrl = 'http://125.35.5.37:8081/seentao/spring/getOEMFactories';
    console.log("请求");
    request.get(apiUrl, function(err, response, body){
        if (err) {
            return next(err); 
        }

        var result = JSON.parse(body);
        res.send(result.oemFactories);
        return;

    });
});
//提交代工厂订单
app.post('/api/submitOEMOrder', function(req, res, next){
    var oemFactoryId = req.body.oemFactoryId;
    var pSysId = req.body.pSysId;
    var pOrderCount = req.body.pOrderCount;

    var apiUrl = 'http://125.35.5.37:8081/seentao/spring/submitOEMOrder?oemFactoryId='+oemFactoryId+'pSysId='+pSysId+'pOrderCount='+pOrderCount;
    console.log("请求");
    request.get(apiUrl, function(err, response, body){
        if (err) {
            return next(err); 
        }

        var result = JSON.parse(body);
        res.send(result);
        return;

    });
});
// 资质开发
app.get('/api/getCertificates', function(req, res, next){
    // var apiUrl = 'http://125.35.5.37:8081/seentao/spring/getCertificates1';
    var apiUrl = 'http://10.10.16.163/tp_test/1.php';
    request.get(apiUrl, function(err, response, body){
        if (err) {
            return next(err); 
        }

        var result = JSON.parse(body);
        res.send(result.certificates);
        return;

    });
});
// 选单结果
//参数：apiName
app.get('/api/getOrderResult', function(req, res, next){
    var apiUrl = 'http://125.35.5.37:8081/seentao/spring/getOrderResult';
    request.get(apiUrl, function(err, response, body){
        if (err) {
            return next(err); 
        }

        var result = JSON.parse(body);
        //返回参数：
        res.send(result.orderResults);
        return;

    });
});
app.get('/api/submitCertificate', function(req, res, next){
    var apiUrl = 'http://125.35.5.37:8081/seentao/spring/submitCertificate';
    request.get(apiUrl, function(err, request, body){
        if (err) {
            return next(err); 
        }

        var result = JSON.parse(body);
        res.send(result.code);
        return;

    });
});

// 原料市场
app.get('/api/getMarketROrder', function(req, res, next){
    var apiUrl = 'http://125.35.5.37:8081/seentao/spring/getMarketROrder';

    request.get(apiUrl, function(err, response, body){
        if (err) {
            return next(err);
        }

        var result = JSON.parse(body);
        res.send(result.rSysOrders);
        return;

    });
});

// 报表
app.get('/api/getReport', function(req, res, next){
    var apiUrl = 'http://125.35.5.37:8081/seentao/spring/getReport';

    request.get(apiUrl, function(err, response, body){
        if (err) {
            return next(err);
        }

        var result = JSON.parse(body);
        res.send(result);
        return;

    });
});



const apiUrl = 'http://125.35.5.37:8081/seentao/spring/';
require('request').debug = true;
// 代理 /api/:action 类POST请求, action 为api动作名称
app.post('/api/:action', function(req, res, next) {
    console.log('req.action = ' + req.params.action);

    request.post({url: apiUrl + req.params.action, form: req.body}, function(err, response, body){
        if (err) {
            return next(err);
        }

        res.send(body);
        return;
    });
}); 

app.use(function(req, res) {
  Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
        var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
        var page = swig.renderFile('views/index.html', { html: html });
        res.status(200).send(page);
    } else {
      res.status(404).send('Page Not Found')
    }
  });
});

app.use(function(err, req, res, next) {
  console.log(err.stack.red);
  res.status(err.status || 500);
  res.send({ message: err.message });
});

/**
 * Socket.io stuff.
 */
var server = require('http').createServer(app);
// var io = require('socket.io')(server);
// var onlineUsers = 0;

// io.sockets.on('connection', function(socket) {
//   onlineUsers++;

//   io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });

//   socket.on('disconnect', function() {
//     onlineUsers--;
//     io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });
//   });
// });

server.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
