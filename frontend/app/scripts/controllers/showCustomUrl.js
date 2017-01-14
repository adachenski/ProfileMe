/**
 * Created by Administrator on 11/17/2016.
 */

angular.module('profileMeApp')
    .controller('ShowCustomUrlController',['$scope','$stateParams','customUrlFactory','$location','$anchorScroll','$sce',
        function($scope,$stateParams,customUrlFactory,$location,$anchorScroll,$sce){
            $scope.customInfoEdited = function () {
                $location.hash("customInfo");
                $anchorScroll();
            };

            $scope.startEdited = function () {
                $location.hash("userDetails");
                $anchorScroll();
            };
            $scope.fromCustom= customUrlFactory.get({
                id: $stateParams.id
            })
                .$promise.then(
                function (response) {

                    //console.log(response);
                    $scope.showCustomUrl = response;
                },
                function (response) {
                    $scope.message = "Error: " + response.status + " " + response.statusText;
                }
            );

    }]);