/** @jsx React.DOM */
window.React = require('react');
var FishingApp = require('./components/fishingApp.js');

React.renderComponent(
    <FishingApp />,
    document.getElementById('app')
);