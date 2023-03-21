import stations from "./stations.js";

const $ = document.querySelector.bind(document);

const fetchTrainDepartures = async station => {
  try {
    const response = await fetch(`https://api.railway.wtf/departures/${station}`);
    const data = await response.json();
    return data.trainDepartures.items;
  } catch (error) {
    console.error(error);
  }
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

async function loadStation(code) {
  const container = $("#departures");
  $("main").classList.add("loading");
  const departures = await fetchTrainDepartures(code)
  
  container.innerHTML = "";

  for (const [i, dep] of departures.entries()) {
    const depel = document.createElement("train-departure");
    depel.innerHTML = `<span slot="location">${dep.service}</span><span slot="scheduled">${dep.scheduledTime}</span><span slot="platforms">${dep.platform}</span>`;
    setTimeout(()=>{
      $("#departures").append(depel);
    }, 100*i)
  }

  if (!departures.length) container.innerHTML = "No departures for this station"
  setTimeout(()=>{
    $("main").classList.remove("loading")
  }, 1000)
}
