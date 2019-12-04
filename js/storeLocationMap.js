// Mapbox token
mapboxgl.accessToken = 'pk.eyJ1IjoiZ2VyZGEtdWduZSIsImEiOiJjazJudmhhODUwdTc3M2NwZWF0dGFjeGhhIn0.nRoeZsel8VskCqR_nU74jA';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v10',
center: [-2.9924221,56.4559036],
zoom: 16});

//Layer with store location added
map.on('load', function() {
  map.addLayer({
    "id": "points",
    "type": "symbol",
    "source": {
      "type": "geojson",
      "data": {
        "type": "FeatureCollection",
        "features": [{
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [-2.9924221,56.4559036]
          },
          "properties": {
            "title": "The Little Green Larder",
            "icon": "shop"
          }
        },
        ]
      }
    },
    "layout": {
      "icon-image": "{icon}-15",
      "text-field": "{title}",
      "text-font": ["Roboto Regular"],
      "text-offset": [0.6, 0.1],
      "text-anchor": "left",
    }
  });
});

//Adds control options to the map
map.addControl(new mapboxgl.NavigationControl());
