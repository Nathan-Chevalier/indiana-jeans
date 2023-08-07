import { setSocioLocationId } from "./transientState.js";

export const locationTypeChoices = async () => {
  document.addEventListener("change", handleLocationChange);
  const response = await fetch("http://localhost:8088/socioLocations");
  const locations = await response.json();
  let html = `<h2> Which type of area do you live in?</h2>`;

  for (const location of locations) {
    html += `<input type="radio" name="location" value="${location.id}" /> ${location.label}`;
  }
  return html;
};

const handleLocationChange = (changeEvent) => {
  if (changeEvent.target.name === "location") {
    const converted = parseInt(changeEvent.target.value);
    setSocioLocationId(converted);
  }
};
