/**
 * Created by Administrator on 11/5/2016.
 */
'use strict';

angular.module('profileMeApp')
    .controller('HeaderController', ['$scope','authToken', function ($scope,authToken) {
        console.log('Header')
        $scope.nasko = "from header controller";
        $scope.myStylea = {color: 'red'};

$scope.isAuthenticated = authToken.isAuthenticated;

    }]);