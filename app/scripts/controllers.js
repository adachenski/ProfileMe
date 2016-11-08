/**
 * Created by Administrator on 11/5/2016.
 */
'use strict';

angular.module('profilemeApp')
    .controller('HeaderController', ['$scope', function ($scope) {
        console.log('Header')
$scope.nasko="from header controller";
        $scope.myStylea = {color:'red'};


    }])
.controller('GlobalCtrl', ['$scope',function($scope) {
        $scope.myStyle = {color:'red'};
    }]
);