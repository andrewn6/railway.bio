"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const koa_1 = tslib_1.__importDefault(require("koa"));
const koa_router_1 = tslib_1.__importDefault(require("koa-router"));
const routes_1 = tslib_1.__importDefault(require("./routes"));
const app = new koa_1.default();
const router = new koa_router_1.default();
app.use((ctx, next) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    yield next();
}));
router.get("/", (ctx) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    ctx.body = yield routes_1.default.home(ctx);
    ctx.response.status = 200;
}));
router.get("/departures/:station", (ctx) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    ctx.body = yield routes_1.default.departures(ctx);
}));
app.use((ctx, next) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    console.log(`${ctx.request.method} \x1b[36m${ctx.request.url}\x1b[0m`);
    yield next();
}));
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(8080, () => {
    console.log("Server listening on port 8080");
});
