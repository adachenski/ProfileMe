/**
 * Created by Administrator on 11/14/2016.
 */

angular.module('profileMeApp')
    .controller('JobsController', ['$scope', '$http', 'API_URL','alert', function ($scope, $http, API_URL,alert) {

        $http.get(API_URL + 'jobs')
            .success(function (jobs) {

                $scope.jobs = jobs;
            })
            .error(function (err) {
                alert('warning','Unable to get Jobs',err.message);
            });
    }]);