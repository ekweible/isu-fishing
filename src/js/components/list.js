/** @jsx React.DOM */
var React = require('react');
var data = require('../core/data.js');
var FishingSpot = require('./fishingSpot.js');
var Grid = require('./grid.js');

var List = module.exports = React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount: function() {
        var component = this;
        data.getFishingSpots().then(function(fishingSpots) {
            component.setState({data: fishingSpots});
        });
    },
    render: function() {
        var fishingSpotNodes = this.state.data.map(function(spot) {
            return <FishingSpot data={spot} key={spot.name} />
        });
        return (
            <div>
                <a name="fishing-spots"></a>
                <Grid className="fishing-spots">
                    {fishingSpotNodes}
                </Grid>
            </div>
        );
    }
});