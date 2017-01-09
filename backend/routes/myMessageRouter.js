/**
 * Created by Administrator on 1/7/2017.
 */

var express = require('express'),
    myMessageRouter = express.Router(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');
var Verify = require('./verify'),
    MyMessage = require('../models/Messages');
myMessageRouter.use(bodyParser.json());

myMessageRouter.route('/')

    .get(Verify.verifyUser, function(req, res, next){

        MyMessage.find({postedById: req.query.Url})
            .exec(function(err, messageSettings){
                console.log('before MyMess');
                console.log(messageSettings);
                console.log('after MyMess');
                if(err) throw err;

                res.json(messageSettings)
            })
    });
myMessageRouter.route('/:messegeId')
    .get(function (req, res, next) {
        // console.log(req.decoded.sub);
        myMessageRouter.findById(req.params.messegeId, function (err, userSettings) {
            if (err) {
                console.log("Error getting user settings: " + err);
            }
            res.json(userSettings);
        });
    })

module.exports = myMessageRouter;