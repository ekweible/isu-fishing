/** @jsx React.DOM */
var React = require('react');
var data = require('../core/data');
var GeoLocationDistance = require('../components/geoLocationDistance.js');
var GoogleMap = require('../components/googleMap.js');
var Grid = require('../components/grid.js');
var Link = require('react-router').Link;


module.exports = React.createClass({
    getInitialState: function() {
        return {
            data: data.getFishingSpot(this.props.params.name),
            geoSupport: typeof navigator.geolocation !== 'undefined'
        }
    },
    componentDidMount: function() {
        $('html, body').animate({
            scrollTop: $(this.getDOMNode()).offset().top
        }, 500);
    },
    render: function() {
        // build list of fish
        var fishNodes = [];
        this.state.data.fish.forEach(function(fish) {
            fishNodes.push(<li className="list-group-item" key={fish}>{fish}</li>);
        });

        // build geolocation tool based on browser support
        var geolocation = '';
        if (this.state.geoSupport) {
            geolocation = (
                <div>
                    <h4>How far away is it?</h4>
                    <p>
                        <GeoLocationDistance latitude={this.state.data.latitude} longitude={this.state.data.longitude} />
                    </p>
                </div>
            );
        }

        // build amenities list
        var amenitiesNodes;
        if (this.state.data.amenities && this.state.data.amenities.length) {
            var amenities = [];
            this.state.data.amenities.forEach(function(amenity) {
                amenities.push(<li className="list-group-item" key={amenity}>{amenity}</li>);
            });
            amenitiesNodes = (
                <div>
                    <h4>What amenities are (or aren't) there?</h4>
                    <ul className="list-group">{amenities}</ul>
                </div>
            );
        } else {
            amenitiesNodes = <div></div>;
        }

        // build rules list
        var rulesNodes;
        if (this.state.data.rules && this.state.data.rules.length) {
            rulesNodes = (
                <div>
                    <h4>What rules are there?</h4>
                    <p>{this.state.data.rules}</p>
                </div>
            );
        } else {
            rulesNodes = <div></div>;
        }

        return (
            <div>
                <a name="location"></a>
                <div className="container location">
                    <div className="row">
                        <div className="col-xs-12">
                            <Link to="explore" className="back">
                                <span className="glyphicon glyphicon-chevron-left"></span> all locations
                            </Link>

                            <h2>{this.state.data.name} <small>{this.state.data.size} acres</small></h2>
                        </div>

                        <div className="col-xs-12 col-sm-3">
                            {geolocation}
                            <h4>What can I catch?</h4>
                            <ul className="list-group">
                                {fishNodes}
                            </ul>

                            {amenitiesNodes}
                        </div>

                        <div className="col-xs-12 col-sm-9">
                            {rulesNodes}
                            <h4>How do I get there?</h4>
                            <GoogleMap width="100%" height="350px" src={this.state.data.googleMap} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});