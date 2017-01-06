/**
 * Created by Administrator on 12/30/2016.
 */

var express = require('express');

var app = express();
//var cors = require('cors');

//var corsOptions = {
//    origin: 'https://profile-me.mybluemix.net',
//    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//};
//app.use(cors());

var port = process.env.PORT || 5500;
//app.use(express.static('node_modules'));
app.use(express.static('app'));

//app.use(express.static('src/views'));
//app.get('/register', cors(corsOptions), function(req, res, next){
//    res.json({msg: 'This is CORS-enabled for only example.com.'});
//});


app.listen(port, function(err){
    console.log('Running server on port '+port);
});