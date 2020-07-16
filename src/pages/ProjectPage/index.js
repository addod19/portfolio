import React, { Component } from 'react';

import './style.css';
import { FaGithub, FaCode } from 'react-icons/fa';
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

export default class ProjectPage extends Component {
  render() {
    return (
      <div className="projectWrap container">
        <h2 className="text-center t-color"> List of Projects </h2>
        <hr className="line" />
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <section className="text-center">
              <h2 className="t1-color">Facebook Clone</h2>
              <img title="kindly click icons below" src={fbImg} alt="friendbook" className="style-img" />
              <div className="technologies mt-3">
                <ul className="tech-items">
                  <li>Ruby on Rails</li>
                  <li>SCSS</li>
                  <li>RSpec</li>
                  <li>Devise</li>
                  <li>Facebook Omniauth</li>
                  <li>SASS</li>
                </ul>
              </div>
              <div className="link">
                <a title="github repo" href="https://secret-sea-76381.herokuapp.com/" className="s-icons"><FaGithub /></a>
                <a title="online version" href="https://github.com/addod19/facebook-clone" className="s-icons"><FaCode /></a>
              </div>
            </section>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <section className="text-center">
              <h2 className="t1-color"> Todo </h2>
              <img title="kindly click icons below" src={todoImg} alt="todo" className="style-img" />
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
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <section className="text-center">
              <h2 className="t1-color">Tic Tac Toe </h2>
              <img title="kindly click icons below" src={ticImg} alt="tictactoe" className="style-img" />
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
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <section className="text-center">
              <h2 className="t1-color">Event Brite</h2>
              <img title="kindly click icons below" src={evImg} alt="private events" className="style-img" />
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
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <section className="text-center">
              <h2 className="t1-color">Smashing Magazine </h2>
              <img title="kindly click icons below" src={smImg} alt="smash magazine" className="style-img" />
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
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <section className="text-center">
              <h2 className="t1-color">News Week </h2>
              <img title="kindly click icons below" src={newsweekImg} alt="newsweek" className="style-img" />
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
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <section className="text-center">
              <h2 className="t1-color">Simple Calculator </h2>
              <img title="kindly click icons below" src={calImg} alt="calculator" className="style-img" />
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
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <section className="text-center">
              <h2 className="t1-color">Weather App </h2>
              <img title="kindly click icons below" src={weatherImg} alt="weather" className="style-img" />
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
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <section className="text-center">
              <h2 className="t1-color">Restaurant App</h2>
              <img title="kindly click icons below" src={restImg} alt="restaurant" className="style-img" />
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
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <section className="text-center">
              <h2 className="t1-color">Library App</h2>
              <img title="kindly click icons below" src={libImg} alt="library" className="style-img" />
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
                <a title="online version" href="https://github.com/addod19/BookStoreLibrary" className="s-icons"><FaCode /></a>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
