import React, { Component } from 'react';

import profile__image from '../../Images/free.jpg';
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
                </div>
                
                <div className="about__div row mt-5">
                    <div className="profile__wrap col-sm-12 col-md-4 col-lg-12">
                        <img src={profile__image} alt="" className="profile_img"/>
                    </div>
                    
                    <div className="story__wrap col-sm-12 col-md-8 col-lg-12">
                        <div className="banner">
                        <h2  className="text-center bgInfo mColor"> BackGround</h2>
                        <p className="mColor sm__txt">I joined Microverse; remote school for software developers in June 2019.
                            During this period I learned the following stack: <span className="highlight"> HTML/CSS </span>, 
                            <span className="highlight"> Ruby </span>, <span className="highlight"> Databases </span>,
                            <span className="highlight"> Ruby on Rails </span>, <span className="highlight"> Javascript</span>,
                            <span className="highlight"> React/Redux </span> along with <span className="highlight"> DS&A </span> 
                            and <span className="highlight"> Professional Skills</span> while studying and building projects 
                            <span className="highlight"> collaboratively</span> and <span className="highlight"> individually</span>.
                            Each morning I meet up with my team, discuss what our targets are during the
                            day, and how we will achieve them. After 8 hours of learning and coding,
                            I meet up with my team to discuss the days' progress, what goal achieved, 
                            and offer help to any team member. All these have helped me to become a 
                            skillful Full-Stack Web Developer
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
