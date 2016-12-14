/**
 * Created by Administrator on 12/13/2016.
 */
/**
 * Created by Administrator on 11/5/2016.
 */
'use strict';

angular.module('profileMeApp')
    .controller('HeaderCustomController', ['$scope','$stateParams','customUrlFactory','returnIdFactory',
        function ($scope,$stateParams,customUrlFactory,returnIdFactory) {

           // console.log(returnIdFactory.finalUrl);
            $scope.tempUrlId = returnIdFactory.finalUrl;
            $scope.start = function () {

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
            //$scope.isAuthenticated = authToken.isAuthenticated;
            //console.log($scope.isAuthenticated() );

            console.log('hi custom header');
            $scope.fromCustom= customUrlFactory.get({
                id: $stateParams.id
            })
                .$promise.then(
                function (response) {
                    // $scope.deliberatelyTrustDangerousSnippet = function() {
                    //     return $sce.trustAsHtml(response.mainContent);
                    // };

                   // console.log($stateParams.id);
                    $scope.headerCustomContent = response;
                },
                function (response) {
                    $scope.message = "Error: " + response.status + " " + response.statusText;
                }
            );


        }]);