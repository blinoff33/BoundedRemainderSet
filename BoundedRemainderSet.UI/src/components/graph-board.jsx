/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var Drawing = require('../utils/drawing');

var GraphBoard = React.createClass({
    componentDidMount: function () {
        Drawing.initBoard(this.props.boardId);
      },
    render() {
        return (
            <div id={this.props.boardId} className="graph-board"></div>
        );
    }
});

module.exports = GraphBoard;
