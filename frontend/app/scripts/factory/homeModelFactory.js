angular.module('profileMeApp').factory('HomeModelFactory', function ($timeout, $http) {
    var homeData = {
        fetch: function () {
            return $timeout(function () {
                return $http.get('static/homePageData.json').then(function (response) {
                    return response.data;
                });
            }, 30);
        }
    };

    return homeData;
});