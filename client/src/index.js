import stations from "./stations.js";
import { Animator } from "./Animator.js";
import { createElement } from "./utils.js";

const $ = document.querySelector.bind(document);

const fetchTrainDepartures = async (station) => {
  setLoading(true);
  try {
    const response = await fetch(`https://api.railway.wtf/departures/${station}`);
    const data = await response.json();
    setLoading(false);
    return data;
  } catch (error) {
    $(".loader").classList.add("error");
    console.error(error);
    setLoading(false);
  }
};

function setLoading(isLoading) {
  if (isLoading) {
    document.body.classList.add("loading");
    $("#stationSelect").disabled = true;
  } else {
    document.body.classList.remove("loading");
    $("#stationSelect").disabled = false;
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
    optGroup.append(opt);
  }
  select.append(optGroup);
}

select.oninput = async (e) => {
  await loadStation(e.target.value);
};

loadStation("UN");

const container = $(".departure-wrapper");
const animator = new Animator(container, { padding: 8 });
animator.setInner(createElement("div", "class=animator-inner"));

async function loadStation(code) {
  const departures = await fetchTrainDepartures(code);
  let departureFragment = new DocumentFragment();

  animator.setInner(createElement("div", "class=animator-inner"));

  for (const [i, dep] of departures.entries()) {
    let depel = generateDeparture(dep, i);
    departureFragment.append(depel);
  }

  animator.animateAppend(departureFragment);

  if (!departures.length)
    animator.inner.innerHTML = "No departures for this station";
}

// generates a departure element imperatively
function generateDeparture(dep, i) {
  const container = createElement(
      "div",
      `class=train-departure;style=--i:${i * 45}ms`
    ),
    left = createElement("div", "class=left"),
    right = createElement("div", "class=right"),
    service = createElement("h2", "class=location", dep.service),
    scheduled = createElement("h3", "class=scheduled", dep.scheduledTime),
    platformsText = createElement(
      "p",
      null,
      `on platform${dep.platform.split("&").length > 0 ? "s" : ""}`
    ),
    platforms = createElement("h3", "class=platforms", dep.platform);

  left.append(service);
  right.append(scheduled);
  if (dep.platform && dep.platform !== "-")
    right.append(platformsText, platforms);

  container.append(left, right);
  return container;
}
