'use strict';

angular.module('remapApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];
    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

    /*$http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });*/

  });
