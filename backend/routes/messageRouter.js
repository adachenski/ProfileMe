/**
 * Created by Administrator on 12/11/2016.
 */

var express = require('express'),
    messagesRouter = express.Router(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

var Verify = require('./verify');
var Messages = require('../models/Messages');
messagesRouter.use(bodyParser.json());

messagesRouter.route('/')
.get(function (req, res, next) {
        console.log('reqStert');
console.log(req.query.Url);
        console.log('reqFinish');
        Messages.find({postedById:req.query.Url})
        .populate('postedBy')
        .exec(function (err, userSettings) {
               console.log('start');
               //console.log(userSettings);
               console.log('finish');
            if (err) throw err;
            res.json(userSettings);
        });
})
    .post(function (req, res, next) {

        Messages.create(req.body, function (err, userSettings) {
            if (err) {
                console.log('Cant create userSettings ' + err);
            }
            console.log(userSettings);
            var id = userSettings._id;
            //var id = req.sub;
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('UserSettings added with id: ' + id);
        });
    });
messagesRouter.route('/:messegeId')
    .get(function (req, res, next) {
        // console.log(req.decoded.sub);
        Messages.findById(req.params.messegeId, function (err, userSettings) {
            if (err) {
                console.log("Error getting user settings: " + err);
            }
            res.json(userSettings);
        });
    })

module.exports = messagesRouter;