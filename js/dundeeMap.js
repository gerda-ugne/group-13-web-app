
//Mapbox token
mapboxgl.accessToken = 'pk.eyJ1IjoiZ2VyZGEtdWduZSIsImEiOiJjazJudmhhODUwdTc3M2NwZWF0dGFjeGhhIn0.nRoeZsel8VskCqR_nU74jA';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v10',
center: [-2.970697,56.462372],
zoom: 15});

map.on('load', function() {
  //Layer showing locations along with their icons and descriptions added
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
            "description": "The shop itself! Come on down<br>and have a look at what it has to offer.<br><strong>Address</strong>: 272 Perth Rd DD2 1AE<br><strong>Hours</strong>:<br>Monday: 10am-6pm<br>Tuesday: 10am-6pm<br>Wednesday: 9am-5pm<br>Thursday: 4-7pm<br>Friday: 10am-6pm<br>Saturday: 9am-5pm<br>Sunday: 11am-2pm",
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
            "description": "Harris Academy is a co-educational comprehensive school in the West End of Dundee, Scotland. Harris Academy was founded in 1885 and is the oldest public school in Dundee. (Children and parents only)<br><strong>Address</strong>: Perth Rd, Dundee DD2 1NL",
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
            "description": "Located on the outskirts of Dundee, in the heart of a quiet residential area, Riverside View is a welcoming care home offering nursing and nursing memory care for those living with dementia.<br><strong>Address</strong>: 60 Clovis Duveau Dr, Dundee DD2 5JB<br><strong>Hours</strong>: Open 24 hours",
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
            "description": "A wee charity shop near The Little<br>Green Larder that sells a variety of things from books to music.<br><strong>Address</strong>: 268 Perth Rd, Dundee DD2 1AE<br><strong>Hours</strong>:<br>Mon-Sat: 9am-5pm<br>Sunday: closed",
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
              "description": "Abertay University is one of two public universities in the city of Dundee, Scotland. In 1872, Sir David Baxter, 1st Baronet of Kilmaron, left a bequest for the establishment of a mechanics' institute in Dundee and the Dundee Institute of Technology was formed in 1888.<br><strong>Address</strong>: Bell St, Dundee DD1 1HG<br><strong>Hours</strong>: Mon-Fri: 9am-5pm<br>Sat-Sun: closed",
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
              "description": "Blackness Primary School is situated in the Hawkhill area of Dundee within a fairly extensive catchment area. The pupils are actively encouraged to walk and take the bus to school, where practical and possible, to promote a healthy and envirnomentally sound attitude.(children and parents only)<br><strong>Address</strong>: 3 Pennycook Ln, Dundee DD1 4JL",
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
              "description": "Boomerang Community Centre offers the chance for people of all ages and cultures to learn, try new activities, get help and advice, improve their fitness and catch up with friends at social events.<br><strong>Address</strong>: 10 Kemback St, Dundee DD4 6ET<br><strong>Hours</strong>:<br>Mon-Sun: 9am-3pm, 5pm-9pm",
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
              "description": "They are a private facility providing flexible places for children from birth to five years and are in partnership with D.C.C. They promote all-round development and well-being of young children.(children and parents only)<br><strong>Address</strong>: Seafield Rd, Dundee DD1 4DZ<br><strong>Hours</strong>:<br>Mon-Fri: 9am-3pm",
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
              "description": "We provide a range of health and wellbeing support services in the libraries as well as out in the wider community.<br><strong>Address</strong>: Wellgate, Dundee DD1 1DB<br><strong>Hours</strong>:<br>Mon-Tues: 9am-6pm<br>Wed: 10am-6pm<br>Thurs-Fri: 9am-6pm<br>Sat: 9:30am-5pm",
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
              "description": "Roseangle House Nursery, at the heart of Dundee's West End, is a private nursery offering top quality full & part-time places for children from birth to five years.<br><strong>Address</strong>: 27 Roseangle, Dundee DD1 4LS<br><strong>Hours</strong>: Mon-Fri: 7am-6pm",
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
              "description": "Home shopping for less with Tesco. Browse in-store and online for everything from groceries and recipes to homeware, electricals, Clubcard and more.<br><strong>Address</strong>: Kingsway, Dundee DD3 8QB<br><strong>Hours</strong>: Open 24 hours",
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
              "description": "At Victoria Park Primary, they aim to provide a warm, welcoming environment for all our pupils and their families.(Children and parents only)<br><strong>Address</strong>: 1 Glenagnes Rd, Dundee DD2 2AB<br><strong>Hours</strong>: Mon-Fri: 8:45am-3:30pm",
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
              "description": "Though it was originally founded as a grocery retailer, since the 1990s Tesco has diversified its product range to include other retail areas. Alongside books, toys and furniture, Tesco clothing (branded as F+F) was one of the first areas which helped Tesco cement its place as a leading UK retailer.<br><strong>Address</strong>: Riverside Dr, Dundee DD2 1UG<br><strong>Hours</strong>: Open 24 hours",
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
              "description": "St. Paul's Cathedral is an Anglican cathedral in the city of Dundee, Scotland. It is the Cathedral and administrative centre of the Diocese of Brechin in the Scottish Episcopal Church.<br><strong>Address</strong>: High St, Dundee DD1 1TD<br><strong>Hours</strong>:<br>Mon: closed<br>Tues-Fri: 10am-4pm<br>Sat: 11am-3pm<br>Sun: 7:45am-9pm",
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
              "description": "St Luke's & Queen Street Church is a congregation of the Church of Scotland in Broughty Ferry, on the edge of Dundee, Scotland. The church building was completed in 1884 to designs by Edinburgh architect Hippolyte Blanc, and is now protected as a category A listed building.<br><strong>Address</strong>: W Queen St, Dundee DD5 1AU<br><strong>Hours</strong>:<br>Mon-Thurs: closed<br>Fri: 2pm-4pm<br>Sat: closed<br>Sun: 11am-1pm",
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
              "description": "Their school boasts a happy family atmosphere, which helps in the growth and development of the children in their first seven years of school life. If your children are happy to come to school, then learning is much easier.<br><strong>Address</strong>: 1 Glenagnes Rd, Dundee DD2 2AB<br><strong>Hours</strong>:<br>Mon-Fri: 8:45am-3:30pm",
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
              "description": "St Andrew's Parish Church is a congregation of the Church of Scotland within Dundee Presbytery. They are an active Church with a rich history.<br><strong>Address</strong>: 2-6 King St, Dundee DD1 2JB",
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
              "description": "Inspired by their Christian faith, they walk alongside disadvantaged communities to see a world free from poverty and its effects.<br><strong>Address</strong>: The Signpost Centre, Lothian Cres, Dundee DD4 0HU<br><strong>Hours</strong>:<br>Mon-Fri: 9am-5pm",
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
              "description": "The Roseangle Kitchen cafe. There's a nice local feel to this community-run cafe on Perth Road, which is also home to a gallery space and function area.<br><strong>Address</strong>: 132 Perth Rd, Dundee DD1 4JW<br><strong>Hours</strong>:<br>Mon-Fri: 10am-5pm",
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
              "description": "Lochee Library, which opened in 1896 and was the first library in Dundee, is still at the heart of the community 122 years later.<br><strong>Address</strong>: 47-49 High St, Dundee DD2 3AU<br><strong>Hours</strong>:<br>Mon: 9am-7pm<br>Tues: 9am-5:30pm<br>Wed: 10am-5:30pm<br>Thurs: 9am-1pm<br>Fri: 9am-5:30pm<br>Sat: 9am-5pm",
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
              "description": "King's Cross Hospital, often shortened to King's Cross is a hospital in Dundee, Scotland. It is managed by NHS Tayside.<br><strong>Address</strong>: Clepington Rd, Dundee DD3 8EA<br><strong>Hours</strong>:<br> Open 24 hours",
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
              "description": "Grove Academy is an 11–18 mixed secondary school in Broughty Ferry, Dundee, Scotland. It was established in 1889.<br><strong>Address</strong>: 24 Claypotts Rd, Dundee DD5 1AB",
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
              "description": "Gate Church International is a vibrant church situated on the Perth Road, Dundee near the University of Dundee campus.<br><strong>Address</strong>: Perth Rd, Dundee DD1 4JS<br><strong>Hours</strong>:<br>Mon-Fri: 9am-5pm",
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
              "description": "If you are involved with a charity, community group, or voluntary organisation, or are looking to get involved in your local community, then they offer a range of support services of interest to you.<br><strong>Address</strong>: 10 Constitution Rd, Dundee DD1 1LL<br><strong>Hours</strong>:<br>Mon-Fri: 9am-5pm",
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
              "title": "The Circle",
              "description": "The Circle is a hub for charities, social enterprises, community groups and socially aware businesses in Dundee.<br>Address: 4-6 Staffa Pl, Dundee DD2 3SX<br>Hours:<br>Mon-Sun: 9am-4:30pm",
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
              "description": "Balgillo Nurseries are devoted to providing the very highest standard of childcare and education. They have created safe and caring environments designed and equipped to enrich those important early years.<br><strong>Address</strong>: 164 Queen St, Dundee DD5 1AJ<br><strong>Hours</strong>:<br>Mon-Sun: 7:30am-6pm",
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
              "description": "They're a family church of all ages and backgrounds who love Jesus and love Dundee.<br><strong>Address</strong>: The Friary, Tullideph Rd, Dundee DD2 2PN<br><strong>Hours</strong>:<br>Mon-Fri: 10am-3pm<br>Sat: closed<br>Sun: 10:30am-12:30pm",
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
              "description": "Why not share your interest in books<br>and enhance the pleasure of reading by attending their informal monthly reading group. They read a different book each month then get together to share their views.<br><strong>Address</strong>: 225 Perth Rd, Dundee DD2 1EJ<br><strong>Hours</strong>:<br>Mon: 9am-7pm<br>Tue: 9am-5:30pm<br>Wed: 10am:-5:30pm<br>Thurs: 9am-1pm<br>Fri: 9am-5:30pm<br>Sat: 9am-1pm",
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
                "description": "Asda online shopping, find fresh groceries, George clothing & home, insurance, & more delivered to your door. Save money. Live better.<br><strong>Address</strong>: Milton of Craigie Rd S, Dundee DD4 7RX<br><strong>Hours</strong>: Open 24 hours",
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
            "description": "Thei property portfolio provides a large selection of properties across the UK ranging in both size and specification.<br><strong>Address</strong>: W Bell St, Dundee DD1 1ES",
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
            "description": "For those of you who don't know, Community Fridges are communal places where surplus food is shared, by local businesses and individuals. So far Community Fridges have helped thousands connect to their communities, access nutritious food, save money and reduce waste.<br><strong>Address</strong>: Miller's Wynd Car Park, DD1 4HY<br><strong>Hours</strong>:<br>Mon-Fri: 11am-8pm<br>Sat-Sun: 11am-4pm",
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
            "description":"The James Hutton Institute is a well-respected and globally recognised research organisation delivering fundamental and applied science to drive the sustainable use of land and natural resources.<br><strong>Address</strong>: Errol Rd, Dundee DD2 5DA<br><strong>Hours</strong>:<br>Mon-Fri:8:30am-5pm",
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
      "icon-allow-overlap": true,
    }
  });
  //When a click  event occurs on a marker on the map, a descpription of the location will pop up
map.on('click', 'points', function (e) {
var coordinates = e.features[0].geometry.coordinates.slice();
var description = e.features[0].properties.description;

// Ensure that if the map is zoomed out such that multiple
// copies of the feature are visible, the popup appears
// over the copy being pointed to.
while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
}

new mapboxgl.Popup()
.setLngLat(coordinates)
.setHTML(description)
.addTo(map);
});

// Change the cursor to a pointer when the mouse is over the places layer.
map.on('mouseenter', 'points', function () {
map.getCanvas().style.cursor = 'pointer';
});

// Change it back to a pointer when you leave marker.
map.on('mouseleave', 'points', function () {
map.getCanvas().style.cursor = '';
});
});
map.addControl(new mapboxgl.NavigationControl());
