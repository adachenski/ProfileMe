/**
 * Created by Administrator on 11/17/2016.
 */

angular.module('profileMeApp').factory('customUrlFactory',['$resource', 'API_URL',
  function ($resource, API_URL) {
        return $resource(API_URL + "custom/:id", null, {
            'update': {
                method: 'PUT'
            }
        });
    }]);