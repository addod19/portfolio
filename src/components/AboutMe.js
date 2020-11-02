import React from 'react';

import styled from 'styled-components';
import DesignHub from '../Images/designhub.png';
import FindMe from '../Images/fm.png';

const AboutMeWrap = styled.section`
  width: 1440px;
  height: 1195px;
  left: 0px;
  top: 2680px;

  background: #262626;

`;

const FirstRow = styled.div`
  // border: 1px solid white;
  height: 50% ;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const SecondRow = styled.div`
  // border: 1px solid red;
  height: 50%;
  margin-left: 10%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
`;
const Divider = styled.div`  
  height: 0px;
  left: 0px;
  right: 0px;
  top: calc(50% - 0px/2 + 0.5px);
  width: 80%;
  margin-left: 5%;

  border: 1px solid #FFFFFF;
`;
const Language = styled.div`

`;
const LHead = styled.h3`
  color: white;
  display: flex;
  flex-direction: row;
  border: 1px solid white;
`;
const Lang = styled.div`
  margin: 2px;
`;
const LList = styled.div`
  color: white;
`;
const FrameWorks = styled.div`

`;
const FHead = styled.h3`
  color: white;
`;

const FList = styled.div`
  color: white;
`;
const Skills = styled.div`

`;
const SHead = styled.h3`
  color: white;
`;

const SList = styled.div`
  color: white;
`;

const TextCol = styled.div`
  margin-top: 20%;
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
`;
const MyDescription = styled.div`
  position: static;
  width: 566px;
  height: 148px;
  left: 0px;
  top: 232px;

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
`;
const ImgCol = styled.img`
  margin-top: 10%;
`;

const SmallImg = styled.img`
  position: relative;
  left: 620px;
  bottom: 80px;
  width: 200px;
  -webkit-transform:rotate(25deg);
  -moz-transform: rotate(25deg);
  -ms-transform: rotate(25deg);
  -o-transform: rotate(25deg);
  transform: rotate(25deg);
`;

const RotateRec = styled.div`
osition: static;
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
const AboutMe = () => {
  return (
    <AboutMeWrap>
      <FirstRow>
        <TextCol>
          <About>About Me</About>
          <MyDescription>
          Hello I’m a software developer! I can help you build a product , 
          feature or website Look through some of my work and experience! 
          If you like what you see and have a project you need coded, don’t 
          hestiate to contact me.
          </MyDescription>
        </TextCol>
        <ImgCol src={DesignHub} alt="" />
        <SmallImg src={FindMe} alt="" />
      </FirstRow>
      <Divider></Divider>
      <SecondRow>
        <Language>
          <LHead>
            <RotateRec></RotateRec>
            <Lang>Language</Lang>
          </LHead>
          <LList>JavaScript</LList>
          <LList>Ruby</LList>
          <LList>HTML</LList>
          <LList>CSS</LList>
        </Language>
        <FrameWorks>
          <FHead>FrameWorks</FHead>
          <FList>Ruby on Rails</FList>
          <FList>React/Redux</FList>
          <FList>Boostrap</FList>
          <FList>Material UI</FList>
        </FrameWorks>
        <Skills>
          <SHead>Skills</SHead>
          <SList>GitHub</SList>
          <SList>Terminal</SList>
          <SList>GitLab</SList>
          <SList>Heroku</SList>
        </Skills>
      </SecondRow>
    </AboutMeWrap>
  );
}
 
export default AboutMe;