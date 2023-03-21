/// <reference types="koa" />
import stations from "./stations";
declare const _default: {
    departures: (ctx: import("koa").Context) => Promise<any>;
    home: (ctx: import("koa").Context) => Promise<string>;
    stations: typeof stations;
};
export default _default;
