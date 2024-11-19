import './Contact.css'
import data from '../../public/data/data'
const {contact} = data;


const template = () => {
  return `
  <div id="contact-img">
    <img src="${contact.img}" alt="">
  </div>

  <div id="contact-form">
  
    <p id="catch-frase">${contact.catch_frase}<p>
    <p id="title">${contact.title}</p>
    <p>${contact.subtitle1}</p>
    <p>${contact.subtitle2}</p>

  <div class="input-field">
    <input type="text" required spellcheck="false">
    <label>Enter your name</label>
  </div>
  <div class="input-field">
    <input type="text" required spellcheck="false">
    <label>Email</label>
  </div>
  <div class="input-field">
    <textarea id="textarea" maxlength="5000" required spellcheck="false"></textarea>
    <label>Message</label>
  </div>

    <button id="submitBtn">Submit</button>
    <button id="scheduleBtn">Schedule a meeting</button>
    <p>${contact.privacy}</p>
  </div>
  `
}

const Contact = () => {
const contact = document.createElement("section");
contact.id = "Contact";
contact.innerHTML = template();
document.querySelector("#app").appendChild(contact);
}

export default Contact;