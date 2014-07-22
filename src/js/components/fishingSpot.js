/** @jsx React.DOM */
var React = require('react');
var GoogleMap = require('./googleMap.js');

var FishingSpot = module.exports = React.createClass({
    propTypes: {
        data: React.PropTypes.object
    },

    render: function() {
        console.log('fishing spot');
        return (
            <div className="fishing-spot col-md-4 col-xs-12">
                <a href="#">
                    <h3>{this.props.data.shortName} <small>{this.props.data.size} acres</small></h3>
                    <p>{this.props.data.location}</p>
                    <p>{this.props.data.fish.length} types of fish</p>
                    <GoogleMap width="100%" height="200px" src={this.props.data.googleMap} />
                </a>
            </div>
        );
    }
});