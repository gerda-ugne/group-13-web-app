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
            "coordinates": [-3.008874,56.456184]
          },
          "properties": {
            "title": "Harris Academy",
            "icon": "school"
          }
        },
        {
          "type": "Feature",
          "geometry":{
            "type": "Point",
            "coordinates": [-3.0494,56.4595]
          },
          "properties": {
            "title": "Riverside View Care Home",
            "icon": "circle"
          }
        },
        {
          "type": "Feature",
          "geometry":{
            "type": "Point",
            "coordinates": [-2.9923,56.4558]
          },
          "properties": {
            "title": "Shelter Charity Shop",
            "icon": "shop"
          }
        },
          {
            "type": "Feature",
            "geometry":{
              "type": "Point",
              "coordinates": [-2.9742,56.4632]
            },
            "properties": {
              "title": "Abertay University",
              "icon": "college"
            }
          },
          {
            "type": "Feature",
            "geometry":{
              "type": "Point",
              "coordinates": [-2.991741,56.456268]
            },
            "properties": {
              "title": "Blackness Primary School",
              "icon": "school"
            }
          },
          {
            "type": "Feature",
            "geometry":{
              "type": "Point",
              "coordinates": [-2.955721,56.469237]
            },
            "properties": {
              "title": "Boomerang Community Centre",
              "icon": "circle"
            }
          },
          {
            "type": "Feature",
            "geometry":{
              "type": "Point",
              "coordinates": [-2.988567,56.454631]
            },
            "properties": {
              "title": "Cherry Blossom Nursery",
              "icon": "school"
            }
          },
          {
            "type": "Feature",
            "geometry":{
              "type": "Point",
              "coordinates": [-2.969253,56.464595]
            },
            "properties": {
              "title": "Dundee Central Library",
              "icon": "library"
            }
          },
          {
            "type": "Feature",
            "geometry":{
              "type": "Point",
              "coordinates": [-2.985143,56.455243]
            },
            "properties": {
              "title": "Roseangle House Nursery",
              "icon": "school"
            }
          },
          {
            "type": "Feature",
            "geometry":{
              "type": "Point",
              "coordinates": [-2.99253,56.482784]
            },
            "properties": {
              "title": "Tesco Kingsway",
              "icon": "shop"
            }
          },
          {
            "type": "Feature",
            "geometry":{
              "type": "Point",
              "coordinates": [-2.997369,56.46174]
            },
            "properties": {
              "title": "Victoria Park Primary School",
              "icon": "school"
            }
          },
          {
            "type": "Feature",
            "geometry":{
              "type": "Point",
              "coordinates": [-2.992133,56.45188]
            },
            "properties": {
              "title": "Tesco Riverside",
              "icon": "shop"
            }
          },
          {
            "type": "Feature",
            "geometry":{
              "type": "Point",
              "coordinates": [-2.967918,56.46111]
            },
            "properties": {
              "title": "St Paul's Cathedral",
              "icon": "religious-christian"
            }
          },
          {
            "type": "Feature",
            "geometry":{
              "type": "Point",
              "coordinates": [-2.88262,56.469473]
            },
            "properties": {
              "title": "St Luke's of Broughty Ferry",
              "icon": "religious-christian"
            }
          },
          {
            "type": "Feature",
            "geometry":{
              "type": "Point",
              "coordinates": [-2.997369,56.46174]
            },
            "properties": {
              "title": "St Joseph's RC primary school",
              "icon": "school"
            }
          },
          {
            "type": "Feature",
            "geometry":{
              "type": "Point",
              "coordinates": [-2.965024,56.465517]
            },
            "properties": {
              "title": "St Andrew's Parish Church",
              "icon": "religious-christian"
            }
          },
          {
            "type": "Feature",
            "geometry":{
              "type": "Point",
              "coordinates": [-2.917261,56.489616]
            },
            "properties": {
              "title": "Signpost International",
              "icon": "circle"
            }
          },
          {
            "type": "Feature",
            "geometry":{
              "type": "Point",
              "coordinates": [-2.98374,56.456206]
            },
            "properties": {
              "title": "Roseangle Cafe",
              "icon": "cafe"
            }
          },
          {
            "type": "Feature",
            "geometry":{
              "type": "Point",
              "coordinates": [-3.009046,56.471096]
            },
            "properties": {
              "title": "Lochee Library",
              "icon": "library"
            }
          },
          {
            "type": "Feature",
            "geometry":{
              "type": "Point",
              "coordinates": [-2.986669,56.477619]
            },
            "properties": {
              "title": "Kingscross Hospital",
              "icon": "hospital"
            }
          },
          {
            "type": "Feature",
            "geometry":{
              "type": "Point",
              "coordinates": [-2.8793,56.4704]
            },
            "properties": {
              "title": "Grove Academy",
              "icon": "school"
            }
          },
          {
            "type": "Feature",
            "geometry":{
              "type": "Point",
              "coordinates": [-2.98635,56.456122]
            },
            "properties": {
              "title": "Gate Church International",
              "icon": "religious-christian"
            }
          },
          {
            "type": "Feature",
            "geometry":{
              "type": "Point",
              "coordinates": [-2.974923,56.462304]
            },
            "properties": {
              "title": "Dundee Voluntary Action",
              "icon": "circle"
            }
          },
          {
            "type": "Feature",
            "geometry":{
              "type": "Point",
              "coordinates": [-3.004002,56.483707]
            },
            "properties": {
              "title": "The circle",
              "icon": "circle"
            }
          },
          {
            "type": "Feature",
            "geometry":{
              "type": "Point",
              "coordinates": [-2.856218,56.47654]
            },
            "properties": {
              "title": "Balgillo Nursery",
              "icon": "school"
            }
          },
          {
            "type": "Feature",
            "geometry":{
              "type": "Point",
              "coordinates": [-2.9978,56.466]
            },
            "properties": {
              "title": "City Church",
              "icon": "religious-christian"
            }
          },
          {
            "type": "Feature",
            "geometry":{
              "type": "Point",
              "coordinates": [-2.996866,56.456793]
            },
            "properties": {
              "title": "Blackness Library",
              "icon": "library"
            }
          },
            {
              "type": "Feature",
              "geometry":{
                "type": "Point",
                "coordinates": [-2.9254,56.4758]
              },
              "properties": {
                "title": "Asda Dundee Milton",
                "icon": "shop"
              }
        },
        {
          "type": "Feature",
          "geometry":{
            "type": "Point",
            "coordinates": [-2.97464,56.462648]
          },
          "properties": {
            "title": "British Telecom",
            "icon": "circle"
          }
        },
        {
          "type": "Feature",
          "geometry":{
            "type": "Point",
            "coordinates": [-2.987344,56.456258]
          },
          "properties": {
            "title": "Dundee West End Community Fridge",
            "icon": "circle"
          }
        },
        {
          "type": "Feature",
          "geometry":{
            "type": "Point",
            "coordinates": [-3.069403,56.456405]
          },
          "properties": {
            "title": "James Hutton Institute",
            "icon": "circle"
          }
        }]
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
