import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
import Flash from 'react-reveal/Flash';

import {
  FaHtml5, FaCss3Alt, FaDatabase, FaJs, FaReact, FaGithub,
  FaTwitter, FaFacebook, FaLinkedin, FaMedium, FaAngellist,
  FaHandPointRight, FaMailBulk, FaCode
} from 'react-icons/fa';
import './style.css';

import {gsap, Power3, Power4} from 'gsap';
// import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Typed from 'typed.js';


import fbImg from '../../Images/fb.png';
import todoImg from '../../Images/todo.png';
import evImg from '../../Images/ev.png';
import ticImg from '../../Images/tic.png';
import calImg from '../../Images/call.png';
import newsweekImg from '../../Images/nw.png';
import smImg from '../../Images/sm.png';
import weatherImg from '../../Images/weather.png';
import restImg from '../../Images/rest.png';
import libImg from '../../Images/lib.png';

export default class HomePage extends Component {

  constructor(props) {
    super(props);

    gsap.registerPlugin(ScrollTrigger);

  }

  componentDidMount() {

    gsap.from('.anim', { opacity: 0, duration: 1, y: -50, stagger: 0.6});
    gsap.from('.animLeft', { opacity: 0, duration: 1, x: 150,
      y: -50, ease: Power3.easeInOut
    });
    gsap.from('.animRight', { opacity: 0, duration: 1, x: -150, y: 200, stagger: .5, ease:"back.out(2)"});
    gsap.from('.animTop', { opacity: 0, duration: 1, x: 550,
       ease: Power4.easeOut
    });
    gsap.to('.creator', { opacity: 0, duration: 1, y: -40, stagger: 0.5, ease: 'elastic(1, 0.3)'});
    gsap.to('.thinker', { opacity: 0, duration: 1, y: -50, stagger: 0.6, delay: 1.1});

    // let options = {
    //   strings: ['Designer', 
    //   ' Creator',
    //   'Thinker'
    //   ],
    //   typeSpeed: 40
    // };
    // let typed = new Typed('.typing', options);
  }
  render() {
    return (
      <div className="homeWrap container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-5 col-xl-5">
            <aside>
              <div className="align-content text-center">
                <div className="typing">
                  <div className="d-c anim designer">Designer</div>
                  <div className="d-c anim creator">Creator</div>
                  <div className="d-c anim thinker">Thinker</div>
                </div>
                

                <p className="myIntro">
                  Hi, I am Daniel, currently, am <span className="work">working</span> as a <span className="tech">Technical Support Engineer</span> 
                  <span className="micro">@Microverse</span>.I am also open to new challenges in software development roles.
                  Kindly follow my works, words and photos below
                </p>
                <div className="no-marg">
                    <div>
                      <a href="https://github.com/addod19" className="s-links animTop">
                        <FaGithub />
                      </a>
                    </div>
                    <div>
                      <a href="https://www.linkedin.com/in/daniel-larbi-addo/" className="s-links">
                        <FaLinkedin />
                      </a>
                    </div>
                    <div>
                      <a href="https://angel.co/u/daniel-larbi-addo" className="s-links">
                        <FaAngellist />
                      </a>
                    </div>
                    <div>
                      <a href="https://twitter.com/DanielLarbiAdd1" className="s-links">
                        <FaTwitter />
                      </a>
                    </div>
                    <div>
                      <a href="https://medium.com/@addodaniellarbi" className="s-links">
                        <FaMedium />
                      </a>
                    </div>
                    <div>
                      <a href="https://web.facebook.com/daniel.larbi.addo/" className="s-links">
                        <FaFacebook />
                      </a>
                    </div>
                </div>
                <div>
                  <h3 className="bskills">My Basic Skills</h3>
                <ul className="text-center grid">
                  <li className="ip-font anim">
                    <FaHtml5 />
                    HTML
                  </li>
                  <li className="ip-font anim">
                    <FaCss3Alt />
                    CSS
                  </li>
                  <li className="ip-font anim">
                    <FaDatabase />
                    DATABASE
                  </li>
                  <li className="ip-font anim">RUBY</li>
                  <li className="ip-font anim">RUBY ON RAILS</li>
                  <li className="ip-font anim">
                    <FaJs />
                    JAVASCRIPT
                  </li>
                  <li className="ip-font anim">
                    <FaReact />
                    REACT/REDUX
                  </li>
                  <li className="ip-font anim">TESTING (RSpec & Capybara, JEST) </li>
                </ul>
                </div>
              </div>
            </aside>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-8 col-lg-7 col-xl-7">
            <main>
              <div className="col-12">
                <section className="text-center mwrap">
                  <Slide right>
                  <h2 className="t1-color">Facebook Clone</h2>
                  <div className="ImgWrap">
                    <img title="kindly click icons below" src={fbImg} alt="friendbook" className="style-img" />
                  </div>
                  </Slide>
                  <Slide left>
                  <div className="descp">
                    Welcome to Friendbook, a Facebook-like social network application. This application has the 
                    functionalities of a social media application. Authorized users are able to create a post, 
                    comment on a post, like a post/comment, send and accept friend requests.
                  </div>
                  </Slide>
                  
                  <div className="technologies mt-3">
                    <ul className="tech-items anim">
                      <li>Ruby on Rails</li>
                      <li>SCSS</li>
                      <li>RSpec</li>
                      <li>Devise</li>
                      <li>Facebook Omniauth</li>
                    </ul>
                  </div>
                  <div className="link">
                    <a title="github repo" href="https://github.com/addod19/facebook-clone" className="s-icons"><FaGithub /></a>
                    <a title="online version" href="https://secret-sea-76381.herokuapp.com/" className="s-icons"><FaCode /></a>
                  </div>
                </section>
              </div>
              <hr></hr>
              <div className="col-12 tClass">
                <section className="text-center">
                  <Slide right>
                  <h2 className="t1-color"> Todo </h2>
                  <div className="animLeft">
                    <img title="kindly click icons below" src={todoImg} alt="todo" className="style-img" />
                  </div>
                  </Slide>
                  
                  <Slide left>
                  <div className="descp">
                    In this project we created a simple todo list applying the concepts of single responsibility 
                    and loosely coupled objects. We applied the revealing module design pattern.
                  </div>
                  </Slide>

                  
                  <div className="technologies mt-3">
                    <ul className="tech-items m-auto anim">
                      <li className="mr-2">HTML</li>
                      <li className="mr-2">CSS</li>
                      <li className="mr-2">JavaScript</li>
                      <li className="mr-2">UI KIT</li>
                    </ul>
                  </div>
                  <div className="link">
                    <a title="github repo" href="https://github.com/addod19/todo" className="s-icons"><FaGithub /></a>
                    <a title="online version" href="https://addod19.github.io/todo/" className="s-icons"><FaCode /></a>
                  </div>
                </section>
              </div>
              <hr></hr>
              <div className="col-12">
                <section className="text-center">
                  <Slide right>
                  <h2 className="t1-color anim">Tic Tac Toe </h2>
                  <img title="kindly click icons below" src={ticImg} alt="tictactoe" className="style-img" />
                  </Slide>
                  <Slide left>
                  <div className="descp">
                  This is a browser-based tic-tac-toe game created using vanilla Javascript.
                  </div>
                  </Slide>
                  <div className="technologies mt-3">
                    <ul className="tech-items m-auto anim">
                      <li className="mr-2">HTML</li>
                      <li className="mr-2">CSS</li>
                      <li className="mr-2">JavaScript</li>
                    </ul>
                  </div>
                  <div className="link">
                    <a title="github repo" href="https://github.com/addod19/Tic-Tac-Toe-JS" className="s-icons"><FaGithub /></a>
                    <a title="online version" href="https://macnick.github.io/Tic-Tac-Toe-JS/" className="s-icons"><FaCode /></a>
                  </div>
                </section>
              </div>
              <hr></hr>
              <div className="col-12">
                <section className="text-center">
                  <Slide right>
                  <h2 className="t1-color anim">Event Brite</h2>
                  <img title="kindly click icons below" src={evImg} alt="private events" className="style-img" />
                  </Slide>
                  <Slide left>
                  <div className="descp">
                  Events manager application.In this project we built a site similar to a private Eventbrite which 
                  allows users to create events and then manage user signups. 
                  </div>
                  </Slide>
                  <div className="technologies mt-3">
                    <ul className="tech-items anim">
                      <li>Ruby on Rails</li>
                      <li>Bootstrap</li>
                      <li>SASS</li>
                      <li>HTML</li>
                    </ul>
                  </div>
                  <div className="link">
                    <a title="github repo" href="https://github.com/addod19/private-events" className="s-icons"><FaGithub /></a>
                    <a title="online version" href="https://blooming-mesa-54776.herokuapp.com/" className="s-icons"><FaCode /></a>
                  </div>
                </section>
              </div>
              <hr></hr>
              <div className="col-12">
                <section className="text-center">
                  <Slide right>
                  <h2 className="t1-color anim">Smashing Magazine </h2>
                  <img title="kindly click icons below" src={smImg} alt="smash magazine" className="style-img" />
                  </Slide>
                  <Slide left>
                  <div className="descp">
                    Building a clone of smashingmagazine.com website, 
                    aligning all elements with float and flex or grid.
                  </div>
                  </Slide>
                  <div className="technologies mt-3">
                    <ul className="tech-items m-auto anim">
                      <li className="mr-2">HTML</li>
                      <li className="mr-2">CSS</li>
                    </ul>
                  </div>
                  <div className="link">
                    <a title="github repo" href="https://github.com/addod19/design-tearDown" className="s-icons"><FaGithub /></a>
                    <a title="online version" href="https://secret-sea-76381.herokuapp.com/" className="s-icons"><FaCode /></a>
                  </div>
                </section>
              </div>
              <hr></hr>
              <div className="col-12">
                <section className="text-center">
                  <Slide right>
                  <h2 className="t1-color anim">News Week </h2>
                  <img title="kindly click icons below" src={newsweekImg} alt="newsweek" className="style-img" />
                  </Slide>
                  <Slide left>
                  <div className="descp">
                    Building a Newsweek clone website using bootstrap classes. 
                    Considering mobile-first responsive design.
                  </div>
                  </Slide>
                  
                  <div className="technologies mt-3">
                    <ul className="tech-items m-auto anim">
                      <li className="mr-2">HTML</li>
                      <li className="mr-2">CSS</li>
                      <li className="mr-2">Bootstrap</li>
                    </ul>
                  </div>
                  <div className="link">
                    <a title="github repo" href="https://github.com/addod19/using-bootstrap" className="s-icons"><FaGithub /></a>
                    <a title="online version" href="https://addod19.github.io/using-bootstrap/" className="s-icons"><FaCode /></a>
                  </div>
                </section>
              </div>
              <hr></hr>
              <div className="col-12">
                <section className="text-center">
                  <Slide right>
                  <h2 className="t1-color anim">Simple Calculator </h2>
                  <img title="kindly click icons below" src={calImg} alt="calculator" className="style-img" />
                  </Slide>
                  <Slide left>
                  <div className="descp">
                    Building a basic functionality of a calculator with React
                  </div>
                  </Slide>
                  
                  <div className="technologies mt-3">
                    <ul className="tech-items m-auto anim">
                      <li className="mr-2">React</li>
                      <li className="mr-2">CSS</li>
                      <li className="mr-2">JEST</li>
                    </ul>
                  </div>
                  <div className="link">
                    <a title="github repo" href="https://github.com/addod19/calculator" className="s-icons"><FaGithub /></a>
                    <a title="online version" href="calculator-20.herokuapp.com/" className="s-icons"><FaCode /></a>
                  </div>
                </section>
              </div>
              <hr></hr>
              <div className="col-12">
                <section className="text-center">
                  <Slide right>
                  <h2 className="t1-color anim">Weather App </h2>
                  <img title="kindly click icons below" src={weatherImg} alt="weather" className="style-img" />
                  </Slide>
                  <Slide left>
                  <div className="descp">
                    A weather app that pulls from the OpenWeatherMap API to allow users to search for 
                    and view the forecast in cities worldwide. Built with JavaScript
                  </div>
                  </Slide>
                  
                  <div className="technologies mt-3">
                    <ul className="tech-items anim">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JAVASCRIPT</li>
                      <li>WEBPACK</li>
                      <li>API</li>
                    </ul>
                  </div>
                  <div className="link">
                    <a title="github repo" href="https://github.com/addod19/weather-app" className="s-icons"><FaGithub /></a>
                    <a title="online version" href="addod19.github.io/weather-app/" className="s-icons"><FaCode /></a>
                  </div>
                </section>
              </div>
              <hr></hr>
              <div className="col-12">
                <section className="text-center">
                  <Slide right>
                  <h2 className="t1-color anim">Restaurant App</h2>
                  <img title="kindly click icons below" src={restImg} alt="restaurant" className="style-img" />
                  </Slide>
                  <Slide left>
                  <div className="descp"> 
                    Building a restaurant app with ES6 classes, ES6 modules, and Webpack
                  </div>
                  </Slide>
                  
                  <div className="technologies mt-3">
                    <ul className="tech-items m-auto anim">
                      <li className="mr-2">HTML</li>
                      <li className="mr-2">CSS</li>
                      <li className="mr-2">JAVASCRIPT</li>
                    </ul>
                  </div>
                  <div className="link">
                    <a title="github repo" href="https://github.com/addod19/Restaurant-Page" className="s-icons"><FaGithub /></a>
                    <a title="online version" href="addod19.github.io/restaurant-page/" className="s-icons"><FaCode /></a>
                  </div>
                </section>
              </div>
              <hr></hr>
              <div className="col-12">
                <section className="text-center">
                  <Slide right>
                  <h2 className="t1-color anim">Library App</h2>
                  <img title="kindly click icons below" src={libImg} alt="library" className="style-img" />
                  </Slide>
                  <Slide left>
                  <div className="descp">
                    Building a book store library using vanilla Javascript. In this project, 
                    we demonstrate the use of Object and Object Constructors
                  </div>
                  </Slide>
                  
                  <div className="technologies mt-3">
                    <ul className="tech-items anim">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JAVASCRIPT</li>
                      <li>BOOTSTRAP</li>
                    </ul>
                  </div>
                  <div className="link">
                    <a title="github repo" href="https://github.com/addod19/BookStoreLibrary" className="s-icons"><FaGithub /></a>
                    <a title="online version" href="addod19.github.io/bookstorelibrary/" className="s-icons"><FaCode /></a>
                  </div>
                </section>
              </div>
              {/* <Slide left> */}
              <div className="email">
                <Flash >
                <div className="i-large rotate">
                  <FaHandPointRight className="i-large" />
                </div>
                </Flash>
                <div className="i-large">
                  email:
                  {' '}
                  <FaMailBulk />
                  {' '}
                  info@daniellarbiaddo.com
                </div>
              </div>
              {/* </Slide> */}
            </main>
          </div>
        </div>
      </div>
    );
  }
}