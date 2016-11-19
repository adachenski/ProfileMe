/**
 * Created by Administrator on 11/16/2016.
 */

angular.module('profileMeApp')
    .controller('HomeController', ['$scope', function ($scope) {
        $scope.headerMain = 'Hello from home-custom';
        $scope.contentMain = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore' +
        'magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea' +
        'commodo consequat.';

        $scope.editMain = false;

        $scope.editMainContent = function () {
            $scope.editMain = true;
        };
        $scope.saveMainContent = function () {
            $scope.editMain = false;
        };

        $scope.middleContentLeftHead="Left Header"
        $scope.middleContentLeftBody="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet atque consectetur doloribus et,ipsam itaque nemo ratione tempora temporibus vel veniam. Expedita hic laboriosam natusreprehenderit veritatis! Iure, sequi! ";
        $scope.middleContentRightHead="Right Header"
        $scope.middleContentRightBody="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet atque consectetur doloribus et,ipsam itaque nemo ratione tempora temporibus vel veniam. Expedita hic laboriosam natusreprehenderit veritatis! Iure, sequi! ";

        $scope.editMiddleLeft = false;
        $scope.editMiddleRigh = false;

        $scope.editMiddleContentLeft = function(){
            $scope.editMiddleLeft = true;
        };
        $scope.saveMiddleContentLeft = function(){
            $scope.editMiddleLeft = false;
        };

        $scope.middleBackgroundShow = false;
        $scope.middleBackgroundImage = 'https://images.pexels.com/photos/3247/nature-forest-industry-rails.jpg?w=940&h=650&auto=compress&cs=tinysrgb';
        $scope.editMiddleBackground = function(){
            $scope.middleBackgroundShow = true;
        };
        $scope.saveMiddleBackground = function(){
            $scope.middleBackgroundShow = false;
        };
    }]);
