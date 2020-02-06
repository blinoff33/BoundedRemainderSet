/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var axios = require('axios');
var GraphBoard = require('./graph-board');
var Control = require('./control');
var ResultTable = require('./result-table');
var AlertDanger = require('./alert-danger');
var Drawing = require('../utils/drawing');
var CONSTANTS = require('../utils/constants');
var Common = require('../utils/common');
var Displaying = require('../utils/displaying');
var Calculating = require('../utils/calculating');

var BRSet = React.createClass({
  getInitialState: function () {
    return {
      result: {
        red: {},
        green: {},
        blue: {}
      },
      errorMessage: '',
      isBusy: false
    }
  },
  init: function () {
    this.setState(this.getInitialState());
    Drawing.init();
    Calculating.init();
    Displaying.init(this.setResult, this.setBusy);
  },
  run: function (config) {
    this.init();
    this.setBusy(true);

    var b = Drawing.initBoard(CONSTANTS.GRAPH_BOARD_BRSET_ID);
    var requestUrl = Common.getRequestUrl(config);

    axios.get(requestUrl)
      .then(res => {
        var torus = res.data.Torus;
        var red = torus.RedArea;
        var green = torus.GreenArea;
        var blue = torus.BlueArea;
        var areas = [red, green, blue];
        var points = res.data.BR.Items;

        //рисуем области развертки
        Drawing.drawAreas(b, areas);
        //рисуем векторы перекладывания
        Drawing.drawVectors(b, [red.ShiftingVector, green.ShiftingVector, blue.ShiftingVector], [red.Color, green.Color, blue.Color]);
        //показываем таблицу результатов, точки и кривые отклонений
        Displaying.showResult(b, points, areas, config.delay, this.setResult, this.setBusy);
      })
      // .catch(() => {
      //    this.setState({ errorMessage: CONSTANTS.DEFAULT_ERROR_MESSAGE, isBusy: false })
      // });
  },
  setBusy: function(isBusy) {
    this.setState({ isBusy: isBusy });
  },
  setResult: function(result) {
    this.setState({ result: result });
  },
  render() {
    return (
      <div className="container br-set">
        <div className="row">
          <div className="col-sm-4">
            <Control run={this.run} isBusy={this.state.isBusy} reset={this.init}/>
          </div>
          <div className="col-sm-4">
            <GraphBoard boardId={CONSTANTS.GRAPH_BOARD_BRSET_ID} />
          </div>
          <div className="col-sm-4">
            <ResultTable result={this.state.result} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
          <GraphBoard boardId={CONSTANTS.GRAPH_BOARD_RED_DIFF_CURVE_ID}/>
          </div>
          <div className="col-sm-4">
          <GraphBoard boardId={CONSTANTS.GRAPH_BOARD_GREEN_DIFF_CURVE_ID} />
          </div>
          <div className="col-sm-4">
          <GraphBoard boardId={CONSTANTS.GRAPH_BOARD_BLUE_DIFF_CURVE_ID} />
          </div>
        </div>
        <AlertDanger message={this.state.errorMessage} />
      </div>
    );
  }
});

module.exports = BRSet;
