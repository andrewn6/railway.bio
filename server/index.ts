import Koa, { Context } from "koa";
import cors from "@koa/cors";
import Router from "koa-router";

import routes from "./routes";

const app = new Koa();
const router = new Router();

router.get("/", async (ctx: Context) => {
  ctx.body = await routes.home(ctx);
});
router.get("/departures/:station", async (ctx: Context) => {
  ctx.body = await routes.departures(ctx);
});

app.use(router.routes());
app.use(router.allowedMethods());
app.use(
  cors({
    origin: "localhost:8000",
  })
);
app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
