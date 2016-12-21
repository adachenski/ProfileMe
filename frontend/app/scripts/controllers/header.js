/**
 * Created by Administrator on 11/5/2016.
 */
'use strict';

angular.module('profileMeApp')
    .controller('HeaderController', ['$scope','$state', 'authToken', '$anchorScroll',
        '$location','$stateParams','customUrlFactory','HomeModelFactory','alert',
        function ($scope,$state, authToken, $anchorScroll, $location,$stateParams,
                  customUrlFactory,HomeModelFactory,alert) {
           // $scope.cuttentID = 'nasko';

            var scopeId = $stateParams._id;
            console.log('scopeId header before get : '+scopeId);
            $scope.start = function () {
                $state.go('app');
                $location.hash("userDetails");
                $anchorScroll();
            };

           // $scope.isHome = false;
           //console.log($location.path());
           // if($location.path()!='/'){
           //     $scope.isHome = true;
           // }
           // else{
           //     $scope.isHome = false;
           // }

            $scope.isAuthenticated = authToken.isAuthenticated;
            console.log($scope.isAuthenticated() );


            customUrlFactory.get({})
                .$promise.then(
                function (response) {
                    scopeId = response._id;
                       // $scope.cuttentID = response._id;
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
            $scope.showUrl = function(){
                $state.go('app.custom',{id:scopeId})
            }
            $scope.footerSave = function(){
                customUrlFactory.update({id: scopeId}, {
                    footerTitle: $scope.headerContent.footerTitle,
                    footerLeft: $scope.headerContent.footerLeft,
                    footerMuddle:$scope.headerContent.footerMiddle,
                    footerRight: $scope.headerContent.footerRight

                }, function (err, numberAffected, rawResponse) {
                    if (err) {
                        //throw 'Error pushing data to server: '+err;
                    }

                    alert('success', 'Awesome! \n',' Successfully Changed View. ');

                });
            };

            $scope.headerSave = function () {
                console.log(scopeId);
                customUrlFactory.update({id: scopeId}, {
                    logo: $scope.headerContent.logo,
                    startButton: $scope.headerContent.startButton,
                    navbarStatic:$scope.headerContent.navbarStatic

                }, function (err, numberAffected, rawResponse) {
                    if (err) {
                        //throw 'Error pushing data to server: '+err;
                    }

                    alert('success', 'Awesome! \n',' Successfully Changed View. ');

                });

            };

        }]);