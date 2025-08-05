import './Contact.css'
import data from '../../public/data/data'
import emailjs from 'emailjs-com'

const {contact} = data;

const sendEmail = (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  emailjs.send("service_8hptkup", "template_jf43qgj", {
    from_name: name,
    from_email: email,
    message: message
  }, "T0SXiffRLbS9vyl80")
  .then(() => {
    alert("✅ Message sent successfully!");
    document.getElementById("contact-form-raw").reset();
  }, (error) => {
    alert("❌ Error sending message. Try again.");
    console.error(error);
  });
};

/*
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

export default Contact;*/


const template = () => {
  return `
  <div id="contact-img">
    <img src="${contact.img}" alt="">
  </div>

  <div id="contact-form">
    <p id="catch-frase">${contact.catch_frase}</p>
    <p id="title">${contact.title}</p>
    <p>${contact.subtitle1}</p>
    <p>${contact.subtitle2}</p>

    <form id="contact-form-raw">
      <div class="input-field">
        <input type="text" id="name" required spellcheck="false">
        <label>Enter your name</label>
      </div>
      <div class="input-field">
        <input type="email" id="email" required spellcheck="false">
        <label>Email</label>
      </div>
      <div class="input-field">
        <textarea id="message" maxlength="5000" required spellcheck="false"></textarea>
        <label>Message</label>
      </div>

      <button type="submit" id="submitBtn">Submit</button>
    </form>

    <button id="scheduleBtn">Schedule a meeting</button>
    <p>${contact.privacy}</p>
  </div>
  `;
};

const Contact = () => {
  const contact = document.createElement("section");
  contact.id = "Contact";
  contact.innerHTML = template();
  document.querySelector("#app").appendChild(contact);

  // Añadir listeners después de insertar el DOM
  document.getElementById("contact-form-raw").addEventListener("submit", sendEmail);
  document.getElementById("scheduleBtn").addEventListener("click", () => {
    window.open("https://calendly.com/tu_usuario", "_blank"); // Cambia tu Calendly
  });
};

export default Contact;