/**
 * Created by Administrator on 11/14/2016.
 */

angular.module('profileMeApp')
    .controller('JobsController', ['$scope', '$http', '$stateParams','$state','API_URL','alert','customUrlFactory',
        function ($scope, $http,$stateParams,$state, API_URL,alert,customUrlFactory) {
var scopeId = $stateParams.id;
        $http.get(API_URL + 'jobs')
            .success(function (jobs) {

                $scope.jobs = jobs;
            })
            .error(function (err) {
                alert('warning','Unable to get Jobs',err.message);
            });

            console.log(scopeId);


            customUrlFactory.get({})
                .$promise.then(
                function (response) {
                    scopeId = response._id;
                    console.log(scopeId);

                    $scope.jobsContent = response;



                },
                function (response) {

                    $scope.message = "Error: " + response.status + " " + response.statusText;
                }
            );

            $scope.submitSettings  = function(){


          $http.put('http://localhost:3000/custom/'+scopeId, {
              username: $scope.username

          }, {
              'Content-Type': 'application/json;'
          })
              .then(
              function (response) {
                  console.log(response);
              },
              function (response) {
                  // failure callback
              }
          );
          $state.go('app.custom',{id:scopeId});
        }
    }]);