/**
 * Created by Administrator on 11/14/2016.
 */

angular.module('profileMeApp')
    .controller('LoginController', ['$scope',  '$http','API_URL','alert','authToken','auth',
        function ($scope,  $http,  API_URL,alert, authToken,auth) {

            $scope.submit = function () {

                auth.login($scope.email, $scope.password)
                    .success(function (res) {
                        alert('success', 'Welcome','Thanks for coming back '+res.user.email+'!');
                        console.log('good')
                    }).error(function (err) {
                        alert('warning', 'Oops', 'Something went wrong :('+err.message,3000);
                    })
            }
        }
    ]);