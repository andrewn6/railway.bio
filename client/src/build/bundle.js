(function () {
  'use strict';

  var stations = {
    Union: [{ name: "Union Station", id: "UN" }],
    "Union Pearson": [{ name: "Pearson Airport", id: "PE" }],
    "Lakeshore East": [
      { name: "Whitby", id: "WH" },
      { name: "Ajax", id: "AJ" },
      { name: "Pickering", id: "PI" },
      { name: "Rouge Hill", id: "RO" },
      { name: "Guildwood", id: "GU" },
      { name: "Eglinton", id: "EG" },
      { name: "Scarborough", id: "SC" },
      { name: "Danforth", id: "DA" },
    ],
    Stouffville: [
      { name: "Old Elm", id: "LI" },
      { name: "Stouffville", id: "ST" },
      { name: "Mount Joy", id: "MJ" },
      { name: "Markham", id: "MR" },
      { name: "Centennial", id: "CE" },
      { name: "Unionville", id: "UI" },
      { name: "Milliken", id: "MK" },
      { name: "Agincourt", id: "AG" },
      { name: "Kennedy", id: "KE" },
    ],
    "Richmond Hill": [
      { name: "Bloomington", id: "BM" },
      { name: "Gormley", id: "GO" },
      { name: "Richmond Hill", id: "RI" },
      { name: "Langstaff", id: "LA" },
      { name: "Old Cummer", id: "OL" },
      { name: "Oriole", id: "OR" },
    ],
    Barrie: [
      { name: "Allendale Waterfront", id: "AD" },
      { name: "Barrie South", id: "BA" },
      { name: "Bradford", id: "BD" },
      { name: "East Gwillimbury", id: "EA" },
      { name: "Newmarket", id: "NE" },
      { name: "Aurora", id: "AU" },
      { name: "King City", id: "KC" },
      { name: "Maple", id: "MP" },
      { name: "Rutherford", id: "RU" },
      { name: "Downsview Park", id: "DO" },
    ],
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
      { name: "West Harbour", id: "WR" },
      { name: "St. Catharines", id: "SCTH" },
      { name: "Niagara Falls", id: "NI" },
    ],
    Milton: [
      { name: "Kipling", id: "KP" },
      { name: "Dixie", id: "DI" },
      { name: "Cooksville", id: "CO" },
      { name: "Erindale", id: "ER" },
      { name: "Streetsville", id: "SR" },
      { name: "Meadowvale", id: "ME" },
      { name: "Lisgar", id: "LS" },
      { name: "Milton", id: "ML" },
    ],
    Kitchener: [
      { name: "Bloor", id: "BL" },
      { name: "Weston", id: "WE" },
      { name: "Etobicoke North", id: "ET" },
      { name: "Malton", id: "MA" },
      { name: "Bramalea", id: "BE" },
      { name: "Brampton", id: "BR" },
      { name: "Mount Pleasant", id: "MO" },
      { name: "Georgetown", id: "GE" },
      { name: "Acton", id: "AC" },
      { name: "Guelph Central", id: "GL" },
      { name: "Kitchener", id: "KI" },
    ],
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

  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  /**
   * Animates the width and height of a container depending on its content. */
  class Animator {
    /** Creates an inner container if one's not already there. */
    constructor(target, settings) {
      this.outer = target; // outer container.
      this.settings = settings;
      // set outer's content to inner
      this.inner = createElement("div", "class=animator-inner");
      this.outer.replaceChildren(this.inner);
    }
    /** Change inner's content and animate outer's width and height to fit it. */
    async animateTo(newHTML, transitionDuration = 0) {
      // get dimensions
      const dimensions = this.getHTMLDimensions(newHTML);

      this.outer.style.width = `${Math.max(
      dimensions.width,
      this.settings.minWidth || 0
    )}px`;
      this.outer.style.height = `${dimensions.height}px`;
      // Wait a bit
      if (transitionDuration) await wait(transitionDuration);
      // then replace the content and unhide
      this.outer.replaceChildren(newHTML);
      this.inner = newHTML;

      return newHTML;
    }

    async animateAppend(newElement) {
      const elementDimensions = this.getHTMLDimensions(newElement),
        boxDimensions = this.getHTMLDimensions(this.inner);

      this.outer.style.width = `${Math.max(
      elementDimensions.width -
        elementDimensions.x +
        (boxDimensions.width - boxDimensions.x),
      this.settings.minWidth || 0
    )}px`;
      this.outer.style.height = `${
      elementDimensions.height +
      boxDimensions.height +
      (this.settings.padding ?? 0)
    }px`;
      console.log(newElement.children);
      this.inner.append(...newElement.children);
    }

    async setInner(newHTML) {
      await this.animateTo(newHTML, this.settings.transitionDuration || 0);
    }

    /**
     * Helper function to measure the dimensions of an element. We're usually measuring Inner.
     * @returns The dimensions of the element, in a DOMRect.
     */
    getHTMLDimensions(html) {
      // Clone the node & measure it, basically
      let cloned;
      if (html instanceof Element) cloned = html.cloneNode(true);
      else {
        cloned = createElement("div");
        cloned.append(
          ...[...html.children].map((child) => child.cloneNode(true))
        );
      }
      cloned.classList.add("invisible");
      document.body.append(cloned);
      const size = cloned.getBoundingClientRect();
      cloned.classList.remove("invisible");
      cloned.remove();
      return size;
    }
  }

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

})();
