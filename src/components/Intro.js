import React from 'react';

import styled from 'styled-components';

const IntroStyle = styled.section`
  width: 1440px;
  height: 870px;
  left: 0px;
  top: 0px;

  background: #1C1A19;

  display: flex;
  flex-direction: column;

`;

const IntroText = styled.div`
  position: relative;
  width: 566px;
  height: 160px;
  left: 0px;
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
`;

const supportText = styled.div`
// position: static;
width: 566px;
height: 24px;
left: 0px;
top: 376px;

font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 32px;
line-height: 20px;
/* or 137% */

display: flex;
align-items: center;

color: #FFFFFF;
  flex: none;
  order: 0;
  align-self: center;
  flex-grow: 0;
  margin: 0px 24px;
`;

const Description = styled.div`
position: static;
width: 566px;
height: 123px;
left: 0px;
top: 424px;

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
order: 2;
align-self: center;
flex-grow: 0;
margin: 0px 24px;
`;

const SocialLinks = styled.ul`
`;

const SLinks = styled.li`

`;
const Intro = () => {
  return (
    <IntroStyle>
      <IntroText>
        <span className="mt-5">Hi, there. I'm Daniel</span>
      </IntroText>
      <supportText>
        I'm a software developer
      </supportText>
      <Description>
      Hi, I am Daniel, currently working as a Technical Support Engineer
      @Microverse. I am also open to new challenges in software development roles.
      Kindly follow my works, words, and photos below
      </Description>
      <SocialLinks>
        <SLinks>first</SLinks>
        <li>second</li>
        <li>third</li>
      </SocialLinks>
    </IntroStyle>
  );
}
 
export default Intro;