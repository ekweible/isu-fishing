/** @jsx React.DOM */
var React = require('react');
var Link = require('react-router').Link;

var Header = module.exports = React.createClass({
    getInitialState: function() {
        return {
            title: 'Go Fishing',
            subtitle: 'Iowa State',
            subtitleMin: 'ISU'
        };
    },

    render: function() {
        return (
            <nav className="navbar navbar-default header" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <h1>
                            <Link to="/" className="navbar-brand">
                                {this.state.title}
                                <small>
                                    <span className="hidden-xs">{this.state.subtitle}</span>
                                    <span className="visible-xs-inline">{this.state.subtitleMin}</span>
                                </small>
                            </Link>
                        </h1>
                    </div>

                    <div className="collapse navbar-collapse" id="navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="https://sodb-stuorg.sws.iastate.edu/view.php?id=1057" target="_blank">ISU Fishing Club</a></li>
                            <li><Link to="license">Fishing License</Link></li>
                            <li><a href="http://www.iowadnr.gov/" target="_blank">DNR</a></li>
                            <li><Link to="explore">Locations</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
});