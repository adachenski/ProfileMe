/**
 * Created by Administrator on 11/13/2016.
 */

var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    jwt = require('jwt-simple'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

var User = require('./models/User');
 var app = express();
app.use(bodyParser.json());
app.use(passport.initialize());

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

app.use(function (req, res, next) {

    //headers that enable corse
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.post('/register', function(req, res){
    var user = req.body;

    var newUser = new User({
        email: user.email,
        password:user.password
    });

    var payload ={
        iss:req.hostname,
        sub:req._id
    };

    var token =jwt.encode(payload,'nasko');

    newUser.save(function(err){

        res.status(200).send({user:newUser.toJSON(),token:token});
    })
});





mongoose.connect('mongodb://localhost/ProfileMe');

//console.log(jwt.encode('hi','secret'));

var result = app.listen(3000, function () {
    console.log('Api listening on port: ', result.address().port);
});