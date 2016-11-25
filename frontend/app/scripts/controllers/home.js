/**
 * Created by Administrator on 11/16/2016.
 */

angular.module('profileMeApp')
    .controller('HomeController', ['$scope', 'customUrlFactory', '$http', '$stateParams','$state','HomeModelFactory',
        function ($scope, customUrlFactory, $http, $stateParams,$state,HomeModelFactory) {
           // var x = 'Default Header';
            var scopeId;
            var username;
            customUrlFactory.get({id: $stateParams.id})
                .$promise.then(
                function (response) {

                    scopeId = response._id;
                    username = response.username;
                    console.log(scopeId);

                    $scope.dataFromDB = response;
                    //$scope.contentMainText = $scope.dataFromDB.mainContent;
                    //$scope.middleBackgroundImage = $scope.dataFromDB.mainBackground;


                },
                function (response) {
                    HomeModelFactory.fetch().then(function(data) {
                        console.log(data);
                        $scope.dataFromDB = data;


                       //$scope.dataFromDB.contentMain = $scope.dataFromFile.contentMain;
                       //$scope.middleBackgroundImage = $scope.dataFromFile.middleBackgroundImage;
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
                    contentMain: $scope.dataFromDB.contentMain,
                    mainBackground: $scope.dataFromDB.middleBackgroundImage
                }, {
                    'Content-Type': 'application/json;'
                })
                    .then(
                    function (response) {
                        console.log('Succsess from home PUT:')
                        console.log(response);
                    },
                    function (response) {
                        console.log('Error from home PUT:')
                        console.log(response);
                    }
                );
                $state.go('app.custom',{id:scopeId});
            }


            // $scope.saveSettings = function(){
//
            //     customUrlFactory.create(
            //         mainContent:$scope.contentMain,
            //         mainBackground: $scope.middleBackgroundImage
            //     })
            // }

        }]);
