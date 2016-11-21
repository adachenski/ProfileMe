/**
 * Created by Administrator on 11/5/2016.
 */
'use strict';

angular.module('profileMeApp')
    .controller('HeaderController', ['$scope', 'authToken', '$anchorScroll', '$location',
        function ($scope, authToken, $anchorScroll, $location) {
            console.log('Header');
            $scope.nasko = "from header controller";
            $scope.myStylea = {color: 'red'};

            $scope.start = function () {
                console.log('Start');

                $location.hash("userDetails");
                $anchorScroll();
            };


            $scope.isAuthenticated = authToken.isAuthenticated;
            console.log($scope.isAuthenticated() );

        }]);