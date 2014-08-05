/** @jsx React.DOM */
var React = require('react');
var Header = require('./header.js');
var Main = require('./main.js');

var FishingApp = module.exports = React.createClass({
    render: function() {
        return (
            <div>
                <Header />
                <Main />
                {this.props.activeRouteHandler()}
            </div>
        );
    }
});