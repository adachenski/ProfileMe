/**
 * Created by Administrator on 11/13/2016.
 */

angular.module('profileMeApp')
    .controller('RegisterController', ['$scope', '$http', function ($scope, $http) {
        $scope.submit = function () {
            var url = '/';
            var user = {};
            $http.post(url, user).success(function () {
                console.log('good')
            }).error(function () {
                console.log('bad')
            })
        }
    }
    ]);
