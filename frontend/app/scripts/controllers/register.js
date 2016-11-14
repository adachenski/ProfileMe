/**
 * Created by Administrator on 11/13/2016.
 */

angular.module('profileMeApp')
    .controller('RegisterController', ['$scope', 'alert', 'auth', '$http', function ($scope, alert, auth, $http) {

        $scope.submit = function () {
            var url = 'http://localhost:3000/register';
            var user = {
                email: $scope.email,
                password:$scope.password
            };
            //auth.register($scope.email, $scope.password)
            $http.post(url, user)
                .success(function (res) {
                    alert('success', 'Successful register.');
                    console.log('good')
                }).error(function (err) {
                    console.log('bad');
                    alert('warning', 'Oops', 'Something went wrong :(');
                })
        }
    }
    ]);
