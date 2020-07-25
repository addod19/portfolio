import React, { Component } from 'react';

import {
  FaHtml5, FaCss3Alt, FaDatabase, FaJs, FaReact, FaGithub,
  FaTwitter, FaFacebook, FaLinkedin, FaMedium, FaAngellist,
  FaHandPointRight, FaMailBulk, FaCode
} from 'react-icons/fa';
import './style.css';

import { gsap } from 'gsap';

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

  componentDidMount() {

    gsap.from('.anim', { opacity: 0, duration: 1, y: -50, stagger: 0.6});
    gsap.from('.animLeft', { opacity: 0, duration: 1, x: 150});
    gsap.from('.animRight', { opacity: 0, duration: 1, x: -150, y: 200, stagger: .5})
        // .to( {opacity: 1, duration: 1, x: -50, stagger: 0.7})
    // gsap.from('.designer', { opacity: 0, duration: 1, y: -30, stagger: 0.6, ease: 'bounce', delay: 1.2})
    gsap.to('.creator', { opacity: 0, duration: 1, y: -40, stagger: 0.5, ease: 'elastic(1, 0.3)'})
    gsap.to('.thinker', { opacity: 0, duration: 1, y: -50, stagger: 0.6, delay: 1.1})

  }
  render() {
    return (
      <div className="homeWrap container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-5 col-xl-5">
            <aside>
              <div className="align-content text-center">
                <div className="d-c anim designer">Designer</div>
                <div className="d-c anim creator">Creator</div>
                <div className="d-c anim thinker">Thinker</div>

                <p className="myIntro">
                  Currently, am <span>working</span> as a <span>Technical Support Engineer</span> 
                  <span>@Microverse</span>.
                  Kindly follow my works, words and photos below
                </p>
                <div className="no-marg">
                    <div>
                      <a href="https://github.com/addod19" className="s-links">
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
                  <li className="ip-font">
                    <FaHtml5 />
                    HTML
                  </li>
                  <li className="ip-font">
                    <FaCss3Alt />
                    CSS
                  </li>
                  <li className="ip-font">
                    <FaDatabase />
                    DATABASE
                  </li>
                  <li className="ip-font">RUBY</li>
                  <li className="ip-font">RUBY ON RAILS</li>
                  <li className="ip-font">
                    <FaJs />
                    JAVASCRIPT
                  </li>
                  <li className="ip-font">
                    <FaReact />
                    REACT/REDUX
                  </li>
                  <li className="ip-font">TESTING (RSpec & Capybara, JEST) </li>
                </ul>
                </div>
              </div>
            </aside>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-8 col-lg-7 col-xl-7">
            <main>
              <div className="col-12">
                <section className="text-center mwrap">
                  <h2 className="t1-color anim">Facebook Clone</h2>
                  <div className="ImgWrap animLeft">
                    <img title="kindly click icons below" src={fbImg} alt="friendbook" className="style-img" />
                  </div>
                  <div className="descp animRight">
                    Welcome to Friendbook, a Facebook-like social network application. This application has the 
                    functionalities of a social media application. Authorized users are able to create a post, 
                    comment on a post, like a post/comment, send and accept friend requests.
                  </div>
                  <div className="technologies mt-3">
                    <ul className="tech-items">
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
              <div className="col-12">
                <section className="text-center">
                  <h2 className="t1-color"> Todo </h2>
                  <img title="kindly click icons below" src={todoImg} alt="todo" className="style-img" />
                  <div className="descp">
                    In this project we created a simple todo list applying the concepts of single responsibility 
                    and loosely coupled objects. We applied the revealing module design pattern.
                  </div>
                  <div className="technologies mt-3">
                    <ul className="tech-items m-auto">
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
                  <h2 className="t1-color">Tic Tac Toe </h2>
                  <img title="kindly click icons below" src={ticImg} alt="tictactoe" className="style-img" />
                  <div className="descp">
                  This is a browser-based tic-tac-toe game created using vanilla Javascript.
                  </div>
                  <div className="technologies mt-3">
                    <ul className="tech-items m-auto">
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
                  <h2 className="t1-color">Event Brite</h2>
                  <img title="kindly click icons below" src={evImg} alt="private events" className="style-img" />
                  <div className="descp">
                  Events manager application.In this project we built a site similar to a private Eventbrite which 
                  allows users to create events and then manage user signups. 
                  </div>
                  <div className="technologies mt-3">
                    <ul className="tech-items">
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
                  <h2 className="t1-color">Smashing Magazine </h2>
                  <img title="kindly click icons below" src={smImg} alt="smash magazine" className="style-img" />
                  <div className="descp">
                    Building a clone of smashingmagazine.com website, 
                    aligning all elements with float and flex or grid.
                  </div>
                  <div className="technologies mt-3">
                    <ul className="tech-items m-auto">
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
                  <h2 className="t1-color">News Week </h2>
                  <img title="kindly click icons below" src={newsweekImg} alt="newsweek" className="style-img" />
                  <div className="descp">
                    Building a Newsweek clone website using bootstrap classes. 
                    Considering mobile-first responsive design.
                  </div>
                  <div className="technologies mt-3">
                    <ul className="tech-items m-auto">
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
                  <h2 className="t1-color">Simple Calculator </h2>
                  <img title="kindly click icons below" src={calImg} alt="calculator" className="style-img" />
                  <div className="descp">
                    Building a basic functionality of a calculator with React
                  </div>
                  <div className="technologies mt-3">
                    <ul className="tech-items m-auto">
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
                  <h2 className="t1-color">Weather App </h2>
                  <img title="kindly click icons below" src={weatherImg} alt="weather" className="style-img" />
                  <div className="descp">
                    A weather app that pulls from the OpenWeatherMap API to allow users to search for 
                    and view the forecast in cities worldwide. Built with JavaScript
                  </div>
                  <div className="technologies mt-3">
                    <ul className="tech-items">
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
                  <h2 className="t1-color">Restaurant App</h2>
                  <img title="kindly click icons below" src={restImg} alt="restaurant" className="style-img" />
                  <div className="descp"> 
                    Building a restaurant app with ES6 classes, ES6 modules, and Webpack
                  </div>
                  <div className="technologies mt-3">
                    <ul className="tech-items m-auto">
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
                  <h2 className="t1-color">Library App</h2>
                  <img title="kindly click icons below" src={libImg} alt="library" className="style-img" />
                  <div className="descp">
                    Building a book store library using vanilla Javascript. In this project, 
                    we demonstrate the use of Object and Object Constructors
                  </div>
                  <div className="technologies mt-3">
                    <ul className="tech-items">
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

              <div className="email">
                <div className="i-large rotate">
                  <FaHandPointRight className="i-large" />
                </div>
                <div className="i-large">
                  email:
                  {' '}
                  <FaMailBulk />
                  {' '}
                  info@daniellarbiaddo.com
                </div>
              </div>

            </main>
          </div>
        </div>
      </div>
    );
  }
}
