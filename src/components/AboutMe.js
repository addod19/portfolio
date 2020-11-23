import React from 'react';

import styled from 'styled-components';

import ImgAbt from '../Images/group1.png';

const AboutMeWrap = styled.section`
  width: 1440px;
  height: 800px;

  background: #262626;

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
  }
`;

const Divider = styled.div`  
  height: 0px;
  left: 0px;
  right: 0px;
  top: calc(50% - 0px/2 + 0.5px);
  width: 80%;
  margin-left: 5%;

  border: 1px solid #FFFFFF;

  @media only screen and (max-width: 600px) {
    margin-left: 0;
  }
`;

const LHead = styled.h3`
  color: white;
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 600px) {
    justify-content: center;
  }

`;
const Lang = styled.div`
  margin: 2px;
`;

const Framwork = styled.div`
  margin: 2px;
`;
const LList = styled.div`
  color: white;

  @media(max-width: 769px) {
    justify-content: center;
  }
`;

const FHead = styled.h3`
  color: white;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 600px) {
    justify-content: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 12px;

    position: static;
    width: 281px;
    height: auto;
    left: 0px;
    top: 0px;


    /* Inside Auto Layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 24px;
  }
`;

const FList = styled.div`
  color: white;
`;

const SHead = styled.h3`
  color: white;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
`;

const SList = styled.div`
  color: white;
`;

const About = styled.div`
  position: static;
  width: 566px;
  height: 78px;
  left: 0px;
  top: 130px;
  

  font-family: Crete Round;
  font-style: normal;
  font-weight: normal;
  font-size: 72px;
  line-height: 72px;
  /* or 113% */


  color: #FF985C;


  /* Inside Auto Layout */

  flex: none;
  order: 0;
  align-self: center;
  flex-grow: 0;
  margin: 0px 24px;

  @media only screen and (max-width: 600px) {
    width: 140%;
    height: auto;
    font-size: 60px;
    margin-left: -35px;
  }
`;
const MyDescription = styled.div`
  z-index: 1;
  magin-left: 0px;

  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  /* or 160% */


  /* Neutrals/N20 */

  color: #F4F5F7;

  /* Inside Auto Layout */

  flex: none;
  order: 1;
  align-self: center;
  flex-grow: 0;
  margin: 0px 24px;
  @media only screen and (max-width: 600px) {
    width: 130%;
    margin-left: -40px;
  }
`;


const RotateRec = styled.div`
  position: static;
  width: 18px;
  height: 18px;
  left: 16px;
  top: 20.73px;
  z-index: 1;
  background: #FF985C;
  transform: rotate(-45deg);

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  align-self: center;
  flex-grow: 0;
  margin: 12px 0px;
`;
const Rec = styled.div`
  position: static;
  width: 18px;
  height: 18px;
  left: 12px;
  top: 20.73px;

  background: #FF985C;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  align-self: center;
  flex-grow: 0;
  margin: 12px 0px;
`;
const Circle = styled.div`
  position: static;
  width: 18px;
  height: 18px;
  left: 12px;
  top: 20.73px;

  background: #FF985C;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  align-self: center;
  flex-grow: 0;
  margin: 12px 0px;
  border-radius: 40%;
`;
const Skill = styled.div``;

const Col1 = styled.div`
  width: 50%;
  height: 500px;
  padding: 50px;
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: auto;
  }
`;
const Col2 = styled.div`
  width: 50%;
  height: 500px;
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: auto;
  }
`;
const Row1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
  }
`;
const Row2 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  margin-left: 70px;
  height: 250px;
  margin-top: 20px;
  width: 100%;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    border: none;
    height: auto;
    margin-left: 0;
  }

`;
const Lan = styled.div`
  height: 150px;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;

    position: static;
    width: 225.46px;
    height: auto;
    left: 51.77px;
    top: 120px;


    /* Inside Auto Layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 24px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-left: 0px;
    padding: 40px;
    height: auto;
  }
`;
const Fram = styled.div`
  height: auto;

  @media only screen and (max-width: 600px) {

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;

    position: static;
    width: 281px;
    height: auto;
    left: 24px;
    top: 425.46px;


    /* Inside Auto Layout */

    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 24px;

  }
`;
const Skll = styled.div`
  height: 150px;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;

    position: static;
    width: 169px;
    height: auto;
    left: 80px;
    top: 785.46px;


    /* Inside Auto Layout */

    flex: none;
    order: 2;
    flex-grow: 0;
    margin: 0px 24px;
  }
`;


const FStack = styled.h2`
  @media only screen and (max-width: 600px) {
    position: relative;
    left: -300px;
    TOP: 30px;
    width: 100%;
  }
`;

const ImgDesign = styled.img`
  display: flex;
  margin-top: 50px;
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-left: 50%;
    margin-top: 0;
  }
`;
const Resume = styled.div`
  width: 150px;
  height: 40px;
  padding: 5px;
  background-color: #FF985C;
  color: white;
  margin-left: 23px;
  &:hover {
    border-radius: 20px;
  }

  @media only screen and (max-width: 600px) {
    margin-left: -35px;
    position: relative;
    bottom: -50px;
  }
`;

const ResLink = styled.a`
  margin-left: 6%;
  color: white;
  &:hover {
    text-decoration: none;
    color: grey;
  }
`;
const AboutMe = () => {
  return (
    <AboutMeWrap id="about">
      <Row1>
        <Col1>
          <About>About Me</About>
          <MyDescription>
            Hello I’m a software developer! I can help you build a product ,
            feature or website. Take a look at some of my work and experience!
            So if you'd like to work together, please get in touch.
          </MyDescription>
          <FStack>Full Stack Developer</FStack>
          <Resume>
            <ResLink target="_blank" rel="noopener noreferrer"
              href="https://docs.google.com/document/d/15ORaVl9x50n_nSYa0_JAnQvXzvONjBF4qSuVUqk5_hg/edit">
              View My Resume
            </ResLink>
          </Resume>
        </Col1>
        <Col2>
          <ImgDesign src={ImgAbt} alt="helper design" />
        </Col2>
      </Row1>
      <Divider></Divider>
      <Row2>
        <Lan>
          <LHead>
            <RotateRec></RotateRec>
            <Lang>Languages</Lang>
          </LHead>
          <LList>JavaScript</LList>
          <LList>Ruby</LList>
          <LList>HTML</LList>
          <LList>CSS</LList>
        </Lan>
        <Fram>
          <FHead>
            <Rec></Rec>
            <Framwork>FrameWorks</Framwork>
          </FHead>
          <FList>Ruby on Rails</FList>
          <FList>React</FList>
          <FList>Redux</FList>
          <FList>Boostrap</FList>
          <FList>Material UI</FList>
        </Fram>
        <Skll>
          <SHead>
            <Circle></Circle>
            <Skill>Skills</Skill>
          </SHead>
          <SList>GitHub</SList>
          <SList>Terminal</SList>
          <SList>GitLab</SList>
          <SList>Heroku</SList>
        </Skll>
      </Row2>
    </AboutMeWrap>
  );
}

export default AboutMe;