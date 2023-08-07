import { ownJeansChoices } from "./ownsJeans.js";
import { saveSubmission } from "./saveSubmission.js";
import { locationTypeChoices } from "./urbanDweller.js";
import { submissionList } from "./submissions.js";

const container = document.querySelector("#container");

const render = async () => {
  const jeanOwnershipHTML = ownJeansChoices();
  const locationsHTML = await locationTypeChoices();
  const buttonHTML = await saveSubmission();
  const submissionsHTML = await submissionList();

  container.innerHTML = `
  ${jeanOwnershipHTML}
  ${locationsHTML}
  ${buttonHTML}
  ${submissionsHTML}
  `;
};

document.addEventListener("newSubmissionCreated", render);

render();
