/** @jsx React.DOM */
var React = require('react');
var Grid = require('./grid.js');

var Header = module.exports = React.createClass({
    getInitialState: function() {
        return {
            title: 'Go Fishing',
            subtitle: 'at Iowa State'
        };
    },

    render: function() {
        return (
            <Grid className="header">
                <h1>{this.state.title} <small>{this.state.subtitle}</small></h1>
            </Grid>
        );
    }
});