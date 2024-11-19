import './Work.css'
import data from '../../public/data/data.js'
const {workExperience} = data;

const template = () =>{
  return `
    <h4>Work</h4>
    <article>
    ${workExperience.map((job, index) => `
      <section id="workgrid" class="work${index+1}">

        <div id="place-date-div">
          <h5>${job.company}</h5>
          <h6>${job.position}</h6>
          <p id="jobdate">${job.startDate} - ${job.endDate}</p>
        </div>

      <div id="experience-div">
        ${job.description.map(desc => `
          <p>${desc}</p>
        `).join('')}
      </div>
      </section>
    `).join("")}
    </article>
  `
}

const Work = () => {
  const work = document.createElement("section");
  work.id = 'Work';
  work.innerHTML = template();

  document.querySelector("#app").appendChild(work);
}

export default Work;