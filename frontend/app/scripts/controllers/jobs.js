/**
 * Created by Administrator on 11/14/2016.
 */

angular.module('profileMeApp')
    .controller('JobsController', ['$scope', '$http', '$stateParams', '$state', 'API_URL', 'alert', 'customUrlFactory', 'UserSettings',
        function ($scope, $http, $stateParams, $state, API_URL, alert, customUrlFactory, UserSettings) {
            var scopeId = $stateParams.id;
            $scope.UserSetting = UserSettings.data;

            // $http.get(API_URL + 'jobs')
            //     .success(function (jobs) {

            //         $scope.jobs = jobs;
            //     })
            //     .error(function (err) {
            //         alert('warning', 'Unable to get Jobs', err.message);
            //     });

            // console.log(scopeId);


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
            $scope.submitView = function () {

                customUrlFactory.update({id: scopeId}, {
                    viewOne: $scope.UserSetting.templateOne,
                    viewTwo: $scope.UserSetting.templateTwo

                }, function (err, numberAffected, rawResponse) {
                    if (err) {
                        //throw 'Error pushing data to server: '+err;
                    }
                    console.log('before');
                    // console.log(numberAffected);
                    alert('success', 'Awesome! \n',' Successfully Changed View. ');
                    console.log(rawResponse);
                    console.log('before');
                });
            };

            $scope.submitUsername = function () {


                customUrlFactory.update({id: scopeId}, {
                    username: $scope.username

                }, function (err, numberAffected, rawResponse) {
                    if (err) {
                        //throw 'Error pushing data to server: '+err;
                    }
                    console.log('before');
                    // console.log(numberAffected);
                    console.log(rawResponse);
                    console.log('before');
                });
                $state.go('app.custom', {id: scopeId});
            }
        }]);