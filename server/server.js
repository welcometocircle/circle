//server/server.js
var express = require('express');
var router = require('./routes/routes.js')
var path = require('path');
var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));
app.use('/', router);
module.exports=app;

app.get('*', function (req, res) { // This wildcard method handles all requests

    Router.run(routes, req.path, function (Handler, state) {
        var element = React.createElement(Handler);
        var html = React.renderToString(element);
        res.render('main', { content: html });
    });
});