/** @jsx React.DOM */
var React = require('react');
var Grid = require('../components/Grid');

module.exports = React.createClass({
    componentDidMount: function() {
        $('html, body').animate({
            scrollTop: $(this.getDOMNode()).offset().top
        }, 500);
    },
    render: function() {
        return (
            <Grid>
                <h2>Fishing Licenses</h2>
                <p className="lead">
                    In order to fish in Iowa, you will need a fishing license. Fortunately, fishing licenses from
                    the Iowa DNR are fairly inexpensive.
                </p>

                <p>To purchase a fishing license online, you can <a href="https://jc.activeoutdoorsolutions.com/ia_customer/app/goHome.do">
                visit this site</a>.</p>
                <br />

                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>License</th>
                            <th>Price</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1 day</td>
                            <td>$9.50</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>7 day</td>
                            <td>$13.50</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>1 year</td>
                            <td>$19.00</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>3 year</td>
                            <td>$53.00</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Lifetime</td>
                            <td>$52.50</td>
                            <td>Must be 65 years or older</td>
                        </tr>
                    </tbody>
                </table>
            </Grid>
        );
    }
});