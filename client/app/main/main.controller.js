'use strict';

angular.module('remapApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];
    $scope.map = { center: { latitude: 39.830033, longitude: -89.6400523 }, zoom: 7 ,mapTypeId: 'roadmap'};
    $scope.showLayer = true;
    $scope.layerOptions = {
      query: {
      select: 'geometry',
        from: '1OoBTpAqkASRRnJ_tsUOiswz06-0r2Nc9ncxQM68',
        where: "'State' = 'IL'"}};


    /*$http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });*/

  });
