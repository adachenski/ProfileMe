/**
 * Created by Administrator on 1/7/2017.
 */

angular.module('profileMeApp')
    .factory('myMessageFactory', ['$resource', 'API_URL', 'customUrlFactory', '$timeout',
        function ($resource, API_URL, customUrlFactory, $timeout) {

            return function (setData) {
                return $resource(API_URL + "my-messages/:id", {Url: setData}, {
                    'update': {
                        method: 'PUT'
                    }
                });
            }
        }]);