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
                    console.log('nasko');
                    console.log($stateParams.id);
                    console.log('nasko');
                    $scope.showCustomUrl = response;

                    //$scope.customUrl.contentMain = $scope.deliberatelyTrustDangerousSnippet();
                   //$scope.showDish = true;
                   //$scope.contentMain = response;
                   //$scope.contentMain = $scope.dataFromDB.mainContent;
                   //$scope.middleBackgroundImage = $scope.dataFromDB.mainBackground;
                },
                function (response) {
                    $scope.message = "Error: " + response.status + " " + response.statusText;
                }
            );


            //     $scope.customUrl ={};
       //     $scope.hi = 'Nasko';
       // $scope.customUrl = customUrlFactory.get({
       //     //id:$stateParams.id
       // }).$promise.then(function(response){
       //         $scope.customUrl =response;
       //     })
    }]);