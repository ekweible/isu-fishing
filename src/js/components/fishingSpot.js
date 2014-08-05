/** @jsx React.DOM */
var React = require('react');
var Link = require('react-router').Link;
var GoogleMap = require('./googleMap.js');

var FishingSpot = module.exports = React.createClass({
    propTypes: {
        data: React.PropTypes.object
    },

    render: function() {
        var pictureStyle = {
            backgroundImage: 'url(' + this.props.data.image + ')'
        };
        return (
            <div className="fishing-spot col-md-4 col-sm-6 col-xs-12">
                <Link to="location" name={this.props.data.id}>
                    <h3>{this.props.data.shortName} <small>{this.props.data.size} acres</small></h3>
                    <p>{this.props.data.location}</p>
                    <p>{this.props.data.fish.length} types of fish</p>
                    <div className="picture" style={pictureStyle}></div>
                </Link>
            </div>
        );
    }
});