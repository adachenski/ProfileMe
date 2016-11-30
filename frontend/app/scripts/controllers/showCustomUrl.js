/**
 * Created by Administrator on 11/17/2016.
 */

angular.module('profileMeApp')
    .controller('ShowCustomUrlController',['$scope','$stateParams','customUrlFactory','$sce',
        function($scope,$stateParams,customUrlFactory,$sce){
            $scope.fromCustom= customUrlFactory.get({
                id: $stateParams.id
            })
                .$promise.then(
                function (response) {
                   // $scope.deliberatelyTrustDangerousSnippet = function() {
                   //     return $sce.trustAsHtml(response.mainContent);
                   // };
                    console.log('$stateparams.id');
                    console.log($stateParams.id);
                    $scope.showCustomUrl = response;
                },
                function (response) {
                    $scope.message = "Error: " + response.status + " " + response.statusText;
                }
            );

    }]);