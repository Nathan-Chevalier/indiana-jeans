import { ownJeansChoices } from "./ownsJeans.js";
import { saveSubmission } from "./saveSubmission.js";
import { locationTypeChoices } from "./urbanDweller.js";

const container = document.querySelector("#container");

const render = async () => {
  const jeanOwnershipHTML = ownJeansChoices();
  const locationsHTML = await locationTypeChoices();
  const buttonHTML = await saveSubmission();

  container.innerHTML = `
  ${jeanOwnershipHTML}
  ${locationsHTML}
  ${buttonHTML}
  `;
};

render();
