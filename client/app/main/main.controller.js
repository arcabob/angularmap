'use strict';

angular.module('remapApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];
    //$scope.map = { center: { latitude: 39.830033, longitude: -89.6400523 }, zoom: 7 ,mapTypeId: 'roadmap'};

    $scope.currentState = 'IL';

    $scope.map = {
      center: {latitude: 39.830033, longitude: -89.6400523 },
      zoom: 7,
      layer: {
        show: true,
        options: {
          query: {
            select: 'geometry',
            from: '1OoBTpAqkASRRnJ_tsUOiswz06-0r2Nc9ncxQM68',
            where: "'State' = 'IL'"
          },
          styles: [{
            polygonOptions: {
              fillColor: '#00FF00',
              fillOpacity: 0.35
            }}]
        }
      }
    };


/*
 ,
 styles: [{
 polygonOptions: {
 fillColor: '#00FF00',
 fillOpacity: 0.35
 }}]
 */



    $scope.$watch('currentState', function() {
      $scope.map.layer.options.query = {
        select: "geometry",
        from: "1OoBTpAqkASRRnJ_tsUOiswz06-0r2Nc9ncxQM68",
        where: "'State' = '" + $scope.currentState + "'"};
    });


    /*$http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });*/

  });
