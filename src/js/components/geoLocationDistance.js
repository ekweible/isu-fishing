/** @jsx React.DOM */
var React = require('react');

var GeoLocationDistance = module.exports = React.createClass({
    propTypes: {
        latitude: React.PropTypes.number,
        longitude: React.PropTypes.number
    },

    getInitialState: function() {
        return {
            supported: typeof navigator.geolocation !== 'undefined',
            distance: null,
            loading: false,
            failed: false
        };
    },

    componentWillMount: function() {
        if (localStorage['isuFishing.geo.hasPermission']) {
            this.getGeolocation();
        }
    },

    getGeolocation: function(event) {
        if (event) {
            event.stopPropagation();
            event.preventDefault();
        }

        this.setState({loading: true});
        var geoComponent = this;
        navigator.geolocation.getCurrentPosition(function(position) {
            localStorage['isuFishing.geo.hasPermission'] = true;
            geoComponent.getDistance(position);
        }, function() {
            geoComponent.setState({failed: true});
        });
    },

    getDistance: function(currentPosition) {
        var geoComponent = this;
        var origin = new google.maps.LatLng(currentPosition.coords.latitude, currentPosition.coords.longitude);
        var destination = new google.maps.LatLng(this.props.latitude, this.props.longitude);
        var service = new google.maps.DistanceMatrixService();
        service.getDistanceMatrix({
            origins: [origin],
            destinations: [destination],
            travelMode: google.maps.TravelMode.DRIVING,
            unitSystem: google.maps.UnitSystem.IMPERIAL
        }, function(response, status) {
            if (status !== google.maps.DistanceMatrixStatus.OK ||
                !response.rows.length ||
                !response.rows[0].elements.length) {
                geoComponent.setState({failed: true});
                return;
            }

            var distance = response.rows[0].elements[0].distance.text.replace(' mi', '');
            geoComponent.setState({distance: distance});
        });
    },

    render: function() {
        // distance has been calculated, so show it
        if (this.state.distance !== null) {
            return <p>{this.state.distance} miles</p>;
        }

        // geolocation not supported, don't render anything
        if (!this.state.supported) {
            return <div></div>;
        }

        // geolocation failed
        if (this.state.failed) {
            return <p>We're sorry, we couldn't determine your location.</p>
        }

        // in the process of getting position or calculating distance
        // show a loading indicator
        if (this.state.loading) {
            return <p>Loading...</p>;
        }

        // only remaining state is if we don't have permission to get geolocation yet
        // so we display a link to prompt and get it
        return <a href="#" onClick={this.getGeolocation}>Find out now.</a>;
    }
});