import React from 'react';

import styled from 'styled-components';

import {
   FaGithub,
  FaTwitter, FaFacebook, FaMedium, FaAngellist,
  FaHandPointRight, FaLinkedinIn,
} from 'react-icons/fa';
import ImgD from '../Images/Group.png';

const IntroStyle = styled.section`
  width: 1440px;
  height: 870px;
  left: 0px;
  top: 0px;

  background: #1C1A19;

  display: flex;
  flex-direction: column;

  @media(max-width: 768px) {
    width: 100%;
    display: flex;
  }
  @media (min-width:500px) {
    border: none;
  }
`;

const IntroText = styled.div`
  position: relative;
  width: 566px;
  height: 160px;
  left: -170px;
  top: 122px;

  font-family: Crete Round;
  font-style: normal;
  font-weight: normal;
  font-size: 72px;
  line-height: 71px;
  /* or 113% */


  color: #F55800;


  /* Inside Auto Layout */

  flex: none;
  order: 0;
  align-self: center;
  flex-grow: 0;
  margin: 0px 24px;

  @media(max-width: 768px) {
    font-size: 40px;
    width: 100%;
    top: 70px;
    left: 10px;
  }
`;

const SupportText = styled.div`
  position: relative;
  
  width: 566px;
  height: 40px;
  left: -170px;
  top: -380px;


  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 30px;
  /* or 137% */

  display: flex;
  align-items: center;

  color: #FFFFFF;


  /* Inside Auto Layout */

  flex: none;
  order: 1;
  align-self: center;
  flex-grow: 0;
  margin: 0px 24px;

  @media(max-width: 768px) {
    width: 100%;
    top: -450px;
    left: 10px;
  }
`;

const Description = styled.div`
  position: relative;
  width: 566px;
  height: 123px;
  left: -170px;
  top: -350px;


  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  /* or 160% */


  /* Neutrals/N20 */

  color: #F4F5F7;

  /* Inside Auto Layout */

  flex: none;
  order: 2;
  align-self: center;
  flex-grow: 0;
  margin: 0px 24px;

  @media(max-width: 768px) and (min-width: 400px) {
    width: 100%;
    height: 200px;
    top: -380px;
    left: 5px;
    border: none;
  }
`;

const SocialLinks = styled.ul`
  position: relative;
  top: -200px;
  height: 100%;
  @media(max-width: 768px) {
    transform: rotate(90deg);
    position: relative;
    top: 350px;
    left: 0px;
    width: 250px;
  }
`;

const SLinks = styled.li`
  color: #CFCFCF;
`;

const AColor = styled.a`
  color: #CFCFCF;

  &:hover {
    color: white;
  }

  @media(max-width: 768px) {
    transform: rotate(100deg);
  }
`;

const Design1 = styled.div`
  width: 100px;
  height: 60px;
  border: none;
  position: relative;
  left: 160px;
  transform: rotate(60deg);
  background-color: #F55800;

  @media(max-width: 768px) {
    display: none;
  }
`;
const Design2 = styled.div`
  width: 100px;
  height: 60px;
  border: none;
  position: relative;
  left: 160px;
  transform: rotate(60deg);
  background-color: white;

  @media(max-width: 768px) {
    display: none;
  }
`;
const Design3 = styled.div`
  width: 100px;
  height: 60px;
  border: none;
  position: relative;
  left: 160px;
  transform: rotate(60deg);
  background-color: #F55800;

  @media(max-width: 768px) {
    display: none;
  }
`;
const Design4 = styled.div`
  width: 100px;
  height: 60px;
  border: none;
  position: relative;
  right: -1100px;
  transform: rotate(60deg);
  background-color: white;

  @media(max-width: 768px) {
    display: none;
  }
`;
const Design5 = styled.div`
  width: 100px;
  height: 60px;
  border: none;
  position: relative;
  right: -1100px;
  transform: rotate(60deg);
  background-color: #F55800;
`;
const Design6 = styled.div`
  width: 100px;
  height: 60px;
  border: none;
  position: relative;
  right: -1100px;
  transform: rotate(60deg);
  background-color: white;

  @media(max-width: 768px) {
    display: none;
  }
`;
const ImgDesign = styled.img`
  position: absolute;
  left: 65.74%;
  right: -30.09%;
  top: 1.3%;
  bottom: -11.63%;

  transform: matrix(-0.96, 0.27, 0.27, 0.96, 0, 0);

  @media (max-width:800px) {
    display: none;
  }
`;
const Intro = () => {
  return (
    <IntroStyle>
      <IntroText>
        <span className="mt-5">Hi, there. I'm Daniel</span>
      </IntroText>
      <SupportText>
        I'm a software developer
      </SupportText>
      <Description>
      Hello I’m a software developer! I can help you build a product , 
      feature or website. Look through some of my work and experience! 
      If you like what you see and have a project you need coded, don’t 
      hestiate to contact me.
      </Description>
      <Design1></Design1>
      <Design2></Design2>
      <Design3></Design3>
      <SocialLinks>
        <SLinks>
          <AColor href="https://github.com/addod19" target="_blank" rel="noopener noreferrer" className="s-links animTop">
            <FaGithub className="rot"/>
          </AColor>  
        </SLinks>
        <SLinks>
          <AColor href="https://twitter.com/DanielLarbiAdd1" target="_blank" rel="noopener noreferrer" className="s-links animTop">
            <FaTwitter />
          </AColor>  
        </SLinks>
        <SLinks>
        <AColor href="https://angel.co/u/daniel-larbi-addo" target="_blank" rel="noopener noreferrer" className="s-links animTop">
          <FaAngellist  className="rotate" />
        </AColor>  
        </SLinks>
        <li>
        <AColor href="https://medium.com/@addodaniellarbi" target="_blank" rel="noopener noreferrer" className="s-links animTop">
          <FaMedium />
        </AColor> 
        </li>
        <li>
        <AColor href="https://www.linkedin.com/in/daniel-larbi-addo/" target="_blank" rel="noopener noreferrer" className="s-links animTop">
          <FaLinkedinIn />
        </AColor> 
        </li>
        <SLinks>
          <AColor href="https://github.com/addod19" target="_blank" rel="noopener noreferrer" className="s-links animTop">
            <FaFacebook />
          </AColor>  
        </SLinks>
      </SocialLinks>
      <Design1></Design1>
      <Design2></Design2>
      <Design3></Design3>
      <ImgDesign src={ImgD} alt="" />
      {/* <Design4></Design4>
      <Design5></Design5>
      <Design6></Design6> */}
    </IntroStyle>
  );
}
 
export default Intro;