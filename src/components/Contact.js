import React from 'react';
import {
  FaAngellist, FaGithub, FaLinkedinIn, FaMedium, FaTwitter,
} from 'react-icons/fa';

import styled, { css } from 'styled-components';
import MyContact from './ContactForm';

const commonStyleFlex = css`
  display: flex;
`;

const commonStyleGrid = css`
  display: grid;
`;
const ContactWrap = styled.div`
  width: 100%;
  padding: 64px 0 24px;

  @media only screen and (max-width: 600px) {
    padding: 48px 0 20px;
  }
`;

const Main = styled.main`
  width: 90%;
  max-width: 1140px;
  margin: 0 auto 40px;
  ${commonStyleGrid}
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 40px;
  align-items: start;

  @media(max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const Divider = styled.div`
  width: 90%;
  max-width: 1140px;
  margin: 0 auto;
  height: 1px;
  background: #DFE1E6;
`;

const FooterLinks = styled.footer`
  min-height: 90px;
  ${commonStyleFlex}
  justify-content: center;
  align-items: center;
  padding: 16px 0;

  @media(max-width: 769px) {
    min-height: auto;
  }
`;

const ContactMsg = styled.div`
  width: 100%;
  margin: 0;
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 52px;
  ${commonStyleFlex}
  align-items: flex-start;
  color: #262626;

  @media only screen and (max-width: 768px) {
    font-size: 30px;
    line-height: 1.3;
  }
`;

const Wrp = styled.div`
  ${commonStyleGrid}
  grid-template-columns: repeat(5, auto);
  gap: 16px;
  width: auto;
  margin-top: 16px;
  padding: 0;

  @media(max-width: 769px) {
    gap: 12px;
  }
`;
const AColor = styled.a`
  color: #FF985C !important;

  &:hover {
    color: black !important;
  }

  @media(max-width: 768px) {
    color: #F55800;

    &:hover {
      color: #CFCFCF;
    }
  }
`;

const SLinks = styled.li`
  color: #CFCFCF;
  list-style: none;
`;
const Contact = () => (
  <ContactWrap id="contact">
    <Main>
      <ContactMsg>
        I&apos;m always interested in hearing about new projects,
        so if you&apos;d like to work please get in touch.
      </ContactMsg>
      <MyContact />
    </Main>
    <Divider />
    <FooterLinks>
      <Wrp>
        <SLinks>
          <AColor href="https://github.com/addod19" target="_blank" rel="noopener noreferrer" className="s-links animTop">
            <FaGithub className="rot" />
          </AColor>
        </SLinks>
        <SLinks>
          <AColor href="https://www.linkedin.com/in/daniel-larbi-addo/" target="_blank" rel="noopener noreferrer" className="s-links animTop">
            <FaLinkedinIn className="rot" />
          </AColor>
        </SLinks>
        <SLinks>
          <AColor href="https://medium.com/@addodaniellarbi" target="_blank" rel="noopener noreferrer" className="s-links animTop">
            <FaMedium className="rot" />
          </AColor>
        </SLinks>
        <SLinks>
          <AColor href="https://twitter.com/DanielLarbiAdd1" target="_blank" rel="noopener noreferrer" className="s-links animTop">
            <FaTwitter className="rot" />
          </AColor>
        </SLinks>
        <SLinks>
          <AColor href="https://angel.co/u/daniel-larbi-addo" target="_blank" rel="noopener noreferrer" className="s-links animTop">
            <FaAngellist className="rot" />
          </AColor>
        </SLinks>
      </Wrp>
    </FooterLinks>
  </ContactWrap>
);

export default Contact;
