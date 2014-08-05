var Promise = require('es6-promise').Promise;

var data = module.exports = {};

data.fishingSpots = require('./spots.js');
data.fishingSpotsMap = {};
for (var i=0; i<data.fishingSpots.length; i++) {
    var spot = data.fishingSpots[i];
    data.fishingSpotsMap[spot.id] = spot;
}

data.getFishingSpots = function() {
    return data.fishingSpots;
};

data.getFishingSpot = function(id) {
    return data.fishingSpotsMap[id];
};