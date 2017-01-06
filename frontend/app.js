/**
 * Created by Administrator on 12/30/2016.
 */

var express = require('express');

var app = express();

var port = process.env.PORT || 5500;

app.use(express.static('app'));

app.listen(port, function (err) {
    console.log('Running server on port ' + port);
});