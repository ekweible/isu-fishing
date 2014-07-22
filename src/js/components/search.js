/** @jsx React.DOM */
var React = require('react');
var Typeahead = require('./typeahead.js');

var Search = module.exports = React.createClass({
    render: function() {
        return (
            <div className="search input-group input-group-lg">
                <Typeahead />
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button">
                        <span className="glyphicon glyphicon-search"></span>
                    </button>
                </span>
            </div>
        );
    }
});