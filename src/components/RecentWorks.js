import React, { useState } from 'react';

import styled from 'styled-components';

import game from '../../src/Images/ga.png';
import recipe from '../../src/Images/rec.png';
import book from '../../src/Images/cms.png';


import CustomModal from './CustomModal';
import Modal from 'react-modal';

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
  width: 90%;
  margin: auto;

  @media(max-width: 768px) {
    display: grid;
    grid-template-column: 1fr;
  }
`;

const Divider = styled.div`
  position: absolute;
  width: 894px;
  height: 0px;
  left: 380px;
  top: 952px;

  border: 1px solid #212121;

  /* Inside Auto Layout */

  flex: none;
  order: 1;
  align-self: center;
  flex-grow: 0;
  margin: 24px 0px;

  @media only screen and (max-width: 600px) {
    width: 90%;
    left: 10%;
    // border: 1px solid red;
    top: 680px;
    margin-left: -16px;
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
  height: 200px;

  /* Inside Auto Layout */

  // flex: none;
  // order: 0;
  // align-self: center;
  // flex-grow: 0;
  // margin: 24px 0px;

  // @media(max-width: 768px) {
  //   width: 100%;
  //   height: 237px;
  //   left: 24px;
  //   top: 0px;
  // }
`;

const Img = styled.img`
  width: 400px;
  // height: 100%;
  border: 1px solid red;
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

const Techs = styled.ul`
  display: flex;
  margin-top: 15px;
  left: 0;
  border: 0;

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

  @media only screen and (max-width: 600px) {
    position: relative;
    width: 100%;
    left: -40px;
    top: 0px;

    font-family: Crete Round;
    font-style: normal;
    font-weight: normal;
    font-size: 34px;
    line-height: 52px;
    /* or 130% */

    display: flex;
    align-items: center;

    /* Theme 3 / Neutral 1 */

    color: #1C1A19;

    /* Inside Auto Layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 24px;
  }
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

`;

const Links = styled.div`
  width: 100%;
  height: 100px;
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

const Text = styled.div`
  position: absolute;
  width: 30.8%;
  height: 300px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 5rem 1rem;
  text-align: center;
  text-transform: capitalize;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
const LiveP = styled.a`
  display: flex;
  flex-direction: row;
  margin-left: 160px;
  margin-top: -20px;
  width: 15%;
  height: 40px;
  padding: 20px;
  background-color: #F55800;
  border: none;
  border-radius: 10px;
  color: black;
  padding: 2px;
  &:hover {
    color: white;
  }

  @media only screen and (max-width: 600px) {
    width: 40%;
    height: 30px;
  }
`;
const RecentW = styled.section`

@media only screen and (max-width: 600px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 0px;

  position: relative;
  width: 375px;
  height: 3455px;
  left: 0px;
  top: 682px;
}
`;

const SeePro = styled.button`
  background: #FF6B00;
`;
const ProjectW = styled.div`
  width: 90%;
  margin: auto;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

const Proj = styled.div`
  @media only screen and (max-width: 600px) {
    // border: 1px solid red;
    // margin-top: 40px;
    // margin-left: 30px;
  }
  
`;
const MobileImg = styled.div`
  @media only screen and (max-width: 600px) {
    // border: 1px solid black;
    position: relative;
    left: 0px;
    width: 100%;
    // height: 100%;
  }
`;

const Lang = styled.div`
  @media only screen and (max-width: 600px) {
    width: 100%;
    // border: 1px solid black;
    text-overflow: ellipsis;
  }
`;
const projects = [
  {
    image: '/Images/fb.png',
    alt: 'Facebook App',
    title: 'Facebook Clone',
    description: 'Authenticated user can post, comment, send/accept/reject friend request',
    codeLink: 'https://github.com/addod19/facebook-clone',
    liveUrl: 'https://secret-sea-76381.herokuapp.com/',
    tech: ['Rails', 'SCSS', 'OmniAuth', 'Bootstrap'],
  },
  {
    image: '/Images/rec.png',
    alt: 'Recipe App',
    title: 'Recipe App',
    description: 'This application allows any user to check for their favorite recipe and how to prepare it',
    codeLink: 'https://github.com/addod19/redux_recipe',
    liveUrl: 'https://redux-recipe.herokuapp.com/',
    tech: ['React', 'CSS3', 'Jest', 'Axios'],
  },
  {
    image: '/Images/ga.png',
    alt: 'Shooter Game',
    title: 'Shooter Game',
    description: 'A user enters their name and starts to enjoy the game.',
    codeLink: 'https://github.com/addod19/js_game_capstone',
    liveUrl: 'https://addod19.github.io/js_game_capstone/',
    tech: ['JS', 'Phaser', 'CSS3'],
  },
  {
    image: '/Images/cms.png',
    alt: 'BookStore',
    title: 'BookStore',
    description: 'This is a bootstrap project aimed at cloning the Intuit signin/signup page',
    codeLink: 'https://github.com/addod19/redux_recipe',
    liveUrl: 'https://redux-book.herokuapp.com/',
    tech: ['React', 'Redux', 'CSS3'],
  },
  {
    image: '/Images/todo.png',
    alt: 'Todo app',
    title: 'Todo',
    description: 'Applying the concepts of Single Responsibility and Loosely Coupled Objects while building our todo app.',
    codeLink: 'https://github.com/addod19/todo',
    liveUrl: 'https://addod19.github.io/todo/',
    tech: ['JavaScript', 'UI Kit', 'CSS3', 'HTML'],
  },
  {
    image: '/Images/newsw.png',
    alt: 'Newsweek',
    title: 'Newsweek clone',
    description: 'A practical demonstration of designing a website with bootstrap framework. ',
    codeLink: 'https://github.com/addod19/using-bootstrap',
    liveUrl: 'https://addod19.github.io/using-bootstrap/',
    tech: ['HTML5', 'CSS3', 'Bootstrap'],
  },
  
];


Modal.setAppElement("#root");
const RecentWorks = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState([0]);

  return (
    <Recent className="mb-3">
      <FirstRow className="row">
        <H1 className="col-md-5">My Recent Works</H1>
        <Divider className="col-md-7"></Divider>
      </FirstRow>
      <ProjectW className="row">
      {
            projects.map((project, projectIdx) => (
              
              <Proj key={projectIdx} className="col-md-4">
                <MobileImg className="ImgW">
                  <img src={project.image} alt={project.alt} className="img" />
                </MobileImg>
                <div className="">
                  <h4 className="text-center">{project.title}</h4>

                  <Lang>
                    {
                      project.tech.map((language, languageIdx) => <span key={languageIdx} className="py-1 px-2 m-1 rounded">{language}</span>)
                    }
                  </Lang>
                  <SeePro
                    type="button"
                    className="p-2 my-2 rounded text-white"
                    onClick={() => {
                      setCurrentProject(project);
                      setModalIsOpen(true);
                    }}
                  >
                    See Project
                  </SeePro>
                </div>
              </Proj>
            ))
    }
      </ProjectW>
      <CustomModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} title={currentProject.title} description={currentProject.description} imageUrl={currentProject.image} codeLink={currentProject.codeLink} liveUrl={currentProject.liveUrl} tech={currentProject.tech} />
              
    </Recent>
  );
}
 
export default RecentWorks;