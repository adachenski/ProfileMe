/**
 * Created by Administrator on 11/13/2016.
 */

angular.module('profileMeApp')
    .controller('RegisterController', ['$scope','$http', 'alert', 'auth','HomeModelFactory',
        function ($scope,$http, alert, auth, HomeModelFactory) {

        $scope.submit = function () {

            auth.register($scope.email, $scope.password)

                .success(function (res) {
                    alert('success', 'Successful register.','Welcome, '+res.user.email+'!');

                    HomeModelFactory.fetch().then(function(data) {
                        var customUrl = data;

                        $http.post('http://localhost:3000/custom', {
                            mainHeader: customUrl.headerMain,
                            mainContent: customUrl.contentMain,
                            mainBackground: customUrl.middleBackgroundImage
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
                    });

                }).error(function (err) {
                    console.log('bad');
                    alert('warning', 'Oops', 'Something went wrong :(',err.message);
                })
        }
    }
    ]);
