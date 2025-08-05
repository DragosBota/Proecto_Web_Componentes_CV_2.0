import './style.css'
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Work from './components/Work/Work';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

const create = () => {
  Header();
  Projects();
  Work();
  About();
  Contact();
  EventListeners();

};

const EventListeners = () => {
  
  const plantify = document.querySelector('#img1').addEventListener('click', () =>{
    window.open('https://proyecto1-jet-theta.vercel.app', '_blank');
  })
  
  const pinterest = document.querySelector('#img2').addEventListener('click', () =>{
    window.open('https://pinterest-clone-rosy-theta.vercel.app', '_blank');
  })
  
  const weatherAPI = document.querySelector('#img3').addEventListener('click', () =>{
    window.open('', '_blank');
  })

  const COSMOS = document.querySelector('#img5').addEventListener('click', () =>{
    window.open('proyecto-final-cosmos.vercel.app', '_blank');
  })

  const textarea = document.querySelector("textarea");
  textarea.addEventListener("keyup", e => {
    textarea.style.height = "auto";
    let scHeight = e.target.scrollHeight;
    textarea.style.height = `${scHeight}px`;
  })


} 


create();