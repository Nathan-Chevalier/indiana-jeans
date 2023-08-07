export const locationTypeChoices = async () => {
  const response = await fetch("http://localhost:8088/socioLocations");
  const locations = await response.json();
  let html = `<h2> Which type of area do you live in?</h2>`;

  for (const location of locations) {
    html += `<input type="radio" name="location" value="${location.id}" /> ${location.label}`;
  }
  return html;
};
