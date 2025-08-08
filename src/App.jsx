
import './App.css'
import { useState, useEffect } from 'react';
import emailjs from "@emailjs/browser";


function App() {
  
  const [modal, setModal] = useState(false);
  const [contrast, setContrast] = useState(true);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const scaleFactor = 1 / 20;
  
  useEffect(() => {
    emailjs.init("QF4EA_f4oqivb5Jlf");
  }, []);
  
  function moveBackround(event){
      const shapes = document.querySelectorAll(".shape")
      const x = event.clientX * scaleFactor
      const y = event.clientY * scaleFactor
      
      for(let i = 0; i < shapes.length; i++){
          const isOdd = i % 2 !== 0;
          const booleanInt = isOdd ? -1 : 1;
          shapes[i].style.transform = `translate(${x * booleanInt}px, ${y * booleanInt}px)`
      }
  }
  
  function toggleContrast(){
      setContrast(!contrast);
      if(contrast){
      document.body.classList += " dark-theme"
      }
      else{
          document.body.classList.remove('dark-theme')
      }
  }
  
  function contact(event){
      event.preventDefault();  // prevented default refresh
      const loading = document.querySelector('.modal__overlay--loading');
      const success = document.querySelector('.modal__overlay--success');
      loading.classList += " modal__overlay--visible";
      emailjs
          .sendForm(
              'service_knkz6dk',
              'template_bkyi0fn',
              event.target,
              'QF4EA_f4oqivb5Jlf',
          ).then(() => {
              loading.classList.remove("modal__overlay--visible");
              success.classList += " modal__overlay--visible"
          }).catch(() => {
              loading.classList.remove("modal__overlay--visible");
              alert(
                  "The email service is temporarily unavailable. Please contact me directly at jasneetpalwork@gmail.com"
              )
  })
  
   
  }
  
  
  function toggleModal(){
      if(modal){
          setModal(false);
          return document.body.classList.remove("modal--open")
      }
      setModal(true)
      document.body.classList += " modal--open"
      
  }

  return (
    <>
      <section id="landing-page" onMouseMove={(e) => moveBackround(e)}>
        <nav>
            <figure>
                <a href="#landing-page"><img id="personal-logo" src="assets/logo.png" alt=""/></a>
            </figure>
            <ul class="nav__link--list">
                <li class="nav__link">
                    <a href="#" onClick={toggleModal} class="
                        nav__link--anchor
                        link__hover-effect
                        link__hover-effect--black
                    ">About</a>
                </li>
                <li class="nav__link">
                    <a href="#projects" class="
                        nav__link--anchor
                        link__hover-effect
                        link__hover-effect--black
                    ">Projects</a>
                </li>
                <li class="nav__link">
                    <a href="#" onClick={toggleModal} class="
                        nav__link--anchor
                        link__hover-effect
                        link__hover-effect--black
                        
                    ">Contact</a>
                </li>
                <li class="nav__link click">
                    <a  class="
                        nav__link--anchor
                        
                    "><i class=" fas fa-adjust" onClick={toggleContrast}></i></a>
                </li>
            </ul>
        </nav>
        <header class="header">
            <div class="header__content">
                <h1 class="title">Hey</h1>
                <h1 class="title_name title blue">I'm Jasneet.</h1>
                <p class="header__para">I'm a <b class="blue">Software Engineer</b> by trade, Creator at heart — I'm passionate about building intuitive and impactful digital solutions.<br/>
                    Here's a bit more <b onClick={toggleModal} class="blue click">about me.</b></p>
                <div class="social__list">
                    <a href="https://www.linkedin.com/in/jasneetcodes/" target="_blank" class="social__link click">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/jasneetcodes" target="_blank" class="social__link click">
                        <i class="fa-brands fa-github"></i>
                    </a>
                    <a href="assets/Resume Jasneet.pdf" target="_blank" class="social__link click">
                        <i class="fas fa-file-pdf"></i>
                    </a>
                </div>
            </div>
        </header>
        <a href="#">
        <button class="mail__btn click" onClick={toggleModal}>
            <i class="fas fa-envelope"></i>  
        </button>
        </a>
        <a href="#projects" class="scroll">
            <div class="scroll__icon click"></div>
        </a>
        <div class="modal">
            <div class="modal__half modal__about">
                <h3 class="modal__title modal__title--about">
                    Here's a bit about me
                </h3>
                <h4 class="modal__sub-title modal__sub-title--about">
                    Software Engineer
                </h4>
                <p class="modal__para">I'm 24 year old <b class="blue">software engineer</b> with a strong
                passion for building websites that are as <b class="blue">intuitive</b> as they are  <b class="blue">impactful</b>. 
                <br/>
                Every day, I dive into complex challenges and level up by working alongside some of the most brilliant engineers in the game.
                </p>
                <div class="modal__languages">
                    <figure class="modal__language">
                        <img class="modal__language--img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png" alt=""/>
                        <span class="language__name">HTML</span>
                    </figure>
                    <figure class="modal__language">
                        <img class="modal__language--img" src="https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png" alt=""/>
                        <span class="language__name">CSS</span>
                    </figure>
                    <figure class="modal__language">
                        <img class="modal__language--img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/240px-Unofficial_JavaScript_logo_2.svg.png" alt=""/>
                        <span class="language__name">JavaScript</span>
                    </figure>
                    <figure class="modal__language">
                        <img class="modal__language--img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/768px-Angular_full_color_logo.svg.png" alt=""/>
                        <span class="language__name">Angular</span>
                    </figure>
                    <figure class="modal__language">
                        <img class="modal__language--img" src="assets/image2vector.svg" alt=""/>
                        <span class="language__name">Java</span>
                    </figure>
                    <figure class="modal__language">
                        <img class="modal__language--img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/240px-Spring_Boot.svg.png" alt=""/>
                        <span class="language__name">Spring Boot</span>
                    </figure>
                    <figure class="modal__language">
                        <img class="modal__language--img" src="assets/react.png" alt=""/>
                        <span class="language__name">React</span>
                    </figure>
                    <figure class="modal__language">
                        <img class="modal__language--img" src="https://assets.toptal.io/images?url=https%3A%2F%2Fbs-uploads.toptal.io%2Fblackfish-uploads%2Fcomponents%2Fskill_page%2Fcontent%2Flogo_file%2Flogo%2F195568%2Fsql-64a6e0f07773cf17581e76ca09e17dbc.png" alt=""/>
                        <span class="language__name">SQL</span>
                    </figure>
                </div>
            </div>
            <div class="modal__half modal__contact">
                <i class="fa fa-times modal__exit click" onClick={toggleModal}></i>
                <h3 class="modal__title modal__title--contact">Let's have a chat</h3>
                <h3 class="modal__sub-title modal__sub-title--contact">I'd love to hear from you!</h3>
                <form onSubmit={(e) => contact(e)} id="contact__form">
                    <div class="form__item">
                        <label  class="form__item--label">Name</label>
                        <input type="text" class="input" name="user_name" value={name} onChange={(e) => setName(e.target.value)} required></input>
                    </div>
                    <div class="form__item">
                        <label  class="form__item--label">Email</label>
                        <input type="email" class="input" name="user_email" value={email} onChange={(e) => setEmail(e.target.value)} required ></input>
                    </div>
                    <div class="form__item">
                        <label class="form__item--label">Message</label>
                        <textarea type="test" class="input" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                    </div>
                    <button id="contact__submit" class="form__submit">Send it my way</button>
                </form>
                <div class="modal__overlay modal__overlay--loading ">
                    <i class="fas fa-spinner"></i>
                </div>
                <div class="modal__overlay modal__overlay--success">
                    Thanks for the message! Looking forward to speaking to you soon.
                </div>
            </div>
        </div>
        <img src="assets/semi circle.svg" class="shape shape--0"/>
        <img src="assets/circle.svg" class="shape shape--1"/>
        <img src="assets/squiggly.svg" class="shape shape--2"/>
        {/* <!-- <img src="assets/triangle.svg" class="shape shape--3"> -->
        <!-- <img src="assets/squiggly.svg" class="shape shape--4"> --> */}
        <img src="assets/circle.svg" class="shape shape--5"/>
        <img src="assets/circle.svg" class="shape shape--6"/>
        <img src="assets/triangle.svg" class="shape shape--7"/>
        <img src="assets/semi circle.svg" class="shape shape--8"/>
    </section>

    <section id="projects">
        <div class="container">
            <div class="row">
                <h1 class="section__title">
                    Here are some of my <span class="blue">projects</span>
                </h1>

                <div class="project__wrapper">
                    <img src="assets/chatbot-web-view.png" class="project__img" alt=""/>
                    <div class="project__wrapper--bg"></div>
                    <div class="project__description">
                        <h3 class="project__description--title">
                            AI Chatbot
                        </h3>
                        <h4 class="project__description--sub-title">
                            Python | Bootstrap | FastAPI | AWS
                        </h4>
                        <p class="project__description--para">
                            A cutting-edge chatbot application leveraging OpenAI's state-of-the-art language model API and
                            DALL-E for image generation. The chatbot offers natural language understanding and generation capabilities while
                            seamlessly integrating with image generation to provide rich multimedia responses. Developed using Python and FastAPI,
                            the application is hosted on AWS Lambda for scalable and efficient deployment. Tailored to serve as a personalized
                            Python tutor, the chatbot provides interactive learning experiences and assistance with Python programming concepts.
                        </p>
                        <div class="project__description--links">
                            <a target="_blank" href="https://github.com/JasneetSingh1/OpenAI-chatbot" class="project__description--link">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="https://bqeapeyqzwxnqrgufaum5ngttu0tgcam.lambda-url.us-east-2.on.aws/" class="project__description--link">
                                <i class="fas fa-link"></i>
                            </a>
                        </div>
                    </div>

                </div>

                <div class="project__wrapper">
                    <img src="assets/travellerApp-photo.png" class="project__img" alt=""/>
                    <div class="project__wrapper--bg"></div>
                    <div class="project__description">
                        <h3 class="project__description--title">
                            Traveler App
                        </h3>
                        <h4 class="project__description--sub-title">
                            Java | Room
                        </h4>
                        <p class="project__description--para">
                            A vacation itinerary management mobile application for travelers with custom vacation locations, excursions, and alerts. The application allows users to
                            enter, edit, and delete vacation and excursion data. It provides list and detailed views of vacations and excursions for
                            each vacation and provides alerts for all the dates.
                        </p>
                        <div class="project__description--links">
                            <a target="_blank" href="https://github.com/JasneetSingh1/TravelerApp" class="project__description--link">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="#" class="project__description--link">
                                <i class="fas fa-link"></i>
                            </a>
                        </div>
                    </div>

                </div>
                <div class="project__wrapper">
                    <img src="assets/netflix-front.png" class="project__img" alt=""/>
                    <div class="project__wrapper--bg"></div>
                    <div class="project__description">
                        <h3 class="project__description--title">
                            Netflix Clone
                        </h3>
                        <h4 class="project__description--sub-title">
                            Typescript | Tailwind CSS | Angular   
                        </h4>
                        <p class="project__description--para">
                            Created a fully responsive movie app with Google Sign-in Authentication. Uses the TMBDB API to make requests regarding movies, and tv-shows data.
                        </p>
                        <div class="project__description--links">
                            <a target="_blank" href="https://github.com/JasneetSingh1/Netflix-App" class="project__description--link">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="#" class="project__description--link">
                                <i class="fas fa-link"></i>
                            </a>
                        </div>
                    </div>

                </div>
                <div class="project__wrapper">
                    <img src="assets/spring-photo.png" class="project__img" alt=""/>
                    <div class="project__wrapper--bg"></div>
                    <div class="project__description">
                        <h3 class="project__description--title">
                            Landon Hotel
                        </h3>
                        <h4 class="project__description--sub-title">
                            Java | Typescript | MySQL | Spring Boot | Angular | Docker
                        </h4>
                        <p class="project__description--para">
                            Created a Spring application with a Java back end and an
                            Angular front end to include multithreaded language translations, messages at different time zones, and currency
                            exchanges.
                        </p>
                        <div class="project__description--links">
                            <a target="_blank" href="https://github.com/JasneetSingh1/Multithreaded-Spring-Application" class="project__description--link">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="#" class="project__description--link">
                                <i class="fas fa-link"></i>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    <footer>
        <div class="container">
            <div class="row footer__row">
                <figure class="footer__logo--img-wrapper">
                    <a href="#landing-page"><img src="assets/logo.png" class="footer__logo--img" alt=""/></a>
                </figure>
                <div class="footer__social--list">
                    <a target="_blank" href="https://github.com/jasneetcodes" class="
                footer__social--link
                link__hover-effect
                link__hover-effect--white
                ">GitHub</a>
                    <a target="_blank" href="https://www.linkedin.com/in/jasneetcodes/" class="
                footer__social--link
                link__hover-effect
                link__hover-effect--white
                ">LinkedIn</a>
                    <a href="#" onClick={toggleModal}class="
                footer__social--link
                link__hover-effect
                link__hover-effect--white
                ">Contact</a>
                    <a target="_blank" href="assets/Resume Jasneet.pdf" class="
                footer__social--link
                link__hover-effect
                link__hover-effect--white
                ">Resume</a>
                </div>
                <div class="footer__copyright">Copyright Ⓒ 2024 Jasneetpal Singh </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default App
