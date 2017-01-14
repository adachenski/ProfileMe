/**
 * Created by Administrator on 12/13/2016.
 */
/**
 * Created by Administrator on 11/5/2016.
 */
'use strict';

angular.module('profileMeApp')
    .controller('HeaderCustomController', ['$scope', '$stateParams', 'customUrlFactory',
        'returnIdFactory', '$location', '$anchorScroll',
        function ($scope, $stateParams, customUrlFactory, returnIdFactory, $location, $anchorScroll) {

            $scope.tempUrlId = returnIdFactory.finalUrl;

            $scope.startEdited = function () {

                $location.hash("sports");
                $anchorScroll();
            };
            $scope.fromCustom = customUrlFactory.get({
                id: $stateParams.id
            })
                .$promise.then(
                function (response) {
                    $scope.headerCustomContent = response;
                },
                function (response) {
                    $scope.message = "Error: " + response.status + " " + response.statusText;
                }
            );
        }]);