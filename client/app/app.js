'use strict';

angular.module('remapApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                redirectTo: '/main'
            })
            .otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode(false);
  });