/**
 * Created by Administrator on 11/14/2016.
 */

angular.module('profileMeApp')
    .controller('LogoutController',['authToken','$state',function(authToken, $state){
        authToken.removeToken();
        $state.go('app');
    }]);