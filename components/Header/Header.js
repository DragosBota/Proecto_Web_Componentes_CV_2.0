import './Header.css'
import data from '../../public/data/data.js'
const {navbar, name, surname, avatar, avatar_alt, cv_link, about} = data;


const template = () => {
return `
<img src="/assets/header-background.png" alt="${avatar_alt}" id"bg-img">
<nav id="nav" class="column">
  ${navbar.map((element) => `
    <a href="#${element}">${element}</a>
  `).join("")}
</nav>

<section id="landing-text">
  <h2>hey there!</h2>
  <h1><span class="small-text">it's</span> <span class="large-text">${name} B.</span></h1>
  <h3 class="animated-text">I'm a <span></span></h3>
</section>

<section id="social-container">
  <ul>
    <li id="hire-form">
      <a href="#Contact" target="_blank">Let's talk!</a>
    </li>
    <li>
      <a href="${cv_link}" target="_blank">Download CV</a>
    </li>
  </ul>
</section>
`};

window.addEventListener("scroll", function() {
  const navbar = document.getElementById("nav");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 620) {
    navbar.classList.remove("column", "hidden");
    navbar.classList.add("row");
  } else if (scrollPosition > 600) {
    navbar.classList.add("hidden"); // Aplica la clase para hacer desaparecer
    navbar.classList.remove("row");
    navbar.classList.remove("column");
  } else {
    navbar.classList.remove("row", "hidden");
    navbar.classList.add("column");
  }
});

const Header = () => {
  const header = document.createElement("header");
  header.id="Home";
  header.innerHTML = template();
  document.querySelector("#app").appendChild(header);
}

export default Header;