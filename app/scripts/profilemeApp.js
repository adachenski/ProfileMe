/**
 * Created by Administrator on 11/5/2016.
 */

'use strict';

angular.module('profilemeApp', ['ui.router', 'ngResource'])
    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider

            // route for the home page
            .state('app', {
                url: '/',
                views: {
                    'header': {
                        templateUrl: 'views/header.html',
                        controller: 'HeaderController'
                    },
                    'body-container': {
                        templateUrl: 'views/body-container.html'
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
                        controller  : 'HeaderController'
                    }
                }
            })
        $urlRouterProvider.otherwise('/');
    });