/**
 * Created by Administrator on 1/7/2017.
 */

angular.module('profileMeApp').factory('returnPostedBy',['$timeout','customUrlFactory',
    function($timeout,customUrlFactory){
   var id= customUrlFactory.get({})
        .$promise.then(
        function (response) {

           var scopeId = response._id;
            return scopeId;

        }

    );
    return{
        scopeId:id
    }

}]);