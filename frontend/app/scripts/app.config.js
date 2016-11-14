/**
 * Created by Administrator on 11/5/2016.
 */

'use strict';

angular.module('profileMeApp')
    .constant('API_URL','http://localhost:3000/')
    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider

            // route for the home page
            .state('app', {
                url: '/',
                views: {
                    'header': {
                        templateUrl: 'views/header.html'
                    },
                    'body-container': {
                        templateUrl: 'views/body-container.html',
                        controller: 'HeaderController'
                    },
                    'footer': {
                        templateUrl: 'views/footer.html'
                    }
                }

            })
            .state('app.login', {
                url:'login',
                views: {
                    'body-container@': {
                        templateUrl : 'views/login.html',
                        controller  : 'LoginController'
                    }
                }
            })
            .state('app.register', {
                url:'register',
                views: {
                    'body-container@': {
                        templateUrl : 'views/register.html',
                        controller  : 'RegisterController'
                    }
                }
            })
        $urlRouterProvider.otherwise('/');
    });