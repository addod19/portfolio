import React from 'react';

import styled from 'styled-components';
import DesignHub from '../Images/designhub.png';
import FindMe from '../Images/fm.png';

const AboutMeWrap = styled.section`
  width: 1440px;
  height: 800px;

  background: #262626;

  @media only screen and (max-width: 600px)  {
    width: 100%;
    height: 1400px;
    display: flex;
    flex-direction: column;
    // border: 1px solid red;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    // width: 100%;
  }

`;

const FirstRow = styled.div`
  height: 50% ;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    // width: 100%;
    border: 1px solid white;
  }

  // @media(min-width: 770px) {
  //   height: auto;
  // }
`;
const SecondRow = styled.div`
  height: 50%;
  margin-left: 10%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;

  @media only screen and (max-width: 600px) {
    margin-left: 0px;
    margin-top: 5px;
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

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-left: 0;
  }
`;
const Language = styled.div`
  @media(max-width: 769px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
const LHead = styled.h3`
  color: white;
  display: flex;
  flex-direction: row;
  @media(max-width: 769px) {
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
const FrameWorks = styled.div`
  @media(max-width: 769px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
const FHead = styled.h3`
  color: white;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
`;

const FList = styled.div`
  color: white;
`;
const Skills = styled.div`
  @media(max-width: 769px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
const SHead = styled.h3`
  color: white;
  display: flex;
  flex-direction: row;

  @media(max-width: 769px) {
    justify-content: center;
  }
`;

const SList = styled.div`
  color: white;
`;

const TextCol = styled.div`
  margin-top: 20%;
  width: 100%;
  height: auto;

  @media(max-width: 769px) {
    width: 100%;
    height: 300px;
  }
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


  color: #F55800;


  /* Inside Auto Layout */

  flex: none;
  order: 0;
  align-self: center;
  flex-grow: 0;
  margin: 0px 24px;

  @media only screen and (max-width: 600px) {
    width: 100%;
    height: auto;
    font-size: 60px;
    margin: 0px;
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
  @media(max-width: 768px) and (min-width: 400px) {
    width: 100%;
    margin-left: 0;
    border: none;
  }
`;
const ImgCol = styled.img`
  margin-top: 10%;

  @media (min-width: 768px) and (max-width: 1024px) {
    position: absolute;
    width: 100px;
    left: 300px;
    margin-top: 30%;
  }
`;

const SmallImg = styled.img`
  position: relative;
  bottom: 60px;
  width: 200px;
  -webkit-transform:rotate(25deg);
  -moz-transform: rotate(25deg);
  -ms-transform: rotate(25deg);
  -o-transform: rotate(25deg);
  transform: rotate(25deg);

  @media (min-width: 768px) and (max-width: 1024px) {

  }
`;

const RotateRec = styled.div`
  position: static;
  width: 18px;
  height: 18px;
  left: 12px;
  top: 20.73px;

  background: #F55800;
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

  background: #F55800;

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

  background: #F55800;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  align-self: center;
  flex-grow: 0;
  margin: 12px 0px;
  border-radius: 40%;
`;
const Skill = styled.div``;
const DesignC = styled.div`
  border: 1px solid green;
  width: 100%;

  @media(max-width: 769px) and (min-width: 400px) {
    height: 520px;
    border: none;
    left: -7px;
  }

  @media(min-width: 770px) {
    border: none;
    height: auto;
    left: 0;
    border: 1px solid white;
  }
`;
const Col1 = styled.div`
  width: 50%;
  height: 500px;
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 400px;
    overflow: hidden;
  }
`;
const Col2 = styled.div`
  width: 50%;
  height: 500px;
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 500px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 200px;
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
  justify-items: center;
  height: 250px;
  margin-top: 20px;
  width: 100%;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    border: none;
    height: 450px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
    display: flex;
  }
`;
const Lan = styled.div`
  height: 150px;

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-left: 0px;
    padding: 40px;
    height: auto;
  }
`;
const Fram = styled.div`
  height: 150px;

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-left: 0px;
    padding: 40px;
    height: auto;
  }
`;
const Skll = styled.div`
  height: 150px;

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-left: 0px;
    padding: 40px;
    height: auto;
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

  @media only screen and (max-width: 600px) {
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
  background-color: #F55800;

  @media only screen and (max-width: 600px) {
    display: none;
  }

`;

const FStack = styled.h2`
  @media only screen and (max-width: 600px) {
    position: relative;
    left: -200px;
    width: 50%;
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
            feature or website Look through some of my work and experience!
            If you like what you see and have a project you need coded, don’t
            hesitate to contact me.
          </MyDescription>
          {/* <h2>Full Stack Developer</h2> */}
          <Design1></Design1>
          <Design2></Design2>
          <Design3></Design3>
          <FStack>Full Stack Developer</FStack>
        </Col1>
        <Col2>
          <ImgCol src={DesignHub} alt="" />
          <SmallImg src={FindMe} alt="" />
        </Col2>
      </Row1>
      <Divider></Divider>
      <Row2>
        <Lan>
          <LHead>
            <RotateRec></RotateRec>
            <Lang>Language</Lang>
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
          <FList>React/Redux</FList>
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