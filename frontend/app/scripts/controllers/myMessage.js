/**
 * Created by Administrator on 1/7/2017.
 */

'use strict';

angular.module('profileMeApp')
    .controller('MyMessageController',['$scope','$resource','$http','myMessageFactory',
        'customUrlFactory',
    function($scope,$resource,$http,myMessageFactory,customUrlFactory){
        $scope.messages="";
        customUrlFactory.get({})
            .$promise.then(
            function (response) {

               var scopeId = response._id;
                $scope.messages = myMessageFactory(scopeId).query();
                console.log($scope.messages);
                //myMessageFactory.get({id:"5872f43f12fa071008943f0e"}, function(user) {
                //    $scope.abc = user;
                //    console.log($scope.abc);
                //
                //});

            },
            function (response) {
                HomeModelFactory.fetch().then(function (data) {
                    console.log(data);
                    $scope.dataFromDB = data;
                    //$scope.dataFromDB.contentMain = $scope.dataFromFile.contentMain;
                    //$scope.middleBackgroundImage = $scope.dataFromFile.middleBackgroundImage;
                });
                $scope.message = "Error: " + response.status + " " + response.statusText;
            }
        );




}]);