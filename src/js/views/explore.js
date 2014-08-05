/** @jsx React.DOM */
var React = require('react');
var data = require('../core/data.js');
var FishingSpot = require('../components/fishingSpot.js');
var Grid = require('../components/grid.js');

var List = module.exports = React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    componentWillMount: function() {
        this.setState({data: data.getFishingSpots()});
    },
    componentDidMount: function() {
        $('html, body').animate({
            scrollTop: $(this.getDOMNode()).offset().top
        }, 500);
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