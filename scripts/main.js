import { ownJeansChoices } from "./ownsJeans.js";

const container = document.querySelector("#container");

const render = () => {
  const jeanOwnershipHTML = ownJeansChoices();

  container.innerHTML = jeanOwnershipHTML;
};

render();
