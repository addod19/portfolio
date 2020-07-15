import React, { Component } from 'react';

import profile__image from '../../Images/free.jpg';
import { FaHtml5, FaCss3Alt, FaDatabase, FaJs, FaReact, FaGithub,
        FaTwitter, FaFacebook, FaLinkedin, FaMedium, FaAngellist } from 'react-icons/fa';
import './style.css';


export default class HomePage extends Component {
    render() {
        return (
            <div className="homeWrap container">
                <div className="align-content">
                    <h2 className="text-center col-12 fs">
                        <span className="dan"> I'm </span> 
                        <span className="special">
                            Daniel Larbi Addo 
                        </span>
                        <span className="full__stack">
                            <br></br> a <span className="dev">Full-Stack Web Developer</span>
                        </span>
                    </h2>
                    <h3 className="design">I design awesome web apps </h3>
                </div>
                
                <div className="about__div row mt-5">
                    <div className="profile__wrap col-sm-12 col-md-4 col-lg-5">
                        <img src={profile__image} alt="" className="profile_img"/>
                    </div>
                    
                    <div className="story__wrap col-sm-12 col-md-8 col-lg-7">
                        <h1 className="text-center exp">Experience In:</h1>
                        <ul className="text-center grid">
                            <li><FaHtml5 />HTML</li>
                            <li><FaCss3Alt />CSS</li>
                            <li><FaDatabase />DATABASE</li>
                            <li>RUBY</li>
                            <li>RUBY ON RAILS</li>
                            <li><FaJs />JAVASCRIPT</li>
                            <li><FaReact />REACT/REDUX</li>
                            <li>TESTING (RSpec & Capybara, JEST) </li>
                        </ul>
                        <hr className="line" />
                        <div className="social-links">
                            <h3 className="text-center t-color">Social handles</h3>
                            <ul className="no-marg">
                                <li>
                                    <a href="https://github.com/addod19" className='s-links'>
                                        <FaGithub />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/daniel-larbi-addo/" className='s-links'>
                                    <FaLinkedin />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://angel.co/u/daniel-larbi-addo" className='s-links'>
                                    <FaAngellist />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/DanielLarbiAdd1" className='s-links'>
                                    <FaTwitter />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://medium.com/@addodaniellarbi" className='s-links'>
                                    <FaMedium />
                                    </a>
                                </li>
                                <li>
                                    <a href="" className='s-links'>
                                    <FaFacebook />
                                    </a>
                                </li>
                                
                            </ul>
                        </div>
                        <div className="contact">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
