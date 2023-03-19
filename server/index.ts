import Koa, { Context } from 'koa';
import Router from 'koa-router';

const app = new Koa();
const router = new Router();

router.get('/', async (ctx: Context) => {
  ctx.body = 'Hello Koa';
});

const getDepartures = async (stationCode: string) => {
  const res = await fetch(`https://api.gotransit.com/Api/schedules/stops/UN/departures?Page=1&PageLimit=10`);
  const departures = await res.json();
  return departures;
};

router.get('/departures', async (ctx: Context) => {
  const stationCode = ctx.query.station as string;
  const departures = await getDepartures(stationCode);
  ctx.body = departures;
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});
