/** @jsx React.DOM */
var React = require('react');
var Link = require('react-router').Link;

var Header = module.exports = React.createClass({
    getInitialState: function() {
        return {
            title: 'Go Fishing',
            subtitle: 'Iowa State'
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
                                {this.state.title} <small>{this.state.subtitle}</small>
                            </Link>
                        </h1>
                    </div>

                    <div className="collapse navbar-collapse" id="navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="club">ISU Fishing Club</Link></li>
                            <li><Link to="license">Fishing License</Link></li>
                            <li><Link to="dnr">DNR</Link></li>
                            <li><Link to="explore">Locations</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
});