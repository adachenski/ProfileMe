/**
 * Created by Administrator on 12/11/2016.
 */

'use strict';
angular.module('profileMeApp').controller('MessageController',['$scope','$resource','$http','messagesFactory','$stateParams','$state',
    function($scope,$resource,$http,messagesFactory,$stateParams,$state){

        console.log('id from message ',$stateParams);

        $scope.messages = messagesFactory.query();
        var x = $scope.messages;
        for(var mess in x){
            console.log(mess.title);
        }
       // console.log($scope.messages);

        $scope.currentMessage = function(message){

            $scope.simgleMessage = messagesFactory.get({message:message});
        };

        //var resultM = $http.get('http://localhost:3000/messages');
        //resultM.then(function (ress) {
        //    $scope.messages = ress.data;
        //    for (var i = 0; i < ress.data.length; i += 1) {
        //        console.log(ress.data[i].content);
        //        console.log(ress.data[i].title);
        //    }
        //});

        $scope.submitMessage = function(){

            messagesFactory.save({
            title:$scope.message.title,
            content:$scope.message.content,
            postedById:$stateParams.id,
            sender:$scope.message.senderName,
            voteUp:0,
            voteDown:0

        },function(res){
                console.log(res);
            });
        };
     //  $scope.postMessage = function(){
     //      $http.post('http://localhost:3000/messages',{
     //          title:"Current Green",
     //          content:"May be work",
     //          postedById:$stateParams.id
     //      } ,{
     //          'Content-Type': 'application/json;'
     //      })
     //          .then(function(ress){
     //              console.log(ress);
     //          },function(err){
     //              console.log('errrrr: '+err);
     //          });
     //  }
    }]);