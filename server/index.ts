import Koa, { Context } from "koa";
import cors from "@koa/cors";
import Router from "koa-router";

import routes from "./routes";

const app = new Koa();
const router = new Router();
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  await next();
});

router.get("/", async (ctx: Context) => {
  ctx.body = await routes.home(ctx);
});
router.get("/departures/:station", async (ctx: Context) => {
  ctx.body = await routes.departures(ctx);
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8000, () => {
  console.log("Server listening on port 8000");
});
