/**
 * Created by Administrator on 12/11/2016.
 */

angular.module('profileMeApp').factory('messagesFactory', ['$resource', 'API_URL', '$location',
    function ($resource, API_URL, $location) {
        var tempUrl = $location.absUrl();
        var absUrl = tempUrl.toString();

        var firstPart = absUrl.indexOf("custom") + 7;

        var tempUrl = absUrl.slice(firstPart);
        var secondPart = tempUrl.indexOf("/message");

        var finalUrl = tempUrl.slice(0, secondPart);

        return $resource(API_URL + "messages/:id", {
            Url: finalUrl
        });
        //return $resource(API_URL + "messages/:id", null, {
        //    'update': {
        //        method: 'PUT'
        //    }
        //});
    }]);