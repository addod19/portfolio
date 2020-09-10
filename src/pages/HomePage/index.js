/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render", "componentDidMount"] }] */

import React from 'react';
import Slide from 'react-reveal/Slide';
import Flash from 'react-reveal/Flash';

import {
  FaHtml5, FaCss3Alt, FaDatabase, FaJs, FaReact, FaGithub,
  FaTwitter, FaFacebook, FaLinkedin, FaMedium, FaAngellist,
  FaHandPointRight, FaMailBulk, FaCode, FaWhatsapp
} from 'react-icons/fa';
import './style.css';
import CallMe from '../../Images/phone.svg';

import { gsap, Power3, Power4 } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import rails from '../../Images/rails.jpg';
import game from '../../Images/game.jpg';
import store from '../../Images/store.jpg';
import recipes from '../../Images/recipes.jpg';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    gsap.registerPlugin(ScrollTrigger);
  }

  componentDidMount() {
    gsap.from('.anim', {
      opacity: 0, duration: 1, y: -50, stagger: 0.6,
    });
    gsap.from('.animLeft', {
      opacity: 0,
      duration: 1,
      x: 150,
      y: -50,
      ease: Power3.easeInOut,
    });
    gsap.from('.animRight', {
      opacity: 0, duration: 1, x: -150, y: 200, stagger: 0.5, ease: 'back.out(2)',
    });
    gsap.from('.animTop', {
      opacity: 0,
      duration: 1,
      x: 550,
      ease: Power4.easeOut,
    });
    gsap.to('.creator', {
      opacity: 0, duration: 1, y: -40, stagger: 0.5, ease: 'elastic(1, 0.3)',
    });
    gsap.to('.thinker', {
      opacity: 0, duration: 1, y: -50, stagger: 0.6, delay: 1.1,
    });
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
                  Hi, I am <span className="dan">Daniel</span>, currently, am working as a <span className="tech">Technical Support Engineer</span>
                  <span className="micro">@Microverse</span>.I am also open to new challenges in software development roles.
                  Kindly follow my works, words and photos below
                </p>
                <div className="no-marg">
                    <div>
                      <a href="https://github.com/addod19" target="__blank" className="s-links animTop">
                        <FaGithub />
                      </a>
                    </div>
                    <div>
                      <a href="https://www.linkedin.com/in/daniel-larbi-addo/" target="__blank" className="s-links">
                        <FaLinkedin />
                      </a>
                    </div>
                    <div>
                      <a href="https://angel.co/u/daniel-larbi-addo" target="__blank" className="s-links">
                        <FaAngellist />
                      </a>
                    </div>
                    <div>
                      <a href="https://twitter.com/DanielLarbiAdd1" target="__blank" className="s-links">
                        <FaTwitter />
                      </a>
                    </div>
                    <div>
                      <a href="https://medium.com/@addodaniellarbi" target="__blank" className="s-links">
                        <FaMedium />
                      </a>
                    </div>
                    <div>
                      <a href="https://web.facebook.com/daniel.larbi.addo/" target="__blank" className="s-links">
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
            <hr />
          <div className="col-xs-12 col-sm-12 col-md-8 col-lg-7 col-xl-7">
            <main>
              <div className="col-12 hide-scroll">
                <section className="text-center mwrap">
                <div className="call">
                  <FaWhatsapp className="s-links" /> : <span className="number">
                    +233207312909</span>
                </div>
                  <Slide right>
                  <span className="headerStyle">Facebook Clone</span>
                  <div className="ImgWrap">
                    <img title="kindly click icons below" src={rails} alt="friendbook" className="style-img" />
                  </div>
                  </Slide>
                  {/*  */}
                  <div className="diffBg">
                    <Slide left>
                      <div className="descp">
                        Welcome to Friendbook, a Facebook-like social network application.
                        This application has the functionalities of a social media application.
                        Authorized users are able to create a post, comment on a post,
                        like a post/comment, send and accept friend requests.
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
                      <a title="github repo" target="__blank"
                      href="https://github.com/addod19/facebook-clone" className="s-icons"><FaGithub /></a>
                      <a title="online version" target="__blank"
                      href="https://secret-sea-76381.herokuapp.com/" className="s-icons"><FaCode /></a>
                    </div>
                  {/*  */}
                  </div>
                </section>
              </div>
              <hr></hr>
              <div className="col-12 tClass">
                <section className="text-center">
                  <span className="headerStyle"> Shooting Game </span>
                  <div className="anim">
                    <img title="kindly click icons below" src={game} alt="shooter" className="style-img" />
                  </div>
                  <div className="diffBg">
                  <Slide left>
                  <div className="descp">
                    In this project I created a simple shooting game with business specification
                    using JS ES6 and Phaser3
                  </div>
                  </Slide>

                  <div className="technologies mt-3">
                    <ul className="tech-items m-auto anim">
                      <li className="mr-2">Phaser3</li>
                      <li className="mr-2">Babel</li>
                      <li className="mr-2">JS</li>
                      <li className="mr-2">Webpack</li>
                    </ul>
                  </div>
                  <div className="link">
                    <a title="github repo" target="__blank"
                    href="https://github.com/addod19/js_game_capstone" className="s-icons"><FaGithub /></a>
                    <a title="online version" target="__blank"
                    href="https://addod19.github.io/js_game_capstone/" className="s-icons"><FaCode /></a>
                  </div>
                  </div>
                </section>
              </div>
              <hr></hr>
              <div className="col-12">
                <section className="text-center">
                  <Slide right>
                    <span className="headerStyle">Catalogue of Recipes</span>
                    <img title="kindly click icons below" src={store} alt="recipes" className="style-img" />
                  </Slide>
                  <div className="diffBg">
                    <Slide left>
                    <div className="descp">
                      A fast and dynamic Single Page Application (SPA), built with React/Redux,
                      axios, promises, styled components etc.
                    </div>
                    </Slide>
                    <div className="technologies mt-3">
                      <ul className="tech-items anim">
                        <li>React</li>
                        <li>Redux</li>
                        <li>SASS</li>
                        <li>Jest</li>
                        <li>Enzyme</li>
                        <li>Redux-thunk</li>
                      </ul>
                    </div>
                    <div className="link">
                      <a title="github repo" target="__blank"
                      href="https://github.com/addod19/redux_recipe" className="s-icons"><FaGithub /></a>
                      <a title="online version" target="__blank"
                      href="https://redux-recipe.herokuapp.com/" className="s-icons"><FaCode /></a>
                    </div>
                  </div>
                </section>
              </div>
              <hr></hr>
              <div className="col-12">
                <section className="text-center">
                  <Slide right>
                    <span className="headerStyle"> BookStore </span>
                    <img title="kindly click icons below" src={recipes} alt="bookstore" className="style-img" />
                  </Slide>
                  <div className="diffBg">
                    <Slide left>
                    <div className="descp">
                    A fast and dynamic SPA, built with React and Redux
                    </div>
                    </Slide>
                    <div className="technologies mt-3">
                      <ul className="tech-items m-auto anim">
                        <li className="mr-2">React</li>
                        <li className="mr-2">Redux</li>
                        <li className="mr-2">Prop-Types</li>
                        <li>Heroku</li>
                      </ul>
                    </div>
                    <div className="link">
                      <a title="github repo" target="__blank"
                        href="https://github.com/addod19/React-Bookstore" className="s-icons"><FaGithub /></a>
                      <a title="online version" target="__blank"
                        href="https://redux-book.herokuapp.com/" className="s-icons"><FaCode /></a>
                    </div>
                  </div>
                </section>
              </div>
              <hr></hr>
              <div className="call">
                <img src={CallMe} alt="call" className="callSize" /> : <span className="number">
                  +233207312909</span>
              </div>
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
            </main>
          </div>
        </div>
      </div>
    );
  }
}