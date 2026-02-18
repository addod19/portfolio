import { useState } from 'react';

import styled, { css } from 'styled-components';

import Modal from 'react-modal';
import CustomModal from './CustomModal';

const commonFlex = css`
  display: flex;
`;

const fullWidth = css`
  width: 100%;
`;
const Recent = styled.div`
  ${fullWidth}

  @media only screen and (max-width: 600px) {
    ${fullWidth}
    ${commonFlex}
    flex-direction: column;  
  }
`;

const FirstRow = styled.div`
  ${commonFlex}
  align-items: center;
  gap: 24px;
  width: 90%;
  margin: 0 auto 24px;

  @media(max-width: 768px) {
    display: block;
  }
`;

const Divider = styled.div`
  flex: 1;
  min-width: 120px;
  height: 1px;
  background: #212121;

  @media only screen and (max-width: 600px) {
    width: 90%;
    margin: 10px auto 0;
  }
`;

const H1 = styled.h1`
  font-family: Crete Round;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 52px;
  margin: 0;
  white-space: nowrap;
  color: #091E42;

  @media only screen and (max-width: 600px) {
    width: 100%;
    font-size: 34px;
    line-height: 52px;
    color: #1C1A19;
    margin: 0 auto;
    text-align: center;
  }
`;

const SeePro = styled.button`
  background: #545454;
  border: none;
`;
const ProjectW = styled.div`
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;

  @media only screen and (max-width: 992px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media only screen and (max-width: 600px) {
    ${fullWidth}
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const Proj = styled.article`
  height: 100%;
  padding: 12px;
  border: 1px solid #d7d7d7;
  border-radius: 8px;
  background: #ffffff;
`;
const MobileImg = styled.div`
  @media only screen and (max-width: 600px) {
    position: relative;
    left: 0px;
    ${fullWidth}
  }
`;

const Lang = styled.div`
  min-height: 50px;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  @media only screen and (max-width: 600px) {
    ${fullWidth}
  }
`;

const TechStyle = styled.span`
  display: inline-flex;
  align-items: center;
  border: 1px solid #6f6f6f;
  border-top: 1px solid #6f6f6f;
  background: #fff;
  height: auto;
`;
const projects = [
  {
    id: '01',
    image: '/Images/fb.png',
    alt: 'Facebook App',
    title: 'Facebook Clone',
    description: 'An authenticated user can post, comment, send/accept/reject a friend request.',
    codeLink: 'https://github.com/addod19/facebook-clone',
    liveUrl: 'https://secret-sea-76381.herokuapp.com/',
    tech: ['Rails', 'SCSS', 'OmniAuth', 'Bootstrap'],
  },
  {
    id: '02',
    image: '/Images/rec.png',
    alt: 'Recipe App',
    title: 'Recipe App',
    description: 'This application allows any user to check for their favorite recipe and how to prepare.',
    codeLink: 'https://github.com/addod19/redux_recipe',
    liveUrl: 'https://redux-recipe.herokuapp.com/',
    tech: ['React', 'CSS3', 'Jest', 'Axios'],
  },
  {
    id: '03',
    image: '/Images/ga.png',
    alt: 'Shooter Game',
    title: 'Shooter Game',
    description: "A user enters their name and starts to enjoy the game. Kill as many enemies you can, don't get killed.",
    codeLink: 'https://github.com/addod19/js_game_capstone',
    liveUrl: 'https://addod19.github.io/js_game_capstone/',
    tech: ['JS', 'Phaser', 'CSS3'],
  },
  {
    id: '04',
    image: '/Images/cms.png',
    alt: 'BookStore',
    title: 'BookStore',
    description: 'In this project, I built a bookstore app with React and Redux.',
    codeLink: 'https://github.com/addod19/redux_recipe',
    liveUrl: 'https://redux-book.herokuapp.com/',
    tech: ['React', 'Redux', 'CSS3'],
  },
  {
    id: '05',
    image: '/Images/todo.png',
    alt: 'Todo app',
    title: 'Todo',
    description: 'In this project, I applied the concepts of Single Responsibility and Loosely Coupled Objects while building our todo app.',
    codeLink: 'https://github.com/addod19/todo',
    liveUrl: 'https://addod19.github.io/todo/',
    tech: ['JavaScript', 'UI Kit', 'CSS3', 'HTML'],
  },
  {
    id: '06',
    image: '/Images/newsw.png',
    alt: 'Newsweek',
    title: 'Newsweek clone',
    description: 'A practical demonstration of designing a website with a bootstrap framework. ',
    codeLink: 'https://github.com/addod19/using-bootstrap',
    liveUrl: 'https://addod19.github.io/using-bootstrap/',
    tech: ['HTML5', 'CSS3', 'Bootstrap'],
  },

];

Modal.setAppElement('#root');
const RecentWorks = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState([0]);

  return (
    <Recent className="mb-3">
      <FirstRow>
        <H1>My Recent Works</H1>
        <Divider />
      </FirstRow>
      <ProjectW>
        {
            projects.map((project) => (

              <Proj key={project.id}>
                <MobileImg className="ImgW">
                  <img src={project.image} alt={project.alt} className="img" title="click 'See Project' to view description" />
                </MobileImg>
                <div>
                  <h4 className="text-center">{project.title}</h4>
                  <span>{project.description}</span>
                  <Lang>
                    {
                      project.tech.map((language) => (
                        <TechStyle
                          key={`${project.id}-${language}`}
                          className="py-1 px-2 m-1 rounded"
                        >
                          {language}
                        </TechStyle>
                      ))
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
      <CustomModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        title={currentProject.title}
        description={currentProject.description}
        imageUrl={currentProject.image}
        codeLink={currentProject.codeLink}
        liveUrl={currentProject.liveUrl}
        tech={currentProject.tech}
      />
    </Recent>
  );
};

export default RecentWorks;
