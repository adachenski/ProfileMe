/**
 * Created by Administrator on 11/14/2016.
 */

angular.module('profileMeApp')
    .controller('LogoutController',['authToken',function(authToken){
        authToken.removeToken();
    }]);