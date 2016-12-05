/**
 * Created by Administrator on 11/5/2016.
 */
'use strict';

angular.module('profileMeApp')
    .controller('HeaderController', ['$scope','$state', 'authToken', '$anchorScroll', '$location',
        function ($scope,$state, authToken, $anchorScroll, $location) {

            $scope.start = function () {

                $location.hash("userDetails");
                $anchorScroll();
            };

            $scope.isHome = false;
           console.log($location.path());
            if($location.path()!='/'){
                $scope.isHome = true;

            }
            else{
                $scope.isHome = false;

            }
            $scope.isAuthenticated = authToken.isAuthenticated;
            console.log($scope.isAuthenticated() );



        }]);