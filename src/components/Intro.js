import React from 'react';
import styled from 'styled-components';
import {
  FaGithub,
  FaTwitter,
  FaMedium,
  FaAngellist,
  FaLinkedinIn,
} from 'react-icons/fa';
import ImgD from '../Images/Group.png';

const IntroStyle = styled.section`
  position: relative;
  width: 100%;
  min-height: 760px;
  padding: 88px 7% 80px;
  background: #1c1a19;
  overflow: hidden;

  @media only screen and (max-width: 600px) {
    min-height: auto;
    padding: 96px 24px 48px;
  }
`;

const HeroBody = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 40px minmax(0, 620px);
  gap: 32px;
  align-items: start;
  position: relative;
  z-index: 2;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const SocialLinks = styled.ul`
  list-style: none;
  margin: 8px 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 22px;

  @media only screen and (max-width: 600px) {
    flex-direction: row;
    font-size: 20px;
    gap: 16px;
    margin: 0;
    order: 2;
  }
`;

const SLinks = styled.li`
  color: #cfcfcf;
`;

const IntroCopy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const IntroText = styled.h1`
  margin: 0;
  font-family: 'Crete Round', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 72px;
  line-height: 1.05;
  color: #ff985c;

  @media only screen and (max-width: 600px) {
    font-size: 56px;
    line-height: 1.1;
  }
`;

const SupportText = styled.h2`
  margin: 0;
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 1.25;
  color: #ffffff;

  @media only screen and (max-width: 600px) {
    font-size: 24px;
    color: #fff5e1;
  }
`;

const Description = styled.p`
  margin: 0;
  max-width: 566px;
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.5;
  color: #f4f5f7;

  @media only screen and (max-width: 600px) {
    font-size: 16px;
    line-height: 1.5;
    color: #ffffff;
  }
`;

const AColor = styled.a`
  color: #cfcfcf;

  &:hover {
    color: #ffffff;
  }
`;

const ImgDesign = styled.img`
  position: absolute;
  right: 0;
  bottom: 40px;
  width: min(42vw, 520px);
  max-width: 45%;
  pointer-events: none;

  @media only screen and (max-width: 600px) {
    position: static;
    display: block;
    width: min(220px, 50%);
    max-width: 220px;
    margin: 20px 0 0 auto;
  }
`;

const Span = styled.span`
  color: #ff985c;
`;

const Intro = () => (
  <IntroStyle>
    <HeroBody>
      <SocialLinks>
        <SLinks>
          <AColor href="https://github.com/addod19" target="_blank" rel="noopener noreferrer" className="s-links animTop">
            <FaGithub className="rot" />
          </AColor>
        </SLinks>
        <SLinks>
          <AColor href="https://twitter.com/DanielLarbiAdd1" target="_blank" rel="noopener noreferrer" className="s-links animTop">
            <FaTwitter />
          </AColor>
        </SLinks>
        <SLinks>
          <AColor href="https://angel.co/u/daniel-larbi-addo" target="_blank" rel="noopener noreferrer" className="s-links animTop">
            <FaAngellist className="rotate" />
          </AColor>
        </SLinks>
        <SLinks>
          <AColor href="https://medium.com/@addodaniellarbi" target="_blank" rel="noopener noreferrer" className="s-links animTop">
            <FaMedium />
          </AColor>
        </SLinks>
        <SLinks>
          <AColor href="https://www.linkedin.com/in/daniel-larbi-addo/" target="_blank" rel="noopener noreferrer" className="s-links animTop">
            <FaLinkedinIn />
          </AColor>
        </SLinks>
      </SocialLinks>
      <IntroCopy>
        <IntroText>
          <Span>Hi, there. I&apos;m Daniel</Span>
        </IntroText>
        <SupportText>
          I&apos;m a software developer
        </SupportText>
        <Description>
          Hello I&apos;m a software developer! I can help you build a product,
          feature or website. Take a look at some of my work and experience! If you like what you
          see and have a project you need coded, don&apos;t hesitate to contact me.
        </Description>
      </IntroCopy>
    </HeroBody>
    <ImgDesign src={ImgD} alt="helper design" />
  </IntroStyle>
);

export default Intro;
