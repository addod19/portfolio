import React from 'react';

import styled from 'styled-components';

import rails from '../../src/Images/fb.png';

const FirstRow = styled.div`
  display: flex;
  margin-left: 10%;
`;

const Divider = styled.div`
position: static;
width: 794px;
height: 0px;
left: 339px;
top: 26px;

border: 1px solid #212121;

/* Inside Auto Layout */

flex: none;
order: 1;
align-self: center;
flex-grow: 0;
margin: 24px 0px;
`;

const MainRow = styled.div`
  display: flex;
  border: 1px solid red;
  width: 80%;
  margin-left: 10%;
  height: 448px;
`;

const SeeProject = styled.div``;
const ImageWrap = styled.div`
  // width: 60%;
  // height: 400px;
  position: static;
  width: 584px;
  height: 400px;
  left: 0px;
  top: 0px;
  border: 1px solid green;
  background: url('../images/fb.png');

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  align-self: center;
  flex-grow: 0;
  margin: 24px 0px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border: 1px solid yellow;
`;

const Details = styled.section`
  width: 50%;
  height: 100%;
`;

const Header = styled.h2`
position: static;
width: 448px;
height: 48px;
left: 0px;
top: 0px;

font-family: Crete Round;
font-style: normal;
font-weight: normal;
font-size: 40px;
line-height: 52px;
/* or 130% */

display: flex;
align-items: center;

/* Neutrals/N900 */

color: #091E42;

/* Inside Auto Layout */

flex: none;
order: 0;
align-self: center;
flex-grow: 0;
margin: 0px 24px;
`;

const Description = styled.div`
// position: static;
width: 448px;
height: 140px;
left: 0px;
top: 72px;

font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 28px;
/* or 140% */


/* Neutrals/N900 */

color: #091E42;

/* Inside Auto Layout */

flex: none;
order: 1;
align-self: center;
flex-grow: 0;
margin: 0px 24px;
`;

const Skills = styled.ul`
  
`;

const Skill1 = styled.li`
  
`;
const H1 = styled.h1`
  position: static;
  width: 315px;
  height: 52px;
  left: 0px;
  top: 0px;

  font-family: Crete Round;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 52px;
  /* identical to box height, or 130% */

  display: flex;
  align-items: center;

  /* Neutrals/N900 */

  color: #091E42;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  align-self: center;
  flex-grow: 0;
  margin: 24px 0px;
`;

const MoreProjects = styled.section`
  width: 80%;
  margin-left: 10%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  margin-top: 20px;
`;

const Pro1 = styled.div`
  width: 100%;
  height: 320px;
  
  border: 1px solid violet;
`;
const RecentWorks = () => {
  return (
    <React.Fragment>
      <FirstRow>
        <H1>My Recent Works</H1>
        <Divider></Divider>
      </FirstRow>
      <MainRow>
        <ImageWrap>
          <Img src={rails} alt="" />
        </ImageWrap>
        <Details>
          <Header>Top Project</Header>
          <Description>
            this is a cool project by Daniel this is a cool project by Daniel this is a cool project by Daniel 
            this is a cool project by Daniel this is a cool project by Daniel
            this is a cool project by Daniel this is a cool project by Daniel
          </Description>
          <Skills>
            <Skill1 >Ruby</Skill1>
            <Skill1 >JAVASCRIPT</Skill1>
            <Skill1 >RAILS</Skill1>
          </Skills>
          <SeeProject>See Project</SeeProject>
        </Details>
      </MainRow>
      <MoreProjects>
        <Pro1></Pro1>
        <Pro1></Pro1>
        <Pro1></Pro1>
        <Pro1></Pro1>
        <Pro1></Pro1>
      </MoreProjects>
    </React.Fragment>
  );
}
 
export default RecentWorks;