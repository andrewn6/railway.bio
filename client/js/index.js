const $ = document.querySelector.bind(document);

const { trainDepartures } = { "stationCode": "UN", "allDepartures": { "items": [{ "lineCode": "21", "tripNumber": "21745", "service": "Milton", "transitType": 0, "transitTypeName": "B", "scheduledTime": "20:10", "scheduledDateTime": "2023-03-14T20:10:00", "platform": "", "scheduledPlatform": "", "stopsDisplay": "21H - Square One", "info": null }, { "lineCode": null, "tripNumber": "1033", "service": "Lakeshore West", "transitType": 1, "transitTypeName": "T", "scheduledTime": "20:13", "scheduledDateTime": "2023-03-14T20:13:00", "platform": "5 & 6", "scheduledPlatform": null, "stopsDisplay": "Exhibition-Mimico-Long Branch", "info": "Proceed / Avancez - Train" }, { "lineCode": null, "tripNumber": "7432", "service": "Stouffville", "transitType": 1, "transitTypeName": "T", "scheduledTime": "20:13", "scheduledDateTime": "2023-03-14T20:13:00", "platform": "7 & 8", "scheduledPlatform": null, "stopsDisplay": "Kennedy-Agincourt-Milliken", "info": "Proceed / Avancez - Train" }, { "lineCode": "16", "tripNumber": "16761", "service": "Hamilton / Toronto Express", "transitType": 0, "transitTypeName": "B", "scheduledTime": "20:30", "scheduledDateTime": "2023-03-14T20:30:00", "platform": "", "scheduledPlatform": "", "stopsDisplay": "16  - Hamilton GO", "info": null }, { "lineCode": "21", "tripNumber": "21761", "service": "Milton", "transitType": 0, "transitTypeName": "B", "scheduledTime": "20:30", "scheduledDateTime": "2023-03-14T20:30:00", "platform": "", "scheduledPlatform": "", "stopsDisplay": "21B - Milton GO", "info": null }, { "lineCode": null, "tripNumber": "3533", "service": "Kitchener", "transitType": 1, "transitTypeName": "T", "scheduledTime": "20:34", "scheduledDateTime": "2023-03-14T20:34:00", "platform": "-", "scheduledPlatform": null, "stopsDisplay": "Bloor-Weston-Etobicoke North", "info": "Wait / Attendez - Train" }, { "lineCode": "21", "tripNumber": "21763", "service": "Milton", "transitType": 0, "transitTypeName": "B", "scheduledTime": "20:35", "scheduledDateTime": "2023-03-14T20:35:00", "platform": "", "scheduledPlatform": "", "stopsDisplay": "21D - Lisgar GO", "info": null }, { "lineCode": null, "tripNumber": "9232", "service": "Lakeshore East", "transitType": 1, "transitTypeName": "T", "scheduledTime": "20:36", "scheduledDateTime": "2023-03-14T20:36:00", "platform": "-", "scheduledPlatform": null, "stopsDisplay": "Danforth-Scarborough-Eglinton", "info": "Wait / Attendez - Train" }, { "lineCode": "21", "tripNumber": "21765", "service": "Milton", "transitType": 0, "transitTypeName": "B", "scheduledTime": "20:40", "scheduledDateTime": "2023-03-14T20:40:00", "platform": "", "scheduledPlatform": "", "stopsDisplay": "21H - Square One", "info": null }, { "lineCode": null, "tripNumber": "1733", "service": "Lakeshore West", "transitType": 1, "transitTypeName": "T", "scheduledTime": "20:43", "scheduledDateTime": "2023-03-14T20:43:00", "platform": "-", "scheduledPlatform": null, "stopsDisplay": "Exhibition-Mimico-Long Branch", "info": "Wait / Attendez - Train" }], "page": 1, "pageSize": 10, "totalItemCount": 39 }, "trainDepartures": { "items": [{ "lineCode": null, "tripNumber": "1033", "service": "Lakeshore West", "transitType": 1, "transitTypeName": "T", "scheduledTime": "20:13", "scheduledDateTime": "2023-03-14T20:13:00", "platform": "5 & 6", "scheduledPlatform": null, "stopsDisplay": "Exhibition-Mimico-Long Branch", "info": "Proceed / Avancez - Train" }, { "lineCode": null, "tripNumber": "7432", "service": "Stouffville", "transitType": 1, "transitTypeName": "T", "scheduledTime": "20:13", "scheduledDateTime": "2023-03-14T20:13:00", "platform": "7 & 8", "scheduledPlatform": null, "stopsDisplay": "Kennedy-Agincourt-Milliken", "info": "Proceed / Avancez - Train" }, { "lineCode": null, "tripNumber": "3533", "service": "Kitchener", "transitType": 1, "transitTypeName": "T", "scheduledTime": "20:34", "scheduledDateTime": "2023-03-14T20:34:00", "platform": "-", "scheduledPlatform": null, "stopsDisplay": "Bloor-Weston-Etobicoke North", "info": "Wait / Attendez - Train" }, { "lineCode": null, "tripNumber": "9232", "service": "Lakeshore East", "transitType": 1, "transitTypeName": "T", "scheduledTime": "20:36", "scheduledDateTime": "2023-03-14T20:36:00", "platform": "-", "scheduledPlatform": null, "stopsDisplay": "Danforth-Scarborough-Eglinton", "info": "Wait / Attendez - Train" }, { "lineCode": null, "tripNumber": "1733", "service": "Lakeshore West", "transitType": 1, "transitTypeName": "T", "scheduledTime": "20:43", "scheduledDateTime": "2023-03-14T20:43:00", "platform": "-", "scheduledPlatform": null, "stopsDisplay": "Exhibition-Mimico-Long Branch", "info": "Wait / Attendez - Train" }, { "lineCode": null, "tripNumber": "6333", "service": "Barrie", "transitType": 1, "transitTypeName": "T", "scheduledTime": "20:53", "scheduledDateTime": "2023-03-14T20:53:00", "platform": "-", "scheduledPlatform": null, "stopsDisplay": "DownsviewPark-Rutherford-Maple", "info": "Wait / Attendez - Train" }, { "lineCode": null, "tripNumber": "9034", "service": "Lakeshore East", "transitType": 1, "transitTypeName": "T", "scheduledTime": "21:06", "scheduledDateTime": "2023-03-14T21:06:00", "platform": "-", "scheduledPlatform": null, "stopsDisplay": "Danforth-Scarborough-Eglinton", "info": "Wait / Attendez - Train" }, { "lineCode": null, "tripNumber": "1035", "service": "Lakeshore West", "transitType": 1, "transitTypeName": "T", "scheduledTime": "21:13", "scheduledDateTime": "2023-03-14T21:13:00", "platform": "-", "scheduledPlatform": null, "stopsDisplay": "Exhibition-Mimico-Long Branch", "info": "Wait / Attendez - Train" }, { "lineCode": null, "tripNumber": "7434", "service": "Stouffville", "transitType": 1, "transitTypeName": "T", "scheduledTime": "21:13", "scheduledDateTime": "2023-03-14T21:13:00", "platform": "-", "scheduledPlatform": null, "stopsDisplay": "Kennedy-Agincourt-Milliken", "info": "Wait / Attendez - Train" }, { "lineCode": null, "tripNumber": "3935", "service": "Kitchener", "transitType": 1, "transitTypeName": "T", "scheduledTime": "21:34", "scheduledDateTime": "2023-03-14T21:34:00", "platform": "-", "scheduledPlatform": null, "stopsDisplay": "Bloor-Weston-Etobicoke North", "info": "Wait / Attendez - Train" }], "page": 1, "pageSize": 10, "totalItemCount": 26 }, "busDepartures": { "items": [{ "lineCode": "21", "tripNumber": "21745", "service": "Milton", "transitType": 0, "transitTypeName": "B", "scheduledTime": "20:10", "scheduledDateTime": "2023-03-14T20:10:00", "platform": "", "scheduledPlatform": "", "stopsDisplay": "21H - Square One", "info": null }, { "lineCode": "16", "tripNumber": "16761", "service": "Hamilton / Toronto Express", "transitType": 0, "transitTypeName": "B", "scheduledTime": "20:30", "scheduledDateTime": "2023-03-14T20:30:00", "platform": "", "scheduledPlatform": "", "stopsDisplay": "16  - Hamilton GO", "info": null }, { "lineCode": "21", "tripNumber": "21761", "service": "Milton", "transitType": 0, "transitTypeName": "B", "scheduledTime": "20:30", "scheduledDateTime": "2023-03-14T20:30:00", "platform": "", "scheduledPlatform": "", "stopsDisplay": "21B - Milton GO", "info": null }, { "lineCode": "21", "tripNumber": "21763", "service": "Milton", "transitType": 0, "transitTypeName": "B", "scheduledTime": "20:35", "scheduledDateTime": "2023-03-14T20:35:00", "platform": "", "scheduledPlatform": "", "stopsDisplay": "21D - Lisgar GO", "info": null }, { "lineCode": "21", "tripNumber": "21765", "service": "Milton", "transitType": 0, "transitTypeName": "B", "scheduledTime": "20:40", "scheduledDateTime": "2023-03-14T20:40:00", "platform": "", "scheduledPlatform": "", "stopsDisplay": "21H - Square One", "info": null }, { "lineCode": "61", "tripNumber": "61771", "service": "Richmond Hill", "transitType": 0, "transitTypeName": "B", "scheduledTime": "20:45", "scheduledDateTime": "2023-03-14T20:45:00", "platform": "", "scheduledPlatform": "", "stopsDisplay": "61 - Bloomington GO", "info": null }, { "lineCode": "21", "tripNumber": "21781", "service": "Milton", "transitType": 0, "transitTypeName": "B", "scheduledTime": "21:00", "scheduledDateTime": "2023-03-14T21:00:00", "platform": "", "scheduledPlatform": "", "stopsDisplay": "21B - Milton GO", "info": null }, { "lineCode": "21", "tripNumber": "21783", "service": "Milton", "transitType": 0, "transitTypeName": "B", "scheduledTime": "21:05", "scheduledDateTime": "2023-03-14T21:05:00", "platform": "", "scheduledPlatform": "", "stopsDisplay": "21D - Lisgar GO", "info": null }, { "lineCode": "21", "tripNumber": "21785", "service": "Milton", "transitType": 0, "transitTypeName": "B", "scheduledTime": "21:10", "scheduledDateTime": "2023-03-14T21:10:00", "platform": "", "scheduledPlatform": "", "stopsDisplay": "21H - Square One", "info": null }, { "lineCode": "16", "tripNumber": "16801", "service": "Hamilton / Toronto Express", "transitType": 0, "transitTypeName": "B", "scheduledTime": "21:30", "scheduledDateTime": "2023-03-14T21:30:00", "platform": "", "scheduledPlatform": "", "stopsDisplay": "16  - Hamilton GO", "info": null }], "page": 1, "pageSize": 10, "totalItemCount": 13 } }

const stations = {
  "Union": [{ "name": "Union Station", "id": "UN" }],
  // Lakeshore east
  "Lakeshore East": [
    { "name": "Whitby", "id": "WH" },
    { "name": "Ajax", "id": "AJ" },
    { "name": "Pickering", "id": "PI" },
    { "name": "Rouge Hill", "id": "RO" },
    { "name": "Guildwood", "id": "GU" },
    { "name": "Eglinton", "id": "EG" },
    { "name": "Scarborough", "id": "SC" },
    { "name": "Danforth", "id": "DA" },
  ],
  // Stouffville Line
  "Stouffville": [
    { "name": "Old Elm", "id": "LI" },
    { "name": "Stouffville", "id": "ST" },
    { "name": "Mount Joy", "id": "MO" },
    { "name": "Markham", "id": "MR" },
    { "name": "Centennial", "id": "CE" },
    { name: "Unionville", "id": "UI" },
    { name: "Milliken", id: "MK" },
    { "name": "Agincourt", "id": "AG" },
    { name: "Kennedy", id: "KE" }
  ],
  "Richmond Hill": [
    { name: "Bloomington", id: "BL" },
    { name: "Gormley", id: "GO" },
    { name: "Richmond Hill", id: "RI" },
    { name: "Langstaff", id: "LA" },
    { name: "Old Cummer", id: "OL" },
    { name: "Oriole", id: "OR" }
  ],
  // Barrie Line
  "Barrie": [
    { name: "Allendale Waterfront", id: "AD" },
    { name: "Barrie South", id: "BA" },
    { name: "Bradford", id: "BD" },
    { name: "East Gwillimbury", id: "EA" },
    { name: "Newmarket", id: "NE" },
    { name: "Aurora", id: "AU" },
    { name: "King City", id: "KI" },
    { name: "Maple", id: "MP" },
    { name: "Rutherford", id: "RU" },
    { name: "Downsview Park", id: "DO" }
  ],
  // Lakeshore West
  "Lakeshore West": [
    { name: "Exhibition", id: "EX" },
    { name: "Mimico", id: "MI" },
    { name: "Long Branch", id: "LO" },
    { name: "Port Credit", id: "PO" },
    { name: "Clarkson", id: "CL" },
    { name: "Oakville", id: "OA" },
    { name: "Bronte", id: "BO" },
    { name: "Appleby", id: "AP" },
    { name: "Burlington", id: "BU" },
    { name: "Aldershot", id: "AL" },
    { name: "Hamilton", id: "HA" },
    { name: "West Harbour", id: "WE" },
    { name: "St. Catharines", id: "SCTH" },
    { name: "Niagara Falls", id: "NI" }
  ],
}


const fetchTrainDepartures = async () => {
  try {
    const response = await fetch(`https://api.railway.wtf/departures`);
    const data = await response.json();
    return data.trainDepartures.items;
  } catch (error) {
    console.error(error);
  }
}

// Populate select
let select = $("#stationSelect");
for (const line in stations) {
  let optGroup = document.createElement("optgroup");
  optGroup.setAttribute("label", line);
  for (const station of stations[line]) {
    let opt = document.createElement("option");
    opt.innerHTML = station.name;
    opt.value = station.id;
    optGroup.append(opt)
  }
  select.append(optGroup)
}


customElements.define(
  "train-departure",
  class extends HTMLElement {
    constructor() {
      super();
      const template = $("#departure-template").content;
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.cloneNode(true));
    }
  }
);

for (const dep of trainDepartures.items) {
  const depel = document.createElement("train-departure");
  depel.innerHTML = `<span slot="location">${dep.service}</span><span slot="scheduled">${dep.scheduledTime}</span><span slot="platforms">${dep.platform}</span>`
  $("#departures").append(depel);
}

const stationSelect = document.getElementById("stationSelect");
const departuresDiv = document.getElementById("departures");

stationSelect.addEventListener("change", getDepartures);

async function getDepartures() {
  const stationCode = stationSelect.value;
  const departures = await fetchDepartures(stationCode);
  renderDepartures(departures);
}

function renderDepartures(departures) {
  departuresDiv.innerHTML = "";
  departures.forEach((departure) => {
    const template = document.getElementById("departure-template");
    const clone = template.content.cloneNode(true);
    const locationEl = clone.querySelector(".service slot[name='location']");
    const scheduledEl = clone.querySelector(".scheduled slot[name='scheduled']");
    const platformsEl = clone.querySelector(".platforms slot[name='platforms']");
    const { service, scheduled, platforms } = departure;
    locationEl.textContent = service;
    scheduledEl.textContent = scheduled;
    platformsEl.textContent = platforms;
    departuresDiv.appendChild(clone);
  });
}

async function fetchDepartures(stationCode) {
  const apiUrl = `https://nationalrail.co.uk/service/ldb/liveTrainsJson?departing=true&liveDepartureBoard.rows=10&liveDepartureBoard.station=${stationCode}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  const departures = data.trainServices.map((service) => ({
    service: service.serviceLocation[0].locationName,
    scheduled: service.std,
    platforms: service.platform || "TBD",
  }));
  return departures;
}
