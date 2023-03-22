import stations from "./stations.js";

const $ = document.querySelector.bind(document);

const fetchTrainDepartures = async (station) => {
  try {
    const response = await fetch(
      `https://api.railway.wtf/departures/${station}`
    );
    const data = await response.json();
    return data.trainDepartures.items;
  } catch (error) {
    console.error(error);
  }
};
const createElement = (tag, attrs, value) => {
  // shorthand element function
  let el = document.createElement(tag);
  if (attrs)
    attrs.split(";").forEach((attr) => {
      if (!attr) return;
      let vals = attr.split("=");
      el.setAttribute(vals[0].trim(), vals[1].trim());
    });
  el.innerHTML = value || "";
  return el;
};

// Populate select
let select = $("#stationSelect");
for (const line in stations) {
  let optGroup = document.createElement("optgroup");
  optGroup.setAttribute("label", line);
  for (const station of stations[line]) {
    let opt = document.createElement("option");
    opt.innerHTML = station.name;
    opt.value = station.id;
    optGroup.append(opt);
  }
  select.append(optGroup);
}

select.oninput = async (e) => {
  await loadStation(e.target.value);
};

loadStation("UN");

async function loadStation(code) {
  const container = $("#departures");
  $("main").classList.add("loading");
  const departures = await fetchTrainDepartures(code);

  container.innerHTML = "";

  for (const [i, dep] of departures.entries()) {
    let depel = generateDeparture(dep);
    setTimeout(() => {
      $("#departures").append(depel);
    }, 100 * i);
  }

  if (!departures.length)
    container.innerHTML = "No departures for this station";
  setTimeout(() => {
    $("main").classList.remove("loading");
  }, 1000);
}

// generates a departure element imperatively 
function generateDeparture(dep) {
  const container = createElement("div", "class=train-departure"),
    left = createElement("div", "class=left"),
    right = createElement("div", "class=right"),
    service = createElement("h2", "class=location", dep.service),
    scheduled = createElement("h3", "class=scheduled", dep.scheduledTime),
    platformsText = createElement("p", null, "on platforms"),
    platforms = createElement("h3", "class=platforms", dep.platform);

  left.append(service);
  right.append(scheduled);
  if (dep.platform && dep.platform !== "-") right.append(platformsText, platforms);

  container.append(left, right);
  return container
}
