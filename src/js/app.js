/** @jsx React.DOM */
window.React = require('react');

var Routes = require('react-router').Routes;
var Route = require('react-router').Route;

var FishingApp = require('./components/fishingApp.js');
var Explore = require('./views/explore.js');
var Club = require('./views/club.js');
var License = require('./views/license.js');
var DNR = require('./views/dnr.js');
var Location = require('./views/location.js');

React.renderComponent(
    (<Routes>
        <Route handler={FishingApp}>
            <Route name="explore" handler={Explore} />
            <Route name="club" handler={Club} />
            <Route name="license" handler={License} />
            <Route name="dnr" handler={DNR} />
            <Route name="location" path="/location/:name" handler={Location} />
        </Route>
    </Routes>),
    document.getElementById('app')
);