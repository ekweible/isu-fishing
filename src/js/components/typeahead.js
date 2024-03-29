/** @jsx React.DOM */
var React = require('react');
var Promise = require('es6-promise').Promise;
var data = require('../core/data.js');
var Router = require('react-router');

var Typeahead = module.exports = React.createClass({
    getInitialState: function() {
        return {};
    },
    componentWillMount: function() {
        this.state.engineReady = new Promise(function(resolve) {
            var engine = new Bloodhound({
                name: 'fishing-spots',
                local: data.getFishingSpots(),
                datumTokenizer: function(datum) {
                    var tokens = [];
                    datum.fish.forEach(function(fish) {
                        tokens = tokens.concat(fish.toLowerCase().split(' '));
                    });
                    tokens = tokens.concat(datum.name.toLowerCase().split(' ').map(function(token) {
                        return token.trim().toLowerCase();
                    }));
                    return tokens;
                },
                queryTokenizer: function(query) {
                    return query.split(' ').map(function(token) {
                        return token.trim().toLowerCase();
                    });
                }
            });
            engine.initialize();
            resolve(engine);
        });
    },
    componentDidMount: function() {
        var typeahead = this;
        this.state.engineReady.then(function(engine) {
            var $typeahead = $(typeahead.getDOMNode());
            $typeahead.typeahead({
                minLength: 0,
                highlight: false
            }, {
                name: 'fishing-spots',
                source: engine.ttAdapter(),
                displayKey: 'name',
                templates: {
                    empty: function() {
                        return '' +
                            '<p class="empty">' +
                                '<em>We couldn\'t find any fishing spots matching those terms.</em><br>' +
                                '<span class="suggestions">' +
                                    '<strong>Try one of these:</strong> ' +
                                    '<a href="#" class="empty-suggestion">bluegill</a>' +
                                    '<a href="#" class="empty-suggestion">crappie</a>' +
                                    '<a href="#" class="empty-suggestion">Moore Park</a>' +
                                '</span>' +
                            '</p>';
                    },
                    footer: function() {
                        return '';
                    },
                    header: function() {
                        return '';
                    },
                    suggestion: function(fishingSpot) {
                        return '' +
                            '<p>' +
                                '<span class="name">' + fishingSpot.name + '</span>' +
                                '<span class="size">' + fishingSpot.size + ' acres</span>' +
                            '</p>';
                    }
                }
            });
            $typeahead.parents('.twitter-typeahead').children().unwrap();
            $typeahead.parents('.search').addClass('twitter-typeahead');
            $typeahead.parents('.search').find('.tt-dataset-fishing-spots').on('click', '.empty a', function(event) {
                event.preventDefault();
                event.stopPropagation();
                $typeahead.typeahead('val', $(this).text());
            });

            // listen for selected event
            $typeahead.on('typeahead:selected', function(event, datum) {
                Router.transitionTo('location', {name: datum.id});
            });

//            // open search results when search icon is clicked
//            $typeahead.siblings('.input-group-btn').find('.btn').on('click', function() {
//                $typeahead.typeahead('open');
//            });
        });
    },
    render: function() {
        return <input type="text" id="search" className="form-control" placeholder="Search by fish or location" />;
    }
});