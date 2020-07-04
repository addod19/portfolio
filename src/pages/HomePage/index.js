import React, { Component } from 'react';

import profile__image from '../../Images/free.jpg';
import './style.css';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <h2 className="text__center  col-12">
                    <span className="dan"> I'm </span> 
                    <span className="special">
                        Daniel Larbi Addo
                    </span>
                    <span className="full__stack">
                        a <span className="dev">Full-Stack Web Developer</span>
                    </span>
                </h2>
                <div className="about__div">
                    <div className="profile__wrap">
                        <img src={profile__image} alt="" className="profile_img"/>
                    </div>
                    <div className="story__wrap">
                        <h2  className="text__center bgInfo"> BackGround</h2>
                        <p>I joined Microverse; remote school for software developers in June 2019.
                            During this period I learned the following stack: HTML/CSS, Ruby, Databases,
                            Ruby on Rails, Javascript, React/Redux along with DS&A and Professional 
                            Skills while studying and building projects collaboratively and individually.
                            Each morning I meet up with my team, discuss what our targets are during the
                            day, and how we will achieve them. After 8 hours of learning and coding,
                            I meet up with my team to discuss the days' progress, what goal achieved, 
                            and offer help to any team member. All these have helped me to become a 
                            skillful Full-Stack Web Developer
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
