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
var userSettings = require('./routes/userSettingRouter');
var app = express();
app.use(bodyParser.json());
app.use(passport.initialize());

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

var loginStrategy = new LocalStrategy({usernameField: 'email'},
    function (email, password, done) {
        var serchUser = {email: email};
        User.findOne(serchUser, function (err, user) {
            if (err) return done(err);

            if (!user) {
                return done(null, false, {message: "Wrong email/password"});
            }

            user.comparePasswords(password, function (err, isMatch) {
                if (err) return done(err);

                if (!isMatch) {
                    return done(null, false, {message: "passwords not mach"});
                }
                return done(null, user);
            });
        });

    });

var registerStrategy = new LocalStrategy({usernameField: 'email'}, function (email, password, done) {


    var serachUser = {
        email: email
    };
    User.findOne(serachUser, function (err, user) {
        if (err) return done(err);
        console.log('register+++++++++++' + user);
        if (user) {
            return done(null, false, {
                message: 'E-mail already exists!'
            });
        }


        var newUser = new User({
            email: email,
            password: password
        });

        newUser.save(function (err) {

            done(null, newUser);

        });

    });


});

passport.use('local-register', registerStrategy);
passport.use('local-login', loginStrategy);


app.use(function (req, res, next) {

    //headers that enable corse
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

var jobs = [
    'Nasko',
    'Rally',
    'html',
    'Angular'
];
app.use('/custom',userSettings);

app.get('/jobs', function (req, res) {

    var token = req.headers.authorization.split(' ')[1];
    var payload = jwt.decode(token, 'naskoSecret');
    if (!payload.sub) {
        return res.status(401).send({message: 'Authentication failed'});
    }
    if (!req.headers.authorization) {
        return res.status(401).send({message: 'You are not authorized'});
    }
    res.json(jobs);
});

app.post('/register', passport.authenticate('local-register'), function (req, res) {
    createSendToken(req.user, res);

});

app.post('/login', passport.authenticate('local-login'), function (req, res) {
    createSendToken(req.user, res);
});

function createSendToken(user, res) {
    var payload = {
        sub: user.id
    };

    var token = jwt.encode(payload, 'naskoSecret');

    res.status(200).send({
        user: user.toJSON(),
        token: token
    });
};

mongoose.connect('mongodb://localhost/ProfileMe');

//console.log(jwt.encode('hi','secret'));

var result = app.listen(3000, function () {
    console.log('Api listening on port: ', result.address().port);
});