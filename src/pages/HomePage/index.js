import React, { Component } from 'react';

import {
  FaHtml5, FaCss3Alt, FaDatabase, FaJs, FaReact, FaGithub,
  FaTwitter, FaFacebook, FaLinkedin, FaMedium, FaAngellist,
  FaHandPointRight, FaMailBulk,
} from 'react-icons/fa';
// import profile__image from '../../Images/free.jpg';
import './style.css';

export default class HomePage extends Component {
  render() {
    return (
      <div className="homeWrap container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-5 col-xl-5">
            <aside>
              <div className="align-content">
                <h2 className="text-center col-12 fs">
                  <span className="dan"> I'm </span>
                  <span className="special">
                    Daniel Larbi Addo
                  </span>
                  <span className="full__stack">
                    <br />
                    {' '}
                    a
                    {' '}
                    <span className="dev">Full-Stack Web Developer</span>
                  </span>
                </h2>
                <h3 className="design">I design awesome web apps </h3>
              </div>
            </aside>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-8 col-lg-7 col-xl-7">
            <main>          
              <div className="story__wrap col-sm-12 col-md-12 col-lg-12">
                <h1 className="text-center exp">Experience In:</h1>
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
                <hr className="line" />
                <div className="social-links">
                  <h3 className="text-center t-color">Social handles</h3>
                  <section className="no-marg">
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

                  </section>
                </div>

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
