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
                    console.log(response);
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
            $scope.carouselImagesShow = false;
            $scope.middleBackgroundShow = false;
            $scope.middleBackgroundTextLeftShow = false;
            $scope.middleBackgroundTextRightShow = false;
            $scope.bottomLeftObjectShow = false;
            $scope.bottomMiddleObjectShow = false;
            $scope.bottomRightObjectShow = false;


            $scope.editMainContent = function () {
                $scope.editMain = !$scope.editMain;
            };

            $scope.editMiddleBackground = function () {
                $scope.middleBackgroundShow = !$scope.middleBackgroundShow;
            };

            $scope.editCarouselImages = function(){
                $scope.carouselImagesShow = !$scope.carouselImagesShow;
            };

            $scope.editMiddleBackgroundTextLeft = function () {
                $scope.middleBackgroundTextLeftShow = !$scope.middleBackgroundTextLeftShow;
            };

            $scope.editMiddleBackgroundTextRight = function () {
                $scope.middleBackgroundTextRightShow = !$scope.middleBackgroundTextRightShow;
            };

            $scope.editBottomLeftObjectShow = function(){
                $scope.bottomLeftObjectShow = !$scope.bottomLeftObjectShow;
            };
            $scope.editBottomMiddleObjectShow = function(){
                $scope.bottomMiddleObjectShow = !$scope.bottomMiddleObjectShow;
            };
            $scope.editBottomRightObjectShow = function(){
                $scope.bottomRightObjectShow = !$scope.bottomRightObjectShow;
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
                    mainBackground: $scope.dataFromDB.mainBackground,
                    mainBackgroundTextLeft: $scope.dataFromDB.mainBackgroundTextLeft,
                    mainBackgroundTextRight: $scope.dataFromDB.mainBackgroundTextRight,
                    carouselImgOne:$scope.dataFromDB.carouselImgOne,
                    carouselImgOneText:$scope.dataFromDB.carouselImgOneText,
                    carouselImgTwo:$scope.dataFromDB.carouselImgTwo,
                    carouselImgTwoText:$scope.dataFromDB.carouselImgTwoText,
                    carouselImgThree:$scope.dataFromDB.carouselImgThree,
                    carouselImgThreeText:$scope.dataFromDB.carouselImgThreeText,
                    bottomLeftObject: $scope.dataFromDB.bottomLeftObject,
                    bottomMiddleObject: $scope.dataFromDB.bottomMiddleObject,
                    bottomRightObject:$scope.dataFromDB.bottomRightObject
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
