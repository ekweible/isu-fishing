/** @jsx React.DOM */
var React = require('react');
var Grid = require('./grid.js');
var Search = require('./search.js');

var Main = module.exports = React.createClass({
    render: function() {
        return (
            <div className="fishing">
                <div className="overlay"></div>
                <Grid>
                    <div className="content">
                        <p className="lead overlay-text">Find your next fishing spot</p>
                        <Search />
                        <p className="view-all overlay-text">
                            or, <a href="#fishing-spots">explore all of the fishing spots
                            <span className="down glyphicon glyphicon-chevron-down"></span></a>
                        </p>
                    </div>
                </Grid>
            </div>
        );
    }
});