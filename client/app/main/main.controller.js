'use strict';

angular.module('remapApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];
    //$scope.map = { center: { latitude: 39.830033, longitude: -89.6400523 }, zoom: 7 ,mapTypeId: 'roadmap'};

    $scope.currentState = '';
    $scope.currentStateJSON = '';

    $scope.map = {
      center: {latitude: 39.830033, longitude: -89.6400523 },
      zoom: 7,
      control: {},

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

    $scope.polygons = [
      {
        id: 1,
        path: [
          {
            latitude: 50,
            longitude: -80
          },
          {
            latitude: 30,
            longitude: -120
          },
          {
            latitude: 20,
            longitude: -95
          }
        ],
        stroke: {
          color: '#6060FB',
          weight: 3
        },
        editable: true,
        draggable: true,
        geodesic: false,
        visible: true,
        fill: {
          color: '#ff0000',
          opacity: 0.8
        }
      }
    ];


/*
 ,
 styles: [{
 polygonOptions: {
 fillColor: '#00FF00',
 fillOpacity: 0.35
 }}]
 */



    $scope.$watch('currentState', function() {
      if($scope.currentState!=''){
        $http.get('/api/states/').success(function(stateJSON) {
          $scope.currentStateJSON = stateJSON;
          $scope.polygons = stateJSON;
        });
      }
    });

  });
