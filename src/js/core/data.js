var Promise = require('es6-promise').Promise;

var data = module.exports = {};

data.fishingSpotsPromise = null;

data.getFishingSpots = function() {
    return Promise.resolve([
        {
            "name": "Ada Hayden Heritage Park Lake",
            "shortName": "Ada Hayden",
            "location": "North side of Ames, West of Grand",
            "fish": [
                "Black crappie",
                "Bluegill",
                "Channel catfish",
                "Largemouth bass",
                "Rainbow trout",
                "Striped bass"
            ],
            "size": 137,
            "rules": [
                "No gas motors"
            ],
            "googleMap": "https://www.google.com/maps/embed/v1/view?zoom=15&center=42.0643%2C-93.6281&key=AIzaSyBmbNEYy7WMYE7bI32OfrDOTT8xhXHzhFA"
        },
        {
            "name": "Big Creek Lake",
            "shortName": "Big Creek Lake",
            "location": "2 miles north of Polk City",
            "fish": [
                "Black crappie",
                "Bluegill",
                "Channel catfish",
                "Largemouth bass",
                "Muskellunge",
                "Smallmouth bass",
                "Walleye",
                "White crappie",
                "White sucker"
            ],
            "size": 814,
            "googleMap": "https://www.google.com/maps/embed/v1/view?zoom=13&center=41.8118%2C-93.7410&key=AIzaSyBmbNEYy7WMYE7bI32OfrDOTT8xhXHzhFA"
        },
        {
            "name": "Cambridge Pond",
            "shortName": "Cambridge Pond",
            "location": "2 miles north of Cambridge",
            "fish": [
                "Black crappie",
                "Bluegill",
                "Channel catfish",
                "Largemouth bass"
            ],
            "size": 2,
            "googleMap": "https://www.google.com/maps/embed/v1/view?zoom=14&center=41.8983%2C-93.5291&key=AIzaSyBmbNEYy7WMYE7bI32OfrDOTT8xhXHzhFA"
        },
        {
            "name": "Hickory Grove Lake",
            "shortName": "Hickory Grove",
            "location": "3 miles southwest of Colo",
            "fish": [
                "Black crappie",
                "Bluegill",
                "Channel catfish",
                "Largemouth bass"
            ],
            "size": 100,
            "googleMap": "https://www.google.com/maps/embed/v1/view?zoom=15&center=41.9881%2C-93.3568&key=AIzaSyBmbNEYy7WMYE7bI32OfrDOTT8xhXHzhFA"
        },
        {
            "name": "Little Wall Lake",
            "shortName": "Little Wall Lake",
            "location": "1.5 miles south of Jewell",
            "fish": [
                "Black crappie",
                "Channel catfish",
                "Largemouth bass",
                "Yellow perch"
            ],
            "size": 249,
            "googleMap": "https://www.google.com/maps/embed/v1/view?zoom=15&center=42.2686%2C-93.6382&key=AIzaSyBmbNEYy7WMYE7bI32OfrDOTT8xhXHzhFA"
        },
        {
            "name": "McFarland Pond",
            "shortName": "McFarland Pond",
            "location": "4 miles northeast of Ames",
            "fish": [
                "Bluegill",
                "Largemouth bass"
            ],
            "size": 8,
            "googleMap": "https://www.google.com/maps/embed/v1/view?zoom=16&center=42.0957%2C-93.5699&key=AIzaSyBmbNEYy7WMYE7bI32OfrDOTT8xhXHzhFA",
        },
        {
            "name": "Moore Memorial Park Pond",
            "shortName": "Moore Park",
            "location": "Northwest Ames",
            "fish": [
                "Bluegill",
                "Common carp",
                "Largemouth bass"
            ],
            "size": 1,
            "googleMap": "https://www.google.com/maps/embed/v1/view?zoom=16&center=42.0438%2C-93.6509&key=AIzaSyBmbNEYy7WMYE7bI32OfrDOTT8xhXHzhFA"
        },
        {
            "name": "Petersons Pit",
            "shortName": "Petersons Pit",
            "location": "4 miles northeast of Ames",
            "fish": [
                "Black crappie",
                "Bluegill",
                "Channel catfish",
                "Gizzard shad",
                "Largemouth bass",
                "White crappie"
            ],
            "size": 33,
            "googleMap": "https://www.google.com/maps/embed/v1/view?zoom=16&center=42.0857%2C-93.5958&key=AIzaSyBmbNEYy7WMYE7bI32OfrDOTT8xhXHzhFA"
        },
        {
            "name": "South Skunk River",
            "shortName": "South Skunk River",
            "location": "Story City to Cambridge",
            "fish": [
                "Bluegill",
                "Common carp",
                "Crappie",
                "Largemouth bass",
                "Smallmouth bass"
            ],
            "size": 30,
            "googleMap": "https://www.google.com/maps/embed/v1/view?zoom=16&center=42.0369%2C-93.6010&key=AIzaSyBmbNEYy7WMYE7bI32OfrDOTT8xhXHzhFA"
        }
    ]);


//    return $.ajax('/data/spots.json');

//    var promise;
//    if (data.fishingSpotsPromise != null) {
//        promise = data.fishingSpotsPromise;
//    } else {
//        data.fishingSpotsPromise = promise = Promise.resolve($.ajax('/data/spots.json'));
//    }
//    $.ajax('/data/spots.json').then(function(d) {
//        console.log(d);
//    });
//    promise.then(function(d) {
//        console.log(d);
//    });
//    return promise;
};