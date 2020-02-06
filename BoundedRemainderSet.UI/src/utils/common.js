var CONSTANTS = require('./constants');

var Common = {
    getRequestUrl: function (config) {
        return `${CONSTANTS.SERVICE_HOST}/${CONSTANTS.SERVICE_ROUTE}?size=${config.count}&b1=${config.b1}&b2=${config.b2}&t=${config.t}&p1=${config.p1}&p2=${config.p2}`;
    },
    getDynamicCurveBoundingbox: function (xlength) {
        return [-0.5, 1.5, xlength, -1.5];
    },
    checkIsPositiveNumber: function(value) {
        return !isNaN(+value) && value > 0;
    },
    checkIsNotNegative: function(value) {
        return !isNaN(+value) && value >= 0;
    },
    rounded: function (number, countAfterDot) {
        countAfterDot = countAfterDot ? countAfterDot : 2;
        return parseFloat(number).toFixed(countAfterDot);
    },
    getCoords: function (rawPoint) {
        var ctx = this;
        var coords = rawPoint.split(',').map(function (num) {
            return ctx.rounded(num);
        });

        return coords;
    },
    refreshPage: function () {
        window.location.reload();
    },
    delayFunc: function (func, delayInSec, stepCount) {
        if (delayInSec == 0) 
            return;

        (function loop(i) {
            setTimeout(function () {
                if (func(i)) return;
                if (++i < stepCount) loop(i);
            }, delayInSec * 1000)
        })(0);
    }
}

module.exports = Common;
