"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
exports.default = (ctx) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const stationCode = (ctx.params.station || "UN");
    const departures = yield getDepartures(stationCode);
    return departures;
});
function getDepartures(stationCode) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const res = yield axios_1.default.get(`https://api.gotransit.com/Api/schedules/stops/${stationCode}/departures?Page=1&PageLimit=10`);
        return res.data;
    });
}
