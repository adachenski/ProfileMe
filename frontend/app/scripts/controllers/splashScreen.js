/**
 * Created by Administrator on 1/9/2017.
 */

angular.module('profileMeApp').controller('SplashScreenController',['$scope','$timeout',function($scope, $timeout){
    $scope.showContent = false;
    $timeout(function(){
        $scope.showContent = true;
    },3000)
}]);