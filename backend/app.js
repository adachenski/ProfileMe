/**
 * Created by Administrator on 11/13/2016.
 */

var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    jwt = require('jwt-simple'),
    passport = require('passport'),
    localStrategy = require('passport-local').Strategy;

 var app = express();
app.use(bodyParser.json());
app.use(passport.initialize());

app.use(function(req, res, next){

    //headers that enable corse
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers','Content-Type, Authorization');
    next();
});

app.post('/register')