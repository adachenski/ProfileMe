/**
 * Created by Administrator on 11/5/2016.
 */

'use strict';

angular.module('profileMeApp')
    .constant('API_URL','http://localhost:3000/')
    .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('app', {
                url: '/',
                views: {
                    'header': {
                        templateUrl: 'views/header.html#/',
                        controller:'HeaderController'
                    },
                    'body-container': {
                        templateUrl: 'views/home.html#/',
                        controller: 'HomeController'
                    },
                    'footer': {
                        templateUrl: 'views/footer.html#/',
                        controller:'HeaderController'
                    }
                }

            })
            .state('app.custom',{
                url:'custom/:id',
                views:{
                    'body-container@': {
                        templateUrl:'views/show_custom.html',
                        controller  : 'ShowCustomUrlController'
                    }
                }
            })
            .state('app.messages',{
                url:'custom/:id/messages',
                views:{
                    'body-container@': {
                        templateUrl:'views/messages.html',
                        controller  : 'MessageController'
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
            .state('app.logout', {
                url:'logout',
                views: {
                    'body-container@': {
                        controller  : 'LogoutController'
                    }
                }
            })
            .state('app.jobs', {
                url:'jobs',
                views: {
                    'body-container@': {
                        templateUrl:'views/jobs.html',
                        controller  : 'JobsController'
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
            });
        $httpProvider.interceptors.push('authInterceptor');

    });