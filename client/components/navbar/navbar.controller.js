'use strict';

angular.module('remapApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'State Map',
      'link': '/'
    },
        {
            'title': 'About',
            'link': '/about'
        }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });