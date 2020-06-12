import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Pill } from '../../styles';
import { ProjectItem, ProjectTitle, SkillContainer, ProjectImage } from './styles';

const Projects = ({ user }) => {
    console.log(user.projects);
    
  return (
    <Layout user={user}>
      <div className="ml-5-mr-5">
        <SectionTitle className="text-center">Projects</SectionTitle>
        <ul className="text-color">
          {user.projects.map((project, i) => (
            <ProjectItem key={i}>
              
              <div className="sum-skills">
                  <div>
                    <ProjectTitle className="text-center">{project.name}</ProjectTitle>
                    <ProjectImage>
                        <img src={project.images[0].resolutions.mobile.url} alt=""/>
                    </ProjectImage>
                  </div>
                  <div>
                    <p>{project.summary}</p>
                    <SkillContainer>
                        {[...project.languages, ...project.libraries].map((item, j) => (
                            <Pill key={j}>{item}</Pill>
                        ))}
                    </SkillContainer>
                    <div className="icon-wrap">
                        <a
                        href={project.githubUrl} target="_blank" 
                        rel="noopener noreferrer">
                            <i className="fa fa-github fa-3x"></i>
                        </a>
                        <a className="live-demo t-color" href={project.website} target="_blank" rel="noopener noreferrer">Live</a>
                    </div>
                  </div>
              </div>             
            </ProjectItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Projects;