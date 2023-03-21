"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const promises_1 = tslib_1.__importDefault(require("fs/promises"));
const path_1 = tslib_1.__importDefault(require("path"));
exports.default = (ctx) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        let html = yield promises_1.default.readFile(path_1.default.join(process.cwd(), "./routes/home/home.html"), {
            encoding: "utf-8",
        });
        return html;
    }
    catch (e) {
        console.error(e);
        return "Internal Server Error";
    }
});
