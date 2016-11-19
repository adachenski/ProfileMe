/**
 * Created by Administrator on 11/17/2016.
 */

var express = require('express'),
    userSettingsRouter = express.Router(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

var UserSettings = require('../models/UserSettings');
userSettingsRouter.use(bodyParser.json());

userSettingsRouter.route('/')
.get(function(req,res){
        //res.json({"message":"Hard to get User SEttINgS"});
        UserSettings.find({}, function (err, userSettings) {
            if (err) {
                console.log('Error obtaining the promotions: ' + err);
            }
            res.json(userSettings);
        })
    })
.post(function(req, res, next){
        UserSettings.create(req.body,function(err,userSettings){
            if(err){
                console.log('Cant create userrSettings '+err);
            }
            var id = userSettings._id;
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('UserSettings added with id: ' + id);
        })
    });


userSettingsRouter.route('/:userSettingsId')
    .get(function (req, res, next) {
        UserSettings.findById(req.params.userSettingsId, function (err, userSettings) {
            if (err) {
                console.log("Error getting user settings: " + err);
            }
            res.json(userSettings);
        });
    })
    .put(function (req, res, next) {
        UserSettings.findByIdAndUpdate(req.params.userSettingsId, {$set: req.body}, {new: true},
            function (err, userSettings) {
                if (err) {
                    console.log('Error updating user settings' + err);
                }
                res.json(userSettings);
            })

    });
module.exports = userSettingsRouter;