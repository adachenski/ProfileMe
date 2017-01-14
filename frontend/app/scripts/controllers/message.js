/**
 * Created by Administrator on 12/11/2016.
 */

'use strict';
angular.module('profileMeApp').controller('MessageController', ['$scope', '$resource', '$http', 'messagesFactory', '$stateParams', '$state',
    function ($scope, $resource, $http, messagesFactory, $stateParams, $state) {

        //console.log('id from message ', $stateParams);

        $scope.messages = messagesFactory.query();

        // console.log($scope.messages);

        $scope.currentMessage = function (message) {

            $scope.simgleMessage = messagesFactory.get({message: message});
        };


        $scope.submitMessage = function () {

            messagesFactory.save({
                title: $scope.message.title,
                content: $scope.message.content,
                postedById: $stateParams.id,
                sender: $scope.message.senderName,
                voteUp: 0,
                voteDown: 0

            }, function (res) {
               // console.log(res);
            });
        };
    }]);