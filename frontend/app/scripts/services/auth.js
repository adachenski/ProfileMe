/**
 * Created by Administrator on 11/9/2016.
 */
angular.module('profileMeApp')
    .service('auth', ['$http', 'authToken', 'API_URL', '$state',
        function ($http, authToken, API_URL, $state) {
            this.login = function (email, password) {
                return ($http.post(API_URL + 'login', {email: email, password: password}));
            }
            this.register = function (email, password) {
                return $http.post(API_URL + 'register', {email: email, password: password})
                    .success(authSuccesfull)
            };

            function authSuccesfull(res) {
                authToken.setToken(res.token);
                $state.go('app');
            }
        }]);