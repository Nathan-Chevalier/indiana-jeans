export const submissionList = async () => {
  const response = await fetch("http://localhost:8088/submissions");
  const submissions = await response.json();

  let html = `<h2> Here's all the data so far </h2>`;

  const subArray = submissions.map((submission) => {
    return `<section> Owns Jeans? ${submission.ownsBlueJeans}    
      SocioLocation? ${submission.socioLocationId}
      </section>`;
  });
  html += subArray.join("");

  return html;
};
