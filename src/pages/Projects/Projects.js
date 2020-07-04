import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';

import Layout from '../../components/Layout';
import { SectionTitle, Pill } from '../../styles';
import { ProjectItem, ProjectTitle, SkillContainer, ProjectImage } from './styles';

const Projects = ({ user }) => {
    
  return (
    <Layout user={user}>
      <div className="">
        <SectionTitle className="text-center">Projects</SectionTitle>
        <ul className="text-color">
          {user.projects.map((project, i) => (
            <ProjectItem key={i}>
              
              <Row className="row sum-skills">
                  <Col className="sm{12}">
                    <ProjectTitle className="text-center">{project.name}</ProjectTitle>
                    <ProjectImage>
                        <img src={project.images[0].resolutions.mobile.url} alt=""/>
                    </ProjectImage>
                  </Col>
                  <Col className="sm{12}">
                    <p>{project.summary}</p>
                    <SkillContainer>
                        {[...project.languages, ...project.libraries].map((item, j) => (
                            <Pill key={j}>{item}</Pill>
                        ))}
                    </SkillContainer>
                    <div className="icon-wrap">
                        <Button
                        href={project.githubUrl} target="_blank" 
                        rel="noopener noreferrer">
                            <i className="fa fa-github fa-3x"></i>
                        </Button>
                        <a className="live-demo t-color" href={project.website} target="_blank" rel="noopener noreferrer">Live</a>
                    </div>
                  </Col>
              </Row>             
            </ProjectItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Projects;