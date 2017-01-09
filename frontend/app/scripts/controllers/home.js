/**
 * Created by Administrator on 11/16/2016.
 */

angular.module('profileMeApp')
    .controller('HomeController', ['$scope', 'customUrlFactory', '$http', '$stateParams',
        '$state', 'HomeModelFactory', '$log','$location','$anchorScroll','alert','returnPostedBy',
        function ($scope, customUrlFactory, $http, $stateParams, $state, HomeModelFactory, $log,$location,$anchorScroll,alert,returnPostedBy) {
            var scopeId;
            var username;
          //  $scope.UserSetting = UserSettings.data;
            customUrlFactory.get({})
                .$promise.then(
                function (response) {
                    $scope.myVar = returnPostedBy.sharedObject;
                    scopeId = response._id;
                    username = response.username;
                    console.log(scopeId);
                    console.log(response);
                    $scope.dataFromDB = response;
                    //$scope.contentMainText = $scope.dataFromDB.mainContent;
                    //$scope.middleBackgroundImage = $scope.dataFromDB.mainBackground;
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

            $scope.showAlert = function(){
                alert('success', 'Header \n', ' Changes Saved. ');
            };
           //$scope.UserSetting.templateOne = false;
           //$scope.UserSetting.templateTwo = false;

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
           // $scope.saveSettings1 = function (object) {
           //     customUrlFactory.update({
           //         id: scopeId
           //     }, {contentMain: object});
           // };

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
                }, function (err, numberAffected, rawResponse) {
                    if (err) {
                        $log.debug(err);
                        //throw 'Error pushing data to server: '+err;
                    }
                    console.log('before');
                    console.log(numberAffected);
                    console.log(rawResponse);
                    console.log('before');
                });
                $state.go('app.custom', {id: scopeId});
            };
        }]);
