var Common = require('./common');

var Calculating = {
    diffHistory: {
    },
    init: function () {
        this.diffHistory = {
            red: [],
            green: [],
            blue: []
        };
    },
    getResult: function (points, areas) {
        var result = {};
        var areasVolumeSum = this.getAreasVolumeSum(areas);

        for (var i = 0; i < areas.length; i++) {
            result[areas[i].Color] = this.getResultForArea(areas[i], points, areasVolumeSum);
        }
        return result;
    },
    getResultForArea: function (area, points, areasVolumeSum) {
        var factCount = Common.rounded(this.getFactColorPointsCount(points, area.Color), 4);
        var planCount = Common.rounded(this.getPlanColorPointsCount(area.Volume, areasVolumeSum, points.length), 4);
        var difference = Common.rounded(planCount - factCount, 4);

        this.diffHistory[area.Color].push(difference);

        return {
            factCount: factCount,
            planCount: planCount,
            difference: difference,
            diffHistory:  this.diffHistory[area.Color]
        }
    },
    getAreasVolumeSum: function (areas) {
        var areasVolumeSum = 0;
        for (var i = 0; i < areas.length; i++) {
            areasVolumeSum += areas[i].Volume;
        };
        return areasVolumeSum;
    },
    getFactColorPointsCount: function(points, color) {
        return points.reduce(function (n, point) {
            return n + (point.Color == color);
        }, 0);
    },
    getPlanColorPointsCount: function(areaVolume, areasVolumeSum, pointsLength) {
        return areaVolume / areasVolumeSum * pointsLength;
    }

}

module.exports = Calculating;
