/** @jsx React.DOM */
var React = require('react');

var Grid = module.exports = React.createClass({
    propTypes: {
        className: React.PropTypes.string
    },

    getDefaultProps: function() {
        return {
            className: ''
        };
    },

    render: function() {
        return (
            <div className={this.props.className}>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">{this.props.children}</div>
                    </div>
                </div>
            </div>
        );
    }
});