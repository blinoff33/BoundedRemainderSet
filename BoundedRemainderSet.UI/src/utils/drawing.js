var Common = require('./common');
var CONSTANTS = require('./constants');

var Drawing = {
  allBoardIDs: [
    CONSTANTS.GRAPH_BOARD_BRSET_ID,
    CONSTANTS.GRAPH_BOARD_RED_DIFF_CURVE_ID,
    CONSTANTS.GRAPH_BOARD_GREEN_DIFF_CURVE_ID,
    CONSTANTS.GRAPH_BOARD_BLUE_DIFF_CURVE_ID
  ],
  init: function () {
    for (var i = 0; i < this.allBoardIDs.length; i++) {
      this.initBoard(this.allBoardIDs[i]);
    }
  },
  initBoard: function (boardId, boundingbox) {
    boundingbox = (boundingbox) ? boundingbox : CONSTANTS.DEFAULT_BOUNDING_BOX;

    return JXG.JSXGraph.initBoard(boardId, {
      boundingbox: CONSTANTS.DEFAULT_BOUNDING_BOX, axis: true
    });
  },
  drawPoint: function (board, point) {
    var coords = Common.getCoords(point.Point);
    var color = point.Color;

    board.create('point', coords, { size: 1, name: '', color: color });
  },
  drawPoints: function (board, points) {
    for (var i = 0; i < points.length; i++) {
      Drawing.drawPoint(board, points[i]);
    }
  },
  drawArea: function (board, tops, color) {
    var points = [];
    for (var i = 0; i < tops.length; i++) {
      var coords = Common.getCoords(tops[i]);
      var p = board.create('point', coords);
      points.push(p)
    }
    board.create('polygon', points, { color: color });
  },
  drawAreas: function (b, areas) {
    for (var i = 0; i < areas.length; i++) {
      this.drawArea(b, areas[i].Tops, areas[i].Color);
    }
  },
  drawVector: function (board, vector, color) {
    var coords = Common.getCoords(vector);
    board.create('line', [[0, 0], coords], { straightFirst: false, straightLast: false, color: color });
  },
  drawVectors: function (b, vectors, colors) {
    for (var i = 0; i < vectors.length; i++) {
      this.drawVector(b, vectors[i], colors[i]);
    }
  },
  drawCurve: function (boardId, dataY, color) {
    if (!dataY) return;

    var dataX = [];

    var board = JXG.JSXGraph.initBoard(boardId, {
      boundingbox: Common.getDynamicCurveBoundingbox(dataY.length), axis: true
    })

    for (var i = 0; i < dataY.length; i++) {
      dataX.push(i);
    }

    board.create('curve', [dataX, dataY], { strokeColor: color, strokeWidth: 2 });
  }
}

module.exports = Drawing;
