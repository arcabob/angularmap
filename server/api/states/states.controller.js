exports.index = function(req, res) {
  var states = require('./states.json');

  var output = states.features.filter(function (item) {
    return item.properties.NAME == "Illinois";
  });

  if (output.length) {
    res.json([
      {
        id: 1,
        path: output["0"].geometry.coordinates["0"],
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
      }]);
  } else{
    res.json([
      {
        id: 1,
        path: [
          {
            latitude: 40,
            longitude: -80
          },
          {
            latitude: 20,
            longitude: -120
          },
          {
            latitude: 10,
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
    ]);
  }

};
