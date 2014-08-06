/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({
    componentDidMount: function() {
        $('html, body').animate({
            scrollTop: $(this.getDOMNode()).offset().top
        }, 500);
    },
    render: function() {
        return <div>DNR</div>
    }
});