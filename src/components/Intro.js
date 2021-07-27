import React from 'react';

import styled, { css } from 'styled-components';

import {
  FaGithub,
  FaTwitter, FaMedium, FaAngellist,
  FaLinkedinIn,
} from 'react-icons/fa';
import ImgD from '../Images/Group.png';

const flexProp = css`
  display: flex;
  flex-direction: column;
`;

const commonFont = css`
  font-style: normal;
  font-weight: normal;
`;

const IntroStyle = styled.section`
  width: 1440px;
  height: 870px;
  left: 0px;
  top: 0px;

  background: #1C1A19;
  ${flexProp}

  @media only screen and (max-width: 600px) {
    ${flexProp}
    align-items: flex-start;
    padding: 120px 24px;

    width: 100%;
    height: 590px;
    left: 0px;
    top: 92px;
  }
`;

const IntroText = styled.div`
  position: relative;
  width: 566px;
  height: 160px;
  left: -170px;
  top: 122px;

  font-family: Crete Round;
  ${commonFont}
  font-size: 72px;
  line-height: 71px;
  /* or 113% */


  // color: #F55800;
  color: #FF985C;


  /* Inside Auto Layout */

  flex: none;
  order: 0;
  align-self: center;
  flex-grow: 0;
  margin: 0px 24px;

  @media only screen and (max-width: 600px) {
    position: static;
    width: 327px;
    height: auto;
    margin-right: -10px !important;
    top: 120px;

    font-family: Crete Round;
    ${commonFont}
    font-size: 56px;
    line-height: 64px;
    /* or 114% */

    letter-spacing: 0.37px;

    /* Theme 3 / Primary 1 */

    color: #FF6B00;

    /* Inside Auto Layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 12px;
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

  @media only screen and (max-width: 600px) {
    position: absolute;
    width: 100%;
    height: auto;
    top: 300px;
    left: 15px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    /* or 133% */

    display: flex;
    align-items: center;

    /* Theme 3 / Primary 4 */

    color: #FFF5E1;

    /* Inside Auto Layout */

    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 12px;
  }
`;

const Description = styled.div`
  position: relative;
  width: 566px;
  height: 123px;
  left: -170px;
  top: -350px;
  

  font-family: Inter;
  ${commonFont}
  font-size: 20px;
  line-height: 30px;
  /* or 160% */


  /* Neutrals/N20 */

  color: #F4F5F7;
  box-sizing: border-box;

  /* Inside Auto Layout */

  flex: none;
  order: 2;
  align-self: center;
  flex-grow: 0;
  margin: 0px 24px;

  @media only screen and (max-width: 600px) {
    position: absolute;
    width: 100%;
    height: auto;
    left: 2px;
    top: 340px;

    /* Theme 1 / Body Reguler 2 */

    font-family: Poppins;
    ${commonFont}
    font-size: 16px;
    line-height: 24px;
    /* or 150% */


    /* Theme 3 / Neutral 11 */

    color: #FFFFFF;

    /* Inside Auto Layout */

    flex: none;
    order: 2;
    flex-grow: 0;
    margin: 0px 12px;
  }
  @media only screen and (max-width: 600px) {
    left: -10px;
  }
`;

const SocialLinks = styled.ul`
  position: relative;
  top: -200px;
  height: 100%;
  @media only screen and (max-width: 600px) {
    display: flex;
    height: 100px;
    position: relative;
    left: -50px;
    top: 180px;
    
  }
`;

const SLinks = styled.li`
  color: #CFCFCF;
  margin: 6px;
`;

const AColor = styled.a`
  color: #CFCFCF;

  &:hover {
    color: white;
  }

  @media only screen and (max-width: 600px) {
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
  background-color: #FF985C;

  @media(max-width: 768px) {
    display: none;
  }

  @media(main-width: 770px) {
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

  @media only screen and (max-width: 600px) {
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
  background-color: #FF985C;

  @media only screen and (max-width: 600px) {
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

  @media only screen and (max-width: 600px) {
    width: 150px;
    top: 70%;
    transform: matrix(0.96, 0.27, 0.27, -0.96, 0, 0);
  }
`;

const Span = styled.span`
  color: #FF985C;
`;
const Intro = () => (
  <IntroStyle>
    <IntroText>
      <Span>Hi, there. I&apos;m Daniel</Span>
    </IntroText>
    <SupportText>
      I&apos;m a software developer
    </SupportText>
    <Description>
      Hello I’m a software developer! I can help you build a product ,
      feature or website. Take a look at some of my work and experience! If you like what you
      see and have a project you need coded, don’t hesitate to contact me.
    </Description>
    <Design1 />
    <Design2 />
    <Design3 />
    <SocialLinks>
      <SLinks>
        <AColor href="https://github.com/addod19" target="_blank" rel="noopener noreferrer" className="s-links animTop">
          <FaGithub className="rot" />
        </AColor>
      </SLinks>
      <SLinks>
        <AColor href="https://twitter.com/DanielLarbiAdd1" target="_blank" rel="noopener noreferrer" className="s-links animTop">
          <FaTwitter />
        </AColor>
      </SLinks>
      <SLinks>
        <AColor href="https://angel.co/u/daniel-larbi-addo" target="_blank" rel="noopener noreferrer" className="s-links animTop">
          <FaAngellist className="rotate" />
        </AColor>
      </SLinks>
      <SLinks>
        <AColor href="https://medium.com/@addodaniellarbi" target="_blank" rel="noopener noreferrer" className="s-links animTop">
          <FaMedium />
        </AColor>
      </SLinks>
      <SLinks>
        <AColor href="https://www.linkedin.com/in/daniel-larbi-addo/" target="_blank" rel="noopener noreferrer" className="s-links animTop">
          <FaLinkedinIn />
        </AColor>
      </SLinks>

    </SocialLinks>
    <Design1 />
    <Design2 />
    <Design3 />
    <ImgDesign src={ImgD} alt="helper design" />
  </IntroStyle>
);

export default Intro;
