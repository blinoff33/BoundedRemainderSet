var Drawing = require('./drawing');
var Calculating = require('./calculating');
var Common = require('./common');
var CONSTANTS = require('./constants');
function setResult() { };
function setBusy() { };

var Displaying = {
    stop: false,
    init: function (delegateSetResults, delegateSetBusy) {
        this.stop = true;
        setResult = delegateSetResults;
        setBusy = delegateSetBusy;
    },
    showResult: function (b, points, areas, delay) {
        this.stop = false;

        if (delay == 0) {
            this.drawPointsAndDisplayResult(b, points, points, areas, Drawing.drawPoints);
            setBusy(false);
            this.stop = true;
            return;
        }

        Common.delayFunc((i) => {
            if (Displaying.stop) {
                return true;
            };

            this.drawPointsAndDisplayResult(b, points[i], points.slice(0, i), areas, Drawing.drawPoint);
            if (i == points.length - 1) { 
                setBusy(false); 
                this.stop = true;
            }
        }, delay, points.length);
    },
    drawPointsAndDisplayResult: function (b, pointsForDrawing, pointsForResult, areas, delegateDraw) {
        var result = Calculating.getResult(pointsForResult, areas);

        delegateDraw(b, pointsForDrawing);
        this.displayResult(result);
        this.drawDiffCurves(result.red.diffHistory, result.green.diffHistory, result.blue.diffHistory);
    },
    displayResult: function (result) {
        setResult(result);
    },
    drawDiffCurves: function (redDiffHistory, greenDiffHistory, blueDiffHistory) {
        Drawing.drawCurve(CONSTANTS.GRAPH_BOARD_RED_DIFF_CURVE_ID, redDiffHistory, 'red');
        Drawing.drawCurve(CONSTANTS.GRAPH_BOARD_GREEN_DIFF_CURVE_ID, greenDiffHistory, 'green');
        Drawing.drawCurve(CONSTANTS.GRAPH_BOARD_BLUE_DIFF_CURVE_ID, blueDiffHistory, 'blue');
    }
}

module.exports = Displaying;
