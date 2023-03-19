import Koa, { Context } from 'koa';
import Router from 'koa-router';

const app = new Koa();
const router = new Router();

router.get('/', async (ctx: Context) => {
  ctx.body = `Welcome to the railway.wtf API, here is all the station codes. You can query them and get departure info via api.railway.wtf/departures?station=UN

  Union Station(UN)
  Lakeshore East:

  Whitby(WH)
  Ajax(AJ)
  Pickering(PI)
  Rouge Hill(RO)
  Guildwood(GU)
  Eglinton(EG)
  Scarborough(SC)
  Danforth(DA)
  Stouffville:

  Old Elm(LI)
  Stouffville(ST)
  Mount Joy(MO)
  Markham(MR)
  Centennial(CE)
  Unionville(UI)
  Milliken(MK)
  Agincourt(AG)
  Kennedy(KE)
  Richmond Hill:

  Bloomington(BL)
  Gormley(GO)
  Richmond Hill(RI)
  Langstaff(LA)
  Old Cummer(OL)
  Oriole(OR)
  Barrie:

  Allendale Waterfront(AD)
  Barrie South(BA)
  Bradford(BD)
  East Gwillimbury(EA)
  Newmarket(NE)
  Aurora(AU)
  King City(KI)
  Maple(MP)
  Rutherford(RU)
  Downsview Park(DO)
  Lakeshore West:

  Exhibition(EX)
  Mimico(MI)
  Long Branch(LO)
  Port Credit(PO)
  Clarkson(CL)
  Oakville(OA)
  Bronte(BO)
  Appleby(AP)
  Burlington(BU)
  Aldershot(AL)
  Hamilton(HA)
  West Harbour(WE)
  St.Catharines(SCTH)
  Niagara Falls(NI)

  enjoy :3
  `;
});

const getDepartures = async (stationCode: string) => {
  const res = await fetch(`https://api.gotransit.com/Api/schedules/stops/${stationCode}/departures?Page=1&PageLimit=10`);
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
