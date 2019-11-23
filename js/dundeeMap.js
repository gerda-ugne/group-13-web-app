mapboxgl.accessToken = 'pk.eyJ1IjoiZ2VyZGEtdWduZSIsImEiOiJjazJudmhhODUwdTc3M2NwZWF0dGFjeGhhIn0.nRoeZsel8VskCqR_nU74jA';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v10',
center: [-2.970697,56.462372],
zoom: 15});

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
        {
          "type": "Feature",
          "geometry":{
            "type": "Point",
            "coordinates": [-122.414, 37.776]
          },
          "properties": {
            "title": "BQ",
            "icon": "shop"
          }
        }
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
map.addControl(new mapboxgl.NavigationControl());
