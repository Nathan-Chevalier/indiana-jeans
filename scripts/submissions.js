export const submissionList = async () => {
  // Get submissions from API
  const response = await fetch("http://localhost:8088/submissions");
  const submissions = await response.json();
  // Iterate the submissions and create some <section> representations
  let html = `<h2> Here's all the data so far </h2>`;
  for (const submission of submissions) {
    html += `<section> Owns Jeans? ${submission.ownsBlueJeans}    
        SocioLocation? ${submission.socioLocationId}
        </section>`;
  }
  // Return the HTML string
  return html;
};
