/** @jsx React.DOM */
var React = require('react');

var GoogleMap = module.exports = React.createClass({
    propTypes: {
        width: React.PropTypes.string,
        height: React.PropTypes.string,
        src: React.PropTypes.string
    },

    render: function() {
        var iframeStyle = {
            border: '0'
        };
        return (
            <div>
                <iframe width={this.props.width}
                        height={this.props.height}
                        frameBorder="0"
                        style={iframeStyle}
                        src={this.props.src}></iframe>
            </div>
        );
    }
});