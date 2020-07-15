import React, { Component } from 'react'

import './style.css';
import fbImg from '../../Images/fb.png';
import todoImg from '../../Images/todo.png';
import evImg from '../../Images/ev.png';
import ticImg from '../../Images/tic.png';
import defaultImg from '../../Images/fb.png';

import { FaGithub, FaCode } from 'react-icons/fa';


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
                            <img src={fbImg} alt="friendbook" className="style-img" />
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
                                <a title="click me" href="https://secret-sea-76381.herokuapp.com/" className="s-icons"><FaGithub /></a>
                                <a title="click me" href="https://github.com/addod19/facebook-clone" className="s-icons"><FaCode /></a>
                            </div>
                        </section>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                        <section className="text-center">
                            <h2 className="t1-color"> Todo </h2>
                            <img src={todoImg} alt="todo" className="style-img" />
                            <div className="technologies mt-3">
                                <ul className="tech-items">
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>UI KIT</li>
                                </ul>
                            </div>
                            <div className="link">
                                <a title="click me" href="https://addod19.github.io/todo/" className="s-icons"><FaGithub /></a>
                                <a title="click me" href="https://github.com/addod19/todo" className="s-icons"><FaCode /></a>
                            </div>
                        </section>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                        <section className="text-center">
                            <h2 className="t1-color">Tic Tac Toe </h2>
                            <img src={ticImg} alt="tictactoe" className="style-img" />
                            <div className="technologies mt-3">
                                <ul className="tech-items">
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                </ul>
                            </div>
                            <div className="link">
                                <a title="click me" href="https://macnick.github.io/Tic-Tac-Toe-JS/" className="s-icons" ><FaGithub /></a>
                                <a title="click me" href="https://github.com/addod19/Tic-Tac-Toe-JS" className="s-icons"><FaCode /></a>
                            </div>
                        </section>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                        <section className="text-center">
                            <h2 className="t1-color">Event Brite</h2>
                            <img src={evImg} alt="private events" className="style-img" />
                            <div className="technologies mt-3">
                                <ul className="tech-items">
                                    <li>Ruby on Rails</li>
                                    <li>Bootstrap</li>
                                    <li>SASS</li>
                                    <li>html</li>
                                </ul>
                            </div>
                            <div className="link">
                                <a title="click me" href="https://blooming-mesa-54776.herokuapp.com/" className="s-icons"><FaGithub /></a>
                                <a title="click me" href="https://github.com/addod19/private-events" className="s-icons"><FaCode /></a>
                            </div>
                        </section>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                        <section className="text-center">
                            <h2 className="t1-color">Facebook Clone</h2>
                            <img src={defaultImg} alt="fb" className="style-img" />
                            <div className="technologies mt-3">
                                <ul className="tech-items">
                                    <li>Ruby on Rails</li>
                                    <li>SCSS</li>
                                    <li>RSpec</li>
                                    <li>Devise</li>
                                    <li>SASS</li>
                                </ul>
                            </div>
                            <div className="link">
                                <a title="click me" href="https://secret-sea-76381.herokuapp.com/" className="s-icons"><FaGithub /></a>
                                <a title="click me" href="https://github.com/addod19/facebook-clone" className="s-icons"><FaCode /></a>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}
