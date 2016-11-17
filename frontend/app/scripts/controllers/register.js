/**
 * Created by Administrator on 11/13/2016.
 */

angular.module('profileMeApp')
    .controller('RegisterController', ['$scope', 'alert', 'auth',
        function ($scope, alert, auth) {

        $scope.submit = function () {

            auth.register($scope.email, $scope.password)

                .success(function (res) {
                    alert('success', 'Successful register.','Welcome, '+res.user.email+'!');

                    console.log('good')
                }).error(function (err) {
                    console.log('bad');
                    alert('warning', 'Oops', 'Something went wrong :(',err.message);
                })
        }
    }
    ]);
