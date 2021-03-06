/**
 * Created by Administrator on 11/13/2016.
 */

angular.module('profileMeApp')
    .controller('RegisterController', ['$scope','$http', 'alert', 'auth','HomeModelFactory',
        function ($scope,$http, alert, auth, HomeModelFactory) {

        $scope.submit = function () {

            auth.register($scope.email, $scope.password)

                .success(function (res) {
                    console.log(res);
                    alert('success', 'Successful register.','Welcome, '+res.user.email+'!');

                    HomeModelFactory.fetch().then(function(data) {
                        $scope.dataFromJson = data;

                        $http.post('https://profile-api.mybluemix.net/custom', {

                            username:"",
                            contentMain: $scope.dataFromJson.contentMain,
                            mainBackground: $scope.dataFromJson.mainBackground,
                            mainBackgroundTextLeft: $scope.dataFromJson.mainBackgroundTextLeft,
                            mainBackgroundTextRight: $scope.dataFromJson.mainBackgroundTextRight,
                            carouselImgOne:$scope.dataFromJson.carouselImgOne,
                            carouselImgOneText:$scope.dataFromJson.carouselImgOneText,
                            carouselImgTwo:$scope.dataFromJson.carouselImgTwo,
                            carouselImgTwoText:$scope.dataFromJson.carouselImgTwoText,
                            carouselImgThree:$scope.dataFromJson.carouselImgThree,
                            carouselImgThreeText:$scope.dataFromJson.carouselImgThreeText,
                            bottomLeftObject: $scope.dataFromJson.bottomLeftObject,
                            bottomMiddleObject: $scope.dataFromJson.bottomMiddleObject,
                            bottomRightObject:$scope.dataFromJson.bottomRightObject,
                            viewOne:$scope.dataFromJson.viewOne,
                            viewTwo:$scope.dataFromJson.viewTwo,
                            bodyColor:$scope.dataFromJson.backgroundColor,
                            logo:$scope.dataFromJson.logo,
                            startButton:$scope.dataFromJson.startButton,
                            navbarStatic:$scope.dataFromJson.navbarStatic,
                            navbarFooterColor: $scope.dataFromJson.navbarFooterColor,
                            footerTitle: $scope.dataFromJson.footerTitle,
                            footerLeft: $scope.dataFromJson.footerLeft,
                            footerMiddle: $scope.dataFromJson.footerMiddle,
                            footerRight: $scope.dataFromJson.footerRight,
                            postedBy:res.user._id
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
                    });

                }).error(function (err) {
                    console.log('bad');
                    alert('warning', 'Oops', 'Something went wrong :(',err.message);
                })
        }
    }
    ]);
