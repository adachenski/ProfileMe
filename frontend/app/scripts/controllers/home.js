/**
 * Created by Administrator on 11/16/2016.
 */

angular.module('profileMeApp')
    .controller('HomeController', ['$scope', 'customUrlFactory', '$http', '$stateParams','$state','HomeModelFactory',
        function ($scope, customUrlFactory, $http, $stateParams,$state,HomeModelFactory) {
           // var x = 'Default Header';
            var scopeId;
            $scope.customUrl = customUrlFactory.get({id: $stateParams.id})
                .$promise.then(
                function (response) {
                    scopeId = response._id;
                    console.log(response._id);
                    var dataFromDB = response;

                    $scope.headerMain = dataFromDB.mainHeader;
                    $scope.contentMain = dataFromDB.mainContent;
                    $scope.middleBackgroundImage = dataFromDB.mainBackground;


                    //$scope.headerMain ? $scope.customUrl.headerMain :'Hello from home-custom';
                },
                function (response) {
                    HomeModelFactory.fetch().then(function(data) {
                        var dataFromFile = data;
                        $scope.headerMain = dataFromFile.headerMain;
                        $scope.contentMain = dataFromFile.contentMain;
                        $scope.middleBackgroundImage = dataFromFile.middleBackgroundImage;
                    });
                    $scope.message = "Error: " + response.status + " " + response.statusText;
                }
            );



            $scope.editMain = false;

            $scope.editMainContent = function () {
                $scope.editMain = true;
            };
            $scope.saveMainContent = function () {
                $scope.editMain = false;
            };

            $scope.middleContentLeftHead = "Left Header";
            $scope.middleContentLeftBody = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet atque consectetur doloribus et,ipsam itaque nemo ratione tempora temporibus vel veniam. Expedita hic laboriosam natusreprehenderit veritatis! Iure, sequi! ";
            $scope.middleContentRightHead = "Right Header";
            $scope.middleContentRightBody = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet atque consectetur doloribus et,ipsam itaque nemo ratione tempora temporibus vel veniam. Expedita hic laboriosam natusreprehenderit veritatis! Iure, sequi! ";

            $scope.editMiddleLeft = false;
            $scope.editMiddleRigh = false;

            $scope.editMiddleContentLeft = function () {
                $scope.editMiddleLeft = true;
            };
            $scope.saveMiddleContentLeft = function () {
                $scope.editMiddleLeft = false;
            };

            $scope.middleBackgroundShow = false;

            $scope.editMiddleBackground = function () {
                $scope.middleBackgroundShow = true;
            };
            $scope.saveMiddleBackground = function () {
                $scope.middleBackgroundShow = false;
            };


            // $scope.saveSettings = customUrlFactory.post({
            //     id: $stateParams.id
            // })
            //     .$promise.then(
            //     function (response) {
            //         console.log($stateParams.id);
            //         $scope.customUrl = response;
            //         $scope.showDish = true;
            //     },
            //     function (response) {
            //         $scope.message = "Error: " + response.status + " " + response.statusText;
            //     }
            // );
            $scope.saveSettings = function () {


                $http.put('http://localhost:3000/custom/'+scopeId, {
                    mainHeader: $scope.headerMain,
                    mainContent: $scope.contentMain,
                    mainBackground: $scope.middleBackgroundImage
                }, {
                    'Content-Type': 'application/json;'
                })
                    .then(
                    function (response) {
                        console.log(response);
                    },
                    function (response) {
                        // failure callback
                    }
                );
                $state.go('app.custom');
            }


            // $scope.saveSettings = function(){
//
            //     customUrlFactory.create({
            //         mainHeader:$scope.headerMain,
            //         mainContent:$scope.contentMain,
            //         mainBackground: $scope.middleBackgroundImage
            //     })
            // }

        }]);
