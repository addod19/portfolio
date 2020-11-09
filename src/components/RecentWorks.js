import React from 'react';

import styled from 'styled-components';

import rails from '../../src/Images/fb.png';
import free from '../../src/Images/bgq.png';
import game from '../../src/Images/ga.png';
import recipe from '../../src/Images/rec.png';
import book from '../../src/Images/cms.png';
import calc from '../../src/Images/cac.png';

import {
  FaHtml5, FaCss3Alt, FaDatabase, FaJs, FaReact, FaGithub,
   FaMailBulk, FaCode,
} from 'react-icons/fa';

const Recent = styled.div`
  width: 100%;

  @media only screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    
  }
`;

const FirstRow = styled.div`
  display: flex;
  margin-left: 10%;

  @media(max-width: 768px) {
    display: grid;
    grid-template-column: 1fr;
  }
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

  @media(max-width: 768px) {
    width: 90%;
    left: 10%;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-left: -20px;
  }
`;

const MainRow = styled.div`
  display: flex;
  width: 80%;
  margin-left: 10%;
  height: 448px;

  @media(max-width: 768px) {
    display: gird;
    grid-template-columns: 1fr;
    height: auto;
  }

  @media (min-width:500px) {
    width: 100%;
    height: auto;
    display: flex;
    margin: 0px;
    
  }
`;

const SeeProject = styled.a`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 12px 0px 0px 12px;

  position: static;
  width: 124px;
  height: 48px;
  left: 0px;
  top: 300px;

  background: #F55800;
  color: black;
  &:hover {
    color: white;
  }
  border-radius: 10px;

  /* Inside Auto Layout */

  flex: none;
  order: 3;
  align-self: flex-start;
  flex-grow: 0;
  margin: 0px 24px;
  @media(max-width: 769px) and (min-width: 400px) {
    display: grid;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    color: black;
    
  }
`;
const ImageWrap = styled.div`
  position: static;
  width: 584px;
  height: 400px;
  left: 0px;
  top: 0px;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  align-self: center;
  flex-grow: 0;
  margin: 24px 0px;

  @media(max-width: 768px) {
    width: 100%;
    height: 237px;
    left: 24px;
    top: 0px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Details = styled.section`
  width: 50%;
  height: 100%;

  @media(max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const Header = styled.h2`
  position: static;
  width: 448px;
  height: auto;
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

  @media only screen and (max-width: 600px){
    font-size: 22px;
    color: #F55800;
    margin-left: 0px;
  }
`;

const Description = styled.div`
  width: 448px;
  height: auto;
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
  @media only screen and (max-width: 600px){
    width: 100%;
    height: auto;
    margin: 0px;
    padding: 5px;
    font-size: 16px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-left: -35px;
    font-size: 17px;
    padding: 20px;
  }
`;

const Skills = styled.ul`
  display: flex;
  margin-top: 15px;
  left: 0;

  @media only screen and (max-width: 600px) {
    width: 100%;
    display: flex;
  }
`;

const Skill1 = styled.li`
  font-size: 18px;
  width: 80px;
  display: flex;
  justify-content: center;
  margin: 2px;
  background: #FFFFFF;
  /* Neutrals/N90 */

  border: 1px solid #8993A4;

  @media only screen and (max-width: 600px) {
    width: auto;
    font-size: 15px;
    padding: 2px;
  }
  
`;
const Skill2 = styled.li`
  font-size: 18px;
  width: 150px;
  display: flex;
  justify-content: center;
  margin: 2px;
  background: #FFFFFF;
  /* Neutrals/N90 */

  border: 1px solid #8993A4;

  @media only screen and (max-width: 600px) {
    width: auto;
    font-size: 15px;
    padding: 2px;
  }
`;
const Skill3 = styled.li`
  font-size: 18px;
  width: 80px;
  display: flex;
  justify-content: center;
  margin: 2px;
  background: #FFFFFF;
  /* Neutrals/N90 */

  border: 1px solid #8993A4;

  @media only screen and (max-width: 600px) {
    width: auto;
    font-size: 15px;
    padding: 2px;
  }

`;
const H1 = styled.h1`
  position: static;
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  height: auto;
  margin: 20px;
  @media(max-width: 769px) {
    width: 100%;
    height: auto;
    grid-template-columns: 1fr;
    margin: 0px;
    margin-top: 20px;
  }
`;

const Pro1 = styled.div`
  width: 100%;
  height: 400px;
  background: url(${game});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  border-radius: 5px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  
  // border: 1px solid violet;
`;
const Pro2 = styled.div`
  width: 100%;
  height: 400px;
  background: url(${book});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  border-radius: 5px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  
  // border: 1px solid violet;
`;
const Pro3 = styled.div`
  width: 100%;
  height: 400px;

  background: url(${recipe});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  border-radius: 5px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  
  // border: 1px solid violet;
`;
const Pro4 = styled.div`
  // width: 100%;
  // height: 320px;
  background: url(${calc});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  
  // border: 1px solid violet;
`;
const Pro5 = styled.div`
  // width: 100%;
  // height: 320px;
  background: url(${free});
  // background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  
  // border: 1px solid violet;
`;
const SeePro = styled.button`
  position: relative;
  width: 369px;
  height: 58px;
  left: 0px;
  top: -60px;

  background: #F55800;
`;

const Transparent = styled.div`
  border: 1px solid black;
  opacity: 0.5;
  background: black;
  height: 320px;
  width: 100%;
`;
const TitlePost = styled.div`
  width: 337px;
  height: 81px;
  left: 16px;
  top: 8px;

  font-family: Crete Round;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 44px;
  /* or 137% */


  /* Neutrals/N0 */

  color: #FFFFFF;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  align-self: center;
  flex-grow: 0;
  margin: 0px 24px;
`;

const Links = styled.div`
  width: 100%;
  height: 100px;
  // border: 1px solid blue;
  position: relative;
  top: 300px;
  background: #1C1A19;
`;

const AWrap = styled.div`
border: 1px solid black;
  height: 60%;
  margin-top: 10%;
  display: flex;
  justify-content: center;
  @media(min-width: 200px) {
    height: auto;
    margin-top: 25px;
    border: none;
  }
`;
const Code = styled.a`
  margin-left: 20px;
  margin-right: 20px;
  font-size: 30px;
  color: #F55800;
  &:hover {
    color: white;
  }
`;
const Live = styled.a`
  margin-left: 20px;
  margin-right: 20px;
  font-size: 30px;
  color: #F55800;
  &:hover {
    color: white;
  }
`;
const RecentWorks = () => {
  return (
    <React.Fragment>
      <Recent>
        <FirstRow className="row">
          <H1 className="col-md-5">My Recent Works</H1>
          <Divider className="col-md-7"></Divider>
        </FirstRow>
        <MainRow id="portfolio" className="row">
          <ImageWrap className="col-md-6 col-sm-12 col-xs-12">
            <Img src={rails} alt="" />
          </ImageWrap>
          <Details className="col-md-6 col-sm-12 col-xs-12">
            <Header>Social Media App  </Header>
            <Description>
              Welcome to Friendbook, a Facebook-like social network application. 
              This application has the functionalities of a social media application. 
              Authorized users are able to perform the [Features] stated in the section below. 
              The features of this application tend to mimic most basic features of the facebook
              social media application.
            </Description>
            <Skills>
              <Skill1 >Ruby</Skill1>
              <Skill2 >JS</Skill2>
              <Skill3 >RAILS</Skill3>
            </Skills>
            <SeeProject href="https://github.com/addod19/facebook-clone" target="_blank" rel="noopener noreferrer">
              See Project
            </SeeProject>
          </Details>
        </MainRow>
        <MoreProjects>
          <Pro1>
            <Links>
              <AWrap className="link">
                <Code title="github repo" target="_blank" rel="noopener noreferrer"
                  href="https://github.com/addod19/facebook-clone" className="s-icons"><FaGithub />
                </Code>
                <Live title="online version" target="_blank" rel="noopener noreferrer"
                  href="https://secret-sea-76381.herokuapp.com/" className="s-icons"><FaCode />
                </Live>
              </AWrap>
            </Links>
          </Pro1>
          <Pro2>
            <Links>
              <AWrap className="link">
                <Code title="github repo" target="_blank" rel="noopener noreferrer"
                  href="https://github.com/addod19/React-Bookstore" className="s-icons"><FaGithub />
                </Code>
                <Live title="online version" target="_blank" rel="noopener noreferrer"
                  href="https://redux-book.herokuapp.com/" className="s-icons"><FaCode />
                </Live>
              </AWrap>
            </Links>
          </Pro2>
          <Pro3>
            <Links>
              <AWrap className="link">
                <Code title="github repo" target="_blank" rel="noopener noreferrer"
                  href="https://github.com/addod19/redux_recipe" className="s-icons"><FaGithub />
                </Code>
                <Live title="online version" target="_blank" rel="noopener noreferrer"
                  href="https://redux-recipe.herokuapp.com/" className="s-icons"><FaCode />
                </Live>
              </AWrap>
            </Links>
          </Pro3>
          <Pro4></Pro4>
          <Pro5></Pro5>
          
        </MoreProjects>
      </Recent>
    </React.Fragment>
  );
}
 
export default RecentWorks;