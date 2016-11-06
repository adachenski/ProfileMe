/**
 * Created by Administrator on 11/5/2016.
 */

'use strict';

angular.module('profilemeApp', ['ui.router', 'ngResource'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider

            // route for the home page
            .state('app', {
                url: '/',
                views: {
                    'header': {
                        templateUrl: 'views/header.html',
                        controller: 'HeaderController'
                    },
                    'body': {
                        templateUrl: 'views/body.html'
                    },
                    'footer': {
                        templateUrl: 'views/footer.html'
                    }
                }

            });
        
    });