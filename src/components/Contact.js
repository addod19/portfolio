import React from 'react';
import { FaAngellist, FaGithub, FaLinkedinIn, FaMedium, FaTwitter } from 'react-icons/fa';

import styled from 'styled-components';
import MyContact from './ContactForm';

const ContactWrap = styled.div`
  width: 100%;
  height: auto;
  margin-top: 20px;

  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-top: 0px;
  }
`;

const Main = styled.main`
  height: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);


  @media(max-width: 768px) {
    grid-template-columns: 1fr;

  }
`;

const Divider = styled.div`
  position: relative;
  height: 1px;
  left: 0px;
  right: 0px;
  top: 0px;

  background: #DFE1E6;
`;

const FooterLinks = styled.footer`
  height: 90px;
  display: flex;
  justify-content: center;

  @media(max-width: 769px) {
    height: auto;
  }
`;

const ContactMsg = styled.div`
  position: relative;
  width: 455px;
  height: 356px;
  left: 0px;
  top: 0px;

  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 52px;
  /* or 130% */

  display: flex;
  align-items: center;

  color: #262626;


  /* Inside Auto Layout */

  flex: none;
  order: 0;
  align-self: center;
  flex-grow: 0;
  margin: 0px 24px;

  @media only screen and (max-width: 600px) {
    font-size: 28px;
    margin-left: -14px;
    line-height: 30px;
    height: 200px;
    width: 100%;
    margin: auto;
  }
`;

const Wrp = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 30%;
  height: 50px;
  margin-top: 40px;

  @media(max-width: 769px) {
    grid-gap: 10px;
    width: 100%;
    margin-top: 20px;
  }
`;
const AColor = styled.a`
  color: #FF985C !important;
  &:hover {
    color: black !important;
  }

  @media(max-width: 768px) {
    transform: rotate(100deg);
    color: #F55800;

    &:hover {
      color: #CFCFCF;
    }
  }
`;

const SLinks = styled.li`
  color: #CFCFCF;

`;
const Contact = () => {

  return ( 
    <ContactWrap id="contact" className="container">
      <Main className="row">
        <ContactMsg className="col-sm-12 col-xs-12">
          I'm always interested in hearing about new projects, 
          so if you'd like to work please get in touch.
        </ContactMsg>
       <MyContact />
      </Main>
      <Divider></Divider>
      <FooterLinks>
        <Wrp>
          <SLinks>
            <AColor href="https://github.com/addod19" target="_blank" rel="noopener noreferrer" className="s-links animTop">
              <FaGithub className="rot"/>
            </AColor>  
          </SLinks>
          <SLinks>
            <AColor href="https://www.linkedin.com/in/daniel-larbi-addo/" target="_blank" rel="noopener noreferrer" className="s-links animTop">
              <FaLinkedinIn className="rot"/>
            </AColor>  
          </SLinks>
          <SLinks>
            <AColor href="https://medium.com/@addodaniellarbi" target="_blank" rel="noopener noreferrer" className="s-links animTop">
              <FaMedium className="rot"/>
            </AColor>  
          </SLinks>
          <SLinks>
            <AColor href="https://twitter.com/DanielLarbiAdd1" target="_blank" rel="noopener noreferrer" className="s-links animTop">
              <FaTwitter className="rot"/>
            </AColor>  
          </SLinks>
          <SLinks>
            <AColor href="https://angel.co/u/daniel-larbi-addo" target="_blank" rel="noopener noreferrer" className="s-links animTop">
              <FaAngellist className="rot"/>
            </AColor>  
          </SLinks>
        </Wrp>
      </FooterLinks>
    </ContactWrap>
  );
}
 
export default Contact;