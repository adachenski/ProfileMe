/**
 * Created by Administrator on 11/14/2016.
 */

angular.module('profileMeApp')
    .controller('JobsController', ['$scope', '$http', '$stateParams', '$state', 'API_URL', 'alert', 'customUrlFactory', '$window',
        function ($scope, $http, $stateParams, $state, API_URL, alert, customUrlFactory, $window) {
            var scopeId = $stateParams.id;
            //console.log(scopeId);
            var templateTwo;
            var templateOne;

            customUrlFactory.get({})
                .$promise.then(
                function (response) {
                    scopeId = response._id;
                    $scope.jobsContent = response;
                },
                function (response) {

                    $scope.message = "Error: " + response.status + " " + response.statusText;
                }
            );
            $scope.updateViewOne = function () {
                templateTwo = true;
                templateOne = false;
            };
            $scope.updateViewTwo = function () {
                templateTwo = false;
                templateOne = true;

            };
            $scope.submitView = function () {

                customUrlFactory.update({id: scopeId}, {
                    viewOne: templateOne,
                    viewTwo: templateTwo

                }, function (err, numberAffected, rawResponse) {
                    if (err) {
                        //throw 'Error pushing data to server: '+err;
                    }
                    alert('success', 'Awesome! \n', ' Successfully Changed View. ');
                    $state.go('app');

                });

            };

            $scope.preview = function () {
                var url = $state.href('app.custom', {id: scopeId});
                window.open(url, '_blank');
            };

            $scope.submitUsername = function () {


                customUrlFactory.update({id: scopeId}, {
                    username: $scope.username

                }, function (err, numberAffected, rawResponse) {
                    if (err) {
                        //throw 'Error pushing data to server: '+err;
                    }
                });
                $state.go('app.custom', {id: scopeId});
            }
        }]);