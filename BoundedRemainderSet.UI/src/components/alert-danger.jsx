/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

var AlertDanger = React.createClass({
    render() {
        return (<div>
                {this.props.message.length > 0 && <div className="alert alert-danger show" role="alert">
                    {this.props.message}
                </div>
                }
            </div>
        );
    }
});

module.exports = AlertDanger;
