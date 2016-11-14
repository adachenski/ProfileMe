/**
 * Created by Administrator on 11/13/2016.
 */

'use strict';

angular.module('profileMeApp')
    .directive('compareRegisterPasswords', function () {
        return {
            require: 'ngModel',
            link: function (scope, element, attrs, ngModelCtrl) {

                function comparePswd(password) {
                    var validPswd = (password === scope.$eval(attrs.compareRegisterPasswords));
                    ngModelCtrl.$setValidity('equal', validPswd);
                    return validPswd ? password : undefined;

                }

                ngModelCtrl.$parsers.push(comparePswd);
                ngModelCtrl.$formatters.push(comparePswd);

                scope.$watch(attrs.compareRegisterPasswords, function () {
                    ngModelCtrl.$setViewValue(ngModelCtrl.$viewValue);
                });
            }
        };
    });
