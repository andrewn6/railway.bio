import { Context } from "koa";

export default async (ctx: Context) => {
  const stationCode = (ctx.params.station || "UN") as string;
  const departures = await getDepartures(stationCode);
  return departures;
};

async function getDepartures(stationCode: string) {
  const res = await fetch(
    `https://api.gotransit.com/Api/schedules/stops/${stationCode}/departures?Page=1&PageLimit=10`
  );
  const departures = await res.json();
  return departures;
}
