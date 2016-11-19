/**
 * Created by Administrator on 11/17/2016.
 */

angular.module('profileMeApp')
    .controller('ShowCustomUrlController',['$scope','$stateParams','customUrlFactory',
        function($scope,$stateParams,customUrlFactory){
console.log('SHowCustom');
            $scope.customUrl = customUrlFactory.get({
                id: $stateParams.id
            })
                .$promise.then(
                function (response) {
                    console.log($stateParams.id);
                    $scope.customUrl = response;
                    $scope.showDish = true;
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