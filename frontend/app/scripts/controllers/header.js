/**
 * Created by Administrator on 11/5/2016.
 */
'use strict';

angular.module('profileMeApp')
    .controller('HeaderController', ['$scope','$state', 'authToken', '$anchorScroll',
        '$location','$stateParams','customUrlFactory','HomeModelFactory','alert',
        function ($scope,$state, authToken, $anchorScroll, $location,$stateParams,
                  customUrlFactory,HomeModelFactory,alert) {
            var scopeId = $stateParams.id;
            console.log('scopeId header before get : '+scopeId);
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


            customUrlFactory.get({})
                .$promise.then(
                function (response) {
                    scopeId = response._id;
                    console.log('scopeId header after get : '+scopeId);

                    $scope.headerContent = response;


                },
                function (response) {
                    HomeModelFactory.fetch().then(function (data) {
                        console.log(data);
                        $scope.headerContent = data;
                        //$scope.dataFromDB.contentMain = $scope.dataFromFile.contentMain;
                        //$scope.middleBackgroundImage = $scope.dataFromFile.middleBackgroundImage;
                    });

                    $scope.message = "Error: " + response.status + " " + response.statusText;
                }
            );
            $scope.headerSave = function () {

                customUrlFactory.update({id: scopeId}, {
                    logo: $scope.headerContent.logo,
                    startButton: $scope.headerContent.startButton

                }, function (err, numberAffected, rawResponse) {
                    if (err) {
                        //throw 'Error pushing data to server: '+err;
                    }
                    console.log('before');
                    // console.log(numberAffected);
                    alert('success', 'Awesome! \n',' Successfully Changed View. ');
                    console.log(rawResponse);
                    console.log('before');
                });

            };

        }]);