import './About.css'
import data from '../../public/data/data.js'
const {about} = data;

const template = () =>{
  return `
  <img src="./public/assets/header-background.png">
  
    <h4>About</h4>
  <div>
    ${about.map((para) => `
      <p>${para}</p>
    `).join("")}
  </div>
  `
}

const About = () => {
  const about = document.createElement("section");
  about.id = 'About';
  about.innerHTML = template();

  document.querySelector("#app").appendChild(about);
}

export default About;