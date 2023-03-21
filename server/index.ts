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
  ctx.response.status = 200;
});
router.get("/departures/:station", async (ctx: Context) => {
  let departures = await routes.departures(ctx);
  if (departures.error) {
    ctx.status = departures.error;
    ctx.body = departures.message;
  } else ctx.body = departures;
});

router.get("/stations", async (ctx: Context) => {
  ctx.body = await routes.stations(ctx);
});

app.use(async (ctx, next) => {
  console.log(`${ctx.request.method} \x1b[36m${ctx.request.url}\x1b[0m`);
  await next()
})

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
