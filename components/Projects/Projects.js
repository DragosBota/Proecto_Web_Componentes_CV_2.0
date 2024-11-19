import './Projects.css'

import data from '../../public/data/data.js'
const {projects} = data;

const template = () => {
  return `
    <h4>Projects</h4>

    ${projects.map((project, index) => `
    <section id="project${index + 1}" class="all-projects">
      <h5>${project.title} <span>${project.subtitle}</span></h5>
      <img src="${project.preview}" alt="${project.title} preview" id="img${index + 1}" class="all-project-img">
      <p>${project.description}</p>
      </section>
    `).join("")}
  `
};


const Projects = () => {
  const projects = document.createElement("section");
  projects.id = 'Projects';
  projects.innerHTML = template();

  document.querySelector("#app").appendChild(projects);
};

export default Projects;