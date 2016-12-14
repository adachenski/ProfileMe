/**
 * Created by Administrator on 12/13/2016.
 */
/**
 * Created by Administrator on 12/11/2016.
 */

angular.module('profileMeApp').factory('returnIdFactory',['$resource', 'API_URL','$location',
    function ($resource, API_URL,$location) {
        var tempUrl = $location.absUrl();
        var absUrl = tempUrl.toString();

        var firstPart = absUrl.indexOf("custom")+7;

        var tempUrl = absUrl.slice(firstPart);
        var secondPart = tempUrl.indexOf("message");
        console.log('second parth '+secondPart);
        if(secondPart<0){
            secondPart = tempUrl.length+1;
        }
        console.log(tempUrl);
        console.log('second parth '+secondPart);
        var finalUrl = tempUrl.slice(0,secondPart-1);

        return {
            finalUrl:finalUrl
        };
        //return $resource(API_URL + "messages/:id", null, {
        //    'update': {
        //        method: 'PUT'
        //    }
        //});
    }]);