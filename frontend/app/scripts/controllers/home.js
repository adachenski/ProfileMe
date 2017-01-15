/**
 * Created by Administrator on 11/16/2016.
 */

angular.module('profileMeApp')
    .controller('HomeController', ['$scope', 'customUrlFactory', '$http', '$stateParams',
        '$state', 'HomeModelFactory', '$log','$location','$anchorScroll','alert','authToken',
        function ($scope, customUrlFactory, $http, $stateParams, $state, HomeModelFactory, $log,$location,$anchorScroll,alert,authToken) {
            var scopeId;
            var username;
           var randomNumber = function() {
               //need to get number between 84000 and 84880 for nature background
                return 84000+Math.floor((Math.random() * 880) + 1);

            };

            $scope.isAuthenticated = authToken.isAuthenticated;
            customUrlFactory.get({})
                .$promise.then(
                function (response) {
                    scopeId = response._id;
                    username = response.username;
                    //console.log(scopeId);
                    //console.log(response);
                    $scope.dataFromDB = response;

                },
                function (response) {
                    HomeModelFactory.fetch().then(function (data) {

                        $scope.dataFromDB = data;
                        $scope.dataFromDB.carouselImgOne ="https://wallpaperscraft.com/image/_"+ randomNumber()+"_1366x768.jpg";
                        $scope.dataFromDB.carouselImgThree ="https://wallpaperscraft.com/image/_"+ randomNumber()+"_320x180.jpg";
                        $scope.dataFromDB.carouselImgTwo ="https://wallpaperscraft.com/image/_"+ randomNumber()+"_320x180.jpg";

                    });
                    $scope.message = "Error: " + response.status + " " + response.statusText;
                }
            );

            $scope.showAlert = function(){
                alert('success', 'Header \n', ' Changes Saved. ');
            };

            $scope.editMain = false;
            $scope.carouselImagesShow = false;
            $scope.middleBackgroundShow = false;
            $scope.middleBackgroundTextLeftShow = false;
            $scope.middleBackgroundTextRightShow = false;
            $scope.bottomLeftObjectShow = false;
            $scope.bottomMiddleObjectShow = false;
            $scope.bottomRightObjectShow = false;

            $scope.mediaImageTwo = false;
            $scope.mediaImageThree = false;

            $scope.customInfo = function () {
                $location.hash("customInfo");
                $anchorScroll();
            };

            $scope.start = function () {
                $location.hash("userDetails");
                $anchorScroll();
            };

            $scope.saveSettings = function () {

                customUrlFactory.update({id: scopeId}, {
                    contentMain: $scope.dataFromDB.contentMain,
                    mainBackground: $scope.dataFromDB.mainBackground,
                    mainBackgroundTextLeft: $scope.dataFromDB.mainBackgroundTextLeft,
                    mainBackgroundTextRight: $scope.dataFromDB.mainBackgroundTextRight,
                    carouselImgOne: $scope.dataFromDB.carouselImgOne,
                    carouselImgOneText: $scope.dataFromDB.carouselImgOneText,
                    carouselImgTwo: $scope.dataFromDB.carouselImgTwo,
                    carouselImgTwoText: $scope.dataFromDB.carouselImgTwoText,
                    carouselImgThree: $scope.dataFromDB.carouselImgThree,
                    carouselImgThreeText: $scope.dataFromDB.carouselImgThreeText,
                    bottomLeftObject: $scope.dataFromDB.bottomLeftObject,
                    bottomMiddleObject: $scope.dataFromDB.bottomMiddleObject,
                    bottomRightObject: $scope.dataFromDB.bottomRightObject,
                    viewOne:$scope.dataFromDB.viewOne,
                    viewTwo:$scope.dataFromDB.viewTwo,
                    bodyColor:$scope.dataFromDB.bodyColor
                }, function (rawResponse, numberAffected) {
                    if (rawResponse) {
                        //$log.debug(rawResponse);
                    }
                });
                alert('success', 'Custom Preview \n', ' Changes Saved. ');
                $state.go('app.custom', {id: scopeId});
            };
        }]);
