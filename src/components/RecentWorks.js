import React, { useState } from 'react';

import styled from 'styled-components';

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
    top: 680px;
    margin-left: -16px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-left: -20px;
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
   
  }
  
`;
const MobileImg = styled.div`
  @media only screen and (max-width: 600px) {
    position: relative;
    left: 0px;
    width: 100%;
  }
`;

const Lang = styled.div`
  @media only screen and (max-width: 600px) {
    width: 100%;
    text-overflow: ellipsis;
  }
`;
const projects = [
  {
    image: '/Images/fb.png',
    alt: 'Facebook App',
    title: 'Facebook Clone',
    description: 'An authenticated user can post, comment, send/accept/reject a friend request.',
    codeLink: 'https://github.com/addod19/facebook-clone',
    liveUrl: 'https://secret-sea-76381.herokuapp.com/',
    tech: ['Rails', 'SCSS', 'OmniAuth', 'Bootstrap'],
  },
  {
    image: '/Images/rec.png',
    alt: 'Recipe App',
    title: 'Recipe App',
    description: 'This application allows any user to check for their favorite recipe and how to prepare.',
    codeLink: 'https://github.com/addod19/redux_recipe',
    liveUrl: 'https://redux-recipe.herokuapp.com/',
    tech: ['React', 'CSS3', 'Jest', 'Axios'],
  },
  {
    image: '/Images/ga.png',
    alt: 'Shooter Game',
    title: 'Shooter Game',
    description: "A user enters their name and starts to enjoy the game. Kill as many enemies you can, don't get killed.",
    codeLink: 'https://github.com/addod19/js_game_capstone',
    liveUrl: 'https://addod19.github.io/js_game_capstone/',
    tech: ['JS', 'Phaser', 'CSS3'],
  },
  {
    image: '/Images/cms.png',
    alt: 'BookStore',
    title: 'BookStore',
    description: 'In this project, I built a bookstore app with React and Redux.',
    codeLink: 'https://github.com/addod19/redux_recipe',
    liveUrl: 'https://redux-book.herokuapp.com/',
    tech: ['React', 'Redux', 'CSS3'],
  },
  {
    image: '/Images/todo.png',
    alt: 'Todo app',
    title: 'Todo',
    description: 'In this project, I applied the concepts of Single Responsibility and Loosely Coupled Objects while building our todo app.',
    codeLink: 'https://github.com/addod19/todo',
    liveUrl: 'https://addod19.github.io/todo/',
    tech: ['JavaScript', 'UI Kit', 'CSS3', 'HTML'],
  },
  {
    image: '/Images/newsw.png',
    alt: 'Newsweek',
    title: 'Newsweek clone',
    description: 'A practical demonstration of designing a website with a bootstrap framework. ',
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
                  <img src={project.image} alt={project.alt} className="img" title="click 'See Project' to view description"/>
                </MobileImg>
                <div className="">
                  <h4 className="text-center">{project.title}</h4>
                  <span>{project.description}</span>
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