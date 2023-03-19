import Koa, { Context } from "koa";
import cors from "@koa/cors";
import Router from "koa-router";
import fs from "fs";
const app = new Koa();
const router = new Router();

router.get("/", async (ctx: Context) => {
  ctx.body = fs.readFileSync("./welcome.html", {encoding:"utf-8"});
});

const getDepartures = async (stationCode: string) => {
  const res = await fetch(
    `https://api.gotransit.com/Api/schedules/stops/${stationCode}/departures?Page=1&PageLimit=10`
  );
  const departures = await res.json();
  return departures;
};

router.get("/v1/departures/:station", async (ctx: Context) => {
  const stationCode = (ctx.params.station || "UN") as string;
  const departures = await getDepartures(stationCode);
  ctx.body = departures;
});

app.use(router.routes());
app.use(router.allowedMethods());
app.use(cors({
  origin: "localhost:8000"
}));
app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
