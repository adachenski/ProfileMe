/**
 * Created by Administrator on 12/13/2016.
 */
/**
 * Created by Administrator on 11/5/2016.
 */
'use strict';

angular.module('profileMeApp')
    .controller('HeaderCustomController', ['$scope','$stateParams','customUrlFactory',
        'returnIdFactory','$location','$anchorScroll','$state',
        function ($scope,$stateParams,customUrlFactory,returnIdFactory,$location,$anchorScroll, $state) {

           console.log($location.path());


            $scope.tempUrlId = returnIdFactory.finalUrl;

            $scope.start23 = function () {
               // $state.go('app.custom',{id:scopeId});
                console.log('from custom')
                $location.hash("userDetails");
                $anchorScroll();
            };

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