/**
 * Created by Administrator on 11/13/2016.
 */

'use strict';

angular.module('profileMeApp')
    .service('alert',['$rootScope', '$timeout',function($rootScope, $timeout){
        var alertTimeout;
        return function(type, title, message, timeout){
            $rootScope.alert = {
                hasBeenShown:true,
                show:true,
                type:type,
                message:message,
                title:title

            };
            $timeout.cancel(alertTimeout);
            alertTimeout = $timeout(function(){
                $rootScope.alert.show=false;
            }, timeout || 2500);
        };
    }]);