/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var BRSet = require('./components/br-set');

// Export React so the dev tools can find it
(window !== window.top ? window.top : window).React = React;

React.renderComponent(
    <BRSet />,
  document.body
);

