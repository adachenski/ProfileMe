/**
 * Created by Administrator on 1/7/2017.
 */

'use strict';

angular.module('profileMeApp')
    .controller('MyMessageController',['$scope','$resource','$http','myMessageFactory',
        'customUrlFactory','returnPostedBy',
    function($scope,$resource,$http,myMessageFactory,customUrlFactory,returnPostedBy){

        customUrlFactory.get({})
            .$promise.then(
            function (response) {

               var scopeId = response._id;
                $scope.messages = myMessageFactory(scopeId).query();
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
            $scope.messages = myMessageFactory().query();

        myMessageFactory.get({})
            .$promise.then(
            function (response) {

                var messResponse = response;
                console.log('message response');
                console.log(messResponse);
                console.log('message response');

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