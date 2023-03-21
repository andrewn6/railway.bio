import { Context } from "koa";
import axios from "axios";

import { stationList } from "./stations";

export default async (ctx: Context) => {
  const stationCode = (ctx.params.station || "UN") as string;
  // Validate the code
  let found = false;
  for (const service in stationList) {
    if (stationList[service].find(x => x.id === stationCode))
      found = true;
  }
  if (!found) return {error: 400, message: "Invalid station code"};

  const departures = await getDepartures(stationCode);
  return departures;
};

async function getDepartures(stationCode: string) {
  const res = await axios.get(
    `https://api.gotransit.com/Api/schedules/stops/${stationCode}/departures?Page=1&PageLimit=10`
  );
  return res.data;
}
