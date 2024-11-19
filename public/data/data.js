const data = {
  navbar: [
    "Home",
    "Projects",
    "Work",
    "About",
    "Contact",
  ],

  name: "Dragos",
  surname: "Bota",
  email: "dragosbota0@gmail.com",
  avatar:
    "https://images.unsplash.com/photo-1554533899-787ef890e98f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHNvY3JhdGVzJTIwYnVzdG98ZW58MHx8MHx8fDA%3D",
  avatar_alt: "Socrates sculpture",
  cv_link: "https://drive.google.com/file/d/1LUxRO6yK7gPcnaAbGrPpHix9wVEZggQJ/view?usp=drive_link",
  about:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae eveniet voluptatibus quo, neque modi iusto officia soluta, provident saepe tempora amet explicabo dolor aspernatur cumque est quos totam, voluptate eaque!",

  projects: [
    {
      title: "Plantify",
      subtitle:"- eCommerce",
      description:
        "Plantify is an e-commerce project specialized in selling plants, flowers, pots, and related products. The website is developed exclusively using HTML for structure and CSS for styling. Plantify stands out for its minimalist approach to development, prioritizing efficiency and simplicity in the user experience. It is an example of how a website can be fully functional without additional technological complexities.",
      link: "http://github.com/#",
      preview:
      "/assets/plantify.png",
    },
    {
      title: "Pinterest",
      subtitle:"- API",
      description:
        "This project is a Pinterest clone that allows users to search for images using an external API, developed using HTML, CSS, and JavaScript. The platform replicates the core functionality of Pinterest, enabling users to input keywords which are then processed by the API to retrieve relevant photos from a large database. The frontend handles user interactions and displays the results in a responsive, grid-based layout. This project demonstrates how HTML, CSS, and JavaScript can be combined to create a dynamic, user-driven application with rich visual content.",
      link: "http://github.com/#",
      preview:
        "/assets/pinterest.png",
    },
    {
      title: "Weather",
      subtitle:"- API",
      description:
        "This is a simple weather application using HTML, CSS, and JavaScript that allows users to get real-time weather forecasts for any location. The app connects to a weather API to retrieve data such as the current temperature, weather conditions (sunny, cloudy, rainy, etc.), humidity, and wind speed.The interface has a clean and responsive design, enabling users to enter a city name or allow automatic location detection. Upon submitting the query, the weather data is displayed clearly, with icons and well-organized information for a better user experience.This project demonstrates the use of API requests, DOM manipulation, and CSS styling to create an engaging and functional user experience",
      link: "http://github.com/#",
      preview:
        "/assets/weather.png",
    },
    {
      title: "Online CV",
      subtitle:"- Automated data",
      description:
        "The entire structure and content of this resume are dynamically generated and managed through JavaScript, using the Document Object Model (DOM) to insert and modify elements on the page and event listeners to enable a responsive and engaging user experience. CSS is applied to style the resume, ensuring a clean and professional layout. By relying solely on JavaScript and CSS, this project highlights the power of DOM manipulation for building and maintaining a fully interactive and customizable resume without the need for additional HTML. It exemplifies how a webpage can be crafted with a focus on efficiency and dynamic content generation.",
      link: "http://github.com/#",
      preview:
        "/assets/personal-cv.png",
    },
  ],
  workExperience: [
    {
      position: "Marketing Technical Support",
      company: "Alfarben",
      startDate: "May 2023",
      endDate: "Present",
      description: [
        "· Conduct market research focused on analyzing competitor pigments, providing key insights for innovation.",
        "· Develop new products and color shades tailored to specific customer needs, opening up new business opportunities.",
      ]
    },
    {
      position: "Quality Control",
      company: "Alfarben",
      startDate: "November 2021",
      endDate: "May 2023",
      description: [
        "· Oversaw production processes, ensuring compliance with quality standards across all operations.",
        "· Managed post-sales services and effectively resolved claims, enhancing customer satisfaction.",
      ]
    },
    {
      position: "Camp Counselor, Director and Training Instructor",
      company: "CarpeVitae",
      startDate: "April 2020",
      endDate: " - November 2021",
      description: [
        "· Started as a summer camp counselor, leading activities and ensuring the safety and well-being of participants.",
        "· Promoted to Camp Director, managing teams and coordinating successful programs for youth.",
        "· Instructor at the Monitor Training School, delivering courses and developing skills in future counselors and directors."
      ]
    },
  ],
  about:[
    "Moved to a small town near Valencia, Spain, when I was 6 years old. I've always loved spending time outdoors, which led to my passion for extreme sports and the thrill of adrenaline. I initially pursued a degree in chemistry at university but decided to leave after two years to work in a lab.",
    "I stumbled upon coding by chance, and it sparked something within me. Since then, I've dedicated myself to learning and coding every day to continuously improve.",
    "Let's code together!"
  ],
  contact: {
      title: "Reach out!",
      catch_frase: "Looks like you need a hand...",
      subtitle1: "I usually respond within the day but coders also have two or three hours of sleep, so it might take a bit longer.",
      subtitle2: "Thank you and I am looking to hearing from you!",
      img: "https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fG1vbnRhJUMzJUIxYXxlbnwwfHwwfHx8MA%3D%3D",
      name: "Name",
      email: "Email",
      message: "Message",
      privacy: "By submitting this form, you acknowledge receipt of our compani Privacy and Policy.",
  }

};

export default data;
